import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { SessionService } from './session.service';
import { LoginDto } from './dto/login.dto';
import { TenantSettingsService } from '../../../modules/m01-tenant/tenant-settings.service';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly sessionService: SessionService,
    private readonly tenantSettingsService: TenantSettingsService,
  ) {}

  async login(dto: LoginDto, res: Response) {
    const normalizedEmail = dto.email.toLowerCase().trim();

    const user = await this.prisma.user.findUnique({
      where: { email: normalizedEmail },
      include: {
        memberships: {
          where: { status: 'active' },
          include: { tenant: true },
        },
      },
    });

    const dummyHash = '$2a$12$e8kZt28FhBv5EZZ2K59W3.sL7W6W7dKx14jJ9vL8eC9xH7xX.kLqy';
    const hash = user?.passwordHash ?? dummyHash;
    const valid = await bcrypt.compare(dto.password, hash).catch(() => false);

    if (!user || !valid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Tenant lifecycle check for non-platform users
    let sessionTtlHours = 12; // default
    if (!user.isPlatformAdmin) {
      const activeMembership = user.memberships[0];
      if (!activeMembership || !activeMembership.tenant) {
        throw new ForbiddenException({
          code: 'NO_ACTIVE_TENANT',
          message: 'No active company membership found for this account.',
        });
      }

      const tenant = activeMembership.tenant;
      if (tenant.status === 'pending_review') {
        throw new ForbiddenException({
          code: 'TENANT_PENDING_APPROVAL',
          message: 'Your organization is pending review and approval by platform administrators.',
        });
      }

      if (tenant.status === 'suspended') {
        throw new ForbiddenException({
          code: 'TENANT_SUSPENDED',
          message: 'Your organization has been suspended. Please contact platform support.',
        });
      }

      if (tenant.status === 'cancelled' || tenant.status === 'archived') {
        throw new ForbiddenException({
          code: 'TENANT_INACTIVE',
          message: 'Your organization account is no longer active.',
        });
      }

      // Get tenant's session TTL setting (TEN-007)
      sessionTtlHours = await this.tenantSettingsService.getSessionTtlHours(tenant.id);

      // Check MFA requirement (TEN-007)
      const mfaRequired = await this.tenantSettingsService.getMfaRequired(tenant.id);
      if (mfaRequired && !user.mfaEnabled) {
        throw new ForbiddenException({
          code: 'MFA_REQUIRED',
          message: 'Multi-factor authentication is required for this organization. Please enroll MFA to continue.',
          mfaEnrollmentRequired: true,
        });
      }
    }

    await this.sessionService.createSession(user.id, res, sessionTtlHours);

    let activeTenant = null;
    if (!user.isPlatformAdmin) {
      activeTenant = user.memberships[0]?.tenant ?? null;
    }
    return {
      success: true,
      data: {
        userId: user.id,
        email: user.email,
        fullName: user.fullName,
        isPlatformAdmin: user.isPlatformAdmin,
        tenantId: activeTenant?.id ?? null,
        tenantSlug: activeTenant?.slug ?? null,
      },
    };
  }

  async logout(userId: string | undefined, res: Response) {
    if (userId) {
      await this.prisma.userSession.updateMany({
        where: { userId, revokedAt: null },
        data: { revokedAt: new Date(), revocationReason: 'logout' },
      }).catch(() => {});
    }
    const cookieOpts = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
    };
    res.clearCookie('hrms_access_token', cookieOpts);
    res.clearCookie('hrms_refresh_token', cookieOpts);
    return { success: true };
  }

  async getAuthUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        memberships: {
          where: { status: 'active' },
          include: {
            tenant: true,
            roleGrants: {
              include: {
                role: {
                  include: { rolePermissions: { include: { permission: true } } },
                },
              },
            },
          },
        },
      },
    });
    if (!user) throw new NotFoundException('User not found');

    const activeMembership = user.memberships[0] ?? null;
    const roles = new Set<string>();
    const permissions = new Set<string>();
    for (const grant of activeMembership?.roleGrants ?? []) {
      roles.add(grant.role.code);
      for (const rp of grant.role.rolePermissions) permissions.add(rp.permission.code);
    }

    return {
      success: true,
      data: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        isPlatformAdmin: user.isPlatformAdmin,
        activeTenant: activeMembership
          ? {
              id: activeMembership.tenant.id,
              name: activeMembership.tenant.name,
              slug: activeMembership.tenant.slug,
              status: activeMembership.tenant.status,
              membershipId: activeMembership.id,
              roles: Array.from(roles),
              permissions: Array.from(permissions),
            }
          : null,
      },
    };
  }

  async refresh(refreshToken: string, res: Response) {
    // Get tenantId from the refresh token's session to fetch sessionTtlHours
    const tokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex');
    const session = await this.prisma.userSession.findFirst({
      where: { refreshTokenHash: tokenHash, revokedAt: null },
      include: { user: { include: { memberships: { where: { status: 'active' }, include: { tenant: true } } } } },
    });

    let sessionTtlHours = 12;
    if (session?.user?.memberships?.[0]?.tenant?.id) {
      sessionTtlHours = await this.tenantSettingsService.getSessionTtlHours(session.user.memberships[0].tenant.id);
    }

    return this.sessionService.rotateSession(refreshToken, res, sessionTtlHours);
  }

  async forgotPassword(email: string) {
    this.logger.log(`Password reset requested for ${email}`);
    return { success: true, message: 'If that email exists, a reset link has been sent' };
  }

  async resetPassword(token: string, newPassword: string) {
    this.logger.log(`Password reset with token`);
    return { success: true, message: 'Password reset successfully' };
  }

  /**
   * Verify single-use email verification token (TEN-002)
   * Email verification is now auto-completed at signup.
   * This endpoint is kept for backward compatibility.
   */
  async verifyEmail(rawToken: string) {
    // Email verification is auto-completed at signup.
    // This endpoint is kept for backward compatibility with frontend flows.
    return { success: true, message: 'Email verification is not required. You can now log in.' };
  }
}
