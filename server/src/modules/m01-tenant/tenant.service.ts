import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { SignupDto } from './dto/signup.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { DefaultSeedingService } from './default-seeding.service';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { Response } from 'express';

const ACCESS_TOKEN_COOKIE = 'hrms_access_token';
const REFRESH_TOKEN_COOKIE = 'hrms_refresh_token';

// Disposable email domains list (subset - expand as needed)
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'tempmail.com', 'throwawaymail.com', '10minutemail.com', 'guerrillamail.com',
  'mailinator.com', 'yopmail.com', 'trashmail.com', 'fakeinbox.com',
  'dispostable.com', 'temp-mail.org', 'getnada.com', 'maildrop.cc',
]);

@Injectable()
export class TenantService {
  private readonly logger = new Logger(TenantService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly defaultSeeding: DefaultSeedingService,
  ) {}

  async getPublicPlans() {
    const plans = await this.prisma.plan.findMany({
      where: { isActive: true },
      include: {
        versions: {
          where: { isPublished: true },
          orderBy: { version: 'desc' },
          take: 1,
        },
      },
      orderBy: { code: 'asc' },
    });
    return { success: true, data: plans };
  }

  async signup(dto: SignupDto, res: Response) {
    const { companyName, companySlug, adminFullName, adminEmail, adminPassword, adminPhoneNumber } = dto;

    const existingTenant = await this.prisma.tenant.findUnique({ where: { slug: companySlug } });
    if (existingTenant) throw new ConflictException('This company URL is already taken');

    const normalizedEmail = adminEmail.toLowerCase().trim();
    
    // Check for disposable email domains (CF-23 validation)
    const emailDomain = normalizedEmail.split('@')[1];
    if (DISPOSABLE_EMAIL_DOMAINS.has(emailDomain)) {
      throw new BadRequestException('Disposable email addresses are not allowed. Please use a work email.');
    }

    const existingUser = await this.prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existingUser) throw new ConflictException('An account with this email already exists');

    const passwordHash = await bcrypt.hash(adminPassword, 12);

    const oaRole = await this.prisma.role.findFirst({ where: { code: 'OA', tenantId: null } });
    if (!oaRole) throw new InternalServerErrorException('System role OA not found. Run: pnpm db:seed');

    // Find default Starter plan and active version (TEN-009 / TEN-010)
    const defaultPlan = await this.prisma.plan.findUnique({
      where: { code: 'starter' },
      include: { versions: { where: { isPublished: true }, orderBy: { version: 'desc' }, take: 1 } },
    });
    if (!defaultPlan || !defaultPlan.versions[0]) {
      throw new InternalServerErrorException('Default Starter plan not seeded. Run: pnpm db:seed');
    }
    const planVersion = defaultPlan.versions[0];

    const result = await this.prisma.$transaction(async (tx) => {
      // 1. Create Tenant in pending_review status (CF-17 / TEN-003)
      const tenant = await tx.tenant.create({
        data: {
          name: companyName,
          slug: companySlug,
          status: 'pending_review',
          planTier: 'starter',
          settings: {
            create: { country: 'IN', timezone: 'Asia/Kolkata', currency: 'INR', weekStartDay: 1 },
          },
        },
      });

      // 2. Create pending Subscription linked to PlanVersion (ORG-BILL-001 / TEN-010)
      const subscription = await tx.subscription.create({
        data: {
          tenantId: tenant.id,
          planVersionId: planVersion.id,
          status: 'pending', // becomes 'trial' (14 days) upon Super Admin activation
          seatLimit: planVersion.seatLimitDefault,
        },
      });

      const legalEntity = await tx.legalEntity.create({
        data: { tenantId: tenant.id, name: companyName, code: 'CORP', isDefault: true },
      });

      const user = await tx.user.create({
        data: {
          email: normalizedEmail,
          passwordHash,
          fullName: adminFullName,
          phoneNumber: adminPhoneNumber,
          isEmailVerified: true, // Email verification removed - auto-verified
        },
      });

      const membership = await tx.membership.create({
        data: { tenantId: tenant.id, userId: user.id, status: 'active', joinedAt: new Date() },
      });

      await tx.membershipRoleGrant.create({
        data: { membershipId: membership.id, roleId: oaRole.id, scopeType: 'ORGANIZATION' },
      });

      const correlationId = crypto.randomUUID();
      await tx.auditEvent.create({
        data: {
          tenantId: tenant.id,
          actorUserId: user.id,
          action: 'TENANT_SIGNUP',
          resourceType: 'Tenant',
          resourceId: tenant.id,
          correlationId,
        },
      });

      await tx.outboxEvent.create({
        data: {
          tenantId: tenant.id,
          eventType: 'TENANT_SIGNUP',
          payloadJson: { tenantId: tenant.id, adminEmail: normalizedEmail, adminName: adminFullName, subscriptionId: subscription.id },
        },
      });

      return { tenant, user, membership, legalEntity, subscription };
    });

    this.logger.log(`Tenant signed up: ${result.tenant.slug} (${result.tenant.id})`);
    await this.issueSessionCookies(result.user.id, res);

    return {
      success: true,
      data: {
        tenantId: result.tenant.id,
        tenantSlug: result.tenant.slug,
        userId: result.user.id,
        email: result.user.email,
        fullName: result.user.fullName,
      },
    };
  }

  async findById(id: string, requestingUserId: string) {
    const membership = await this.prisma.membership.findFirst({
      where: { userId: requestingUserId, tenantId: id, status: 'active' },
    });
    if (!membership) throw new NotFoundException('Tenant not found');

    const tenant = await this.prisma.tenant.findUnique({
      where: { id },
      include: { settings: true },
    });
    if (!tenant) throw new NotFoundException('Tenant not found');
    return { success: true, data: tenant };
  }

  async update(id: string, dto: UpdateTenantDto, requestingUserId: string) {
    const membership = await this.prisma.membership.findFirst({
      where: { userId: requestingUserId, tenantId: id, status: 'active' },
    });
    if (!membership) throw new NotFoundException('Tenant not found');

    const tenant = await this.prisma.tenant.update({
      where: { id },
      data: { ...(dto.name && { name: dto.name }) },
    });
    return { success: true, data: tenant };
  }

  /**
   * Super Admin: List all tenants with pagination and optional status filter
   * Includes admin user details (email, phone, createdAt) for each tenant
   */
  async listTenantsForPlatform(status?: string, limit = 50) {
    const tenants = await this.prisma.tenant.findMany({
      where: status ? { status } : undefined,
      include: {
        subscription: {
          include: {
            planVersion: {
              include: { plan: true },
            },
          },
        },
        settings: true,
        memberships: {
          where: { status: 'active' },
          include: {
            user: {
              select: {
                id: true,
                email: true,
                fullName: true,
                phoneNumber: true,
                createdAt: true,
                isEmailVerified: true,
              },
            },
            roleGrants: {
              include: {
                role: { select: { code: true } },
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
    return { success: true, data: tenants };
  }

  /**
   * Super Admin: Transition tenant lifecycle status (TEN-003, TEN-004)
   * Handles pending_review -> active (starts 14d trial), suspend, reactivate, cancel, archive
   */
  async updateLifecycleStatus(
    tenantId: string,
    action: string,
    reason: string | undefined,
    actorUserId: string,
  ) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
      include: { subscription: true },
    });
    if (!tenant) throw new NotFoundException('Tenant not found');

    let nextTenantStatus = tenant.status;
    let nextSubscriptionStatus = tenant.subscription?.status || 'pending';
    let trialStartsAt: Date | undefined = undefined;
    let trialEndsAt: Date | undefined = undefined;

    switch (action) {
      case 'approve':
        if (tenant.status !== 'pending_review') {
          throw new ConflictException(`Only tenants in 'pending_review' can be approved (current: ${tenant.status})`);
        }
        nextTenantStatus = 'active';
        nextSubscriptionStatus = 'trial';
        trialStartsAt = new Date();
        trialEndsAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14-day trial starts at activation (CF-38)
        break;

      case 'reject':
        if (tenant.status !== 'pending_review') {
          throw new ConflictException(`Only tenants in 'pending_review' can be rejected (current: ${tenant.status})`);
        }
        nextTenantStatus = 'cancelled';
        nextSubscriptionStatus = 'cancelled';
        break;

      case 'suspend':
        if (tenant.status !== 'active') {
          throw new ConflictException(`Only active tenants can be suspended (current: ${tenant.status})`);
        }
        nextTenantStatus = 'suspended';
        nextSubscriptionStatus = 'suspended';
        break;

      case 'reactivate':
        if (tenant.status !== 'suspended') {
          throw new ConflictException(`Only suspended tenants can be reactivated (current: ${tenant.status})`);
        }
        nextTenantStatus = 'active';
        nextSubscriptionStatus = 'active';
        break;

      case 'cancel':
        nextTenantStatus = 'cancelled';
        nextSubscriptionStatus = 'cancelled';
        break;

      case 'archive':
        if (tenant.status !== 'cancelled') {
          throw new ConflictException(`Only cancelled tenants can be archived (current: ${tenant.status})`);
        }
        nextTenantStatus = 'archived';
        nextSubscriptionStatus = 'expired';
        break;

      default:
        throw new BadRequestException(`Unknown lifecycle action: ${action}`);
    }

    const updated = await this.prisma.$transaction(async (tx) => {
      const updatedTenant = await tx.tenant.update({
        where: { id: tenantId },
        data: {
          status: nextTenantStatus,
          trialEndsAt: trialEndsAt ?? tenant.trialEndsAt,
        },
      });

      if (tenant.subscription) {
        await tx.subscription.update({
          where: { tenantId },
          data: {
            status: nextSubscriptionStatus,
            ...(trialStartsAt && { trialStartsAt }),
            ...(trialEndsAt && { trialEndsAt }),
          },
        });
      }

      // Audit the lifecycle transition
      const correlationId = crypto.randomUUID();
      await tx.auditEvent.create({
        data: {
          tenantId,
          actorUserId,
          action: `TENANT_${action.toUpperCase()}`,
          resourceType: 'Tenant',
          resourceId: tenantId,
          reason,
          diffJson: {
            before: { tenantStatus: tenant.status, subscriptionStatus: tenant.subscription?.status },
            after: { tenantStatus: nextTenantStatus, subscriptionStatus: nextSubscriptionStatus },
          },
          correlationId,
        },
      });

      // Outbox event for notifications
      await tx.outboxEvent.create({
        data: {
          tenantId,
          eventType: `TENANT_${action.toUpperCase()}`,
          payloadJson: {
            tenantId,
            tenantName: tenant.name,
            action,
            reason,
            timestamp: new Date().toISOString(),
            adminUserId: actorUserId,
            adminEmail: (await tx.user.findUnique({ where: { id: actorUserId }, select: { email: true } }))?.email,
          },
        },
      });

      // Seed defaults on approve (TEN-005)
      if (action === 'approve') {
        await this.defaultSeeding.seedDefaults(tenantId, actorUserId);
      }

      return updatedTenant;
    });

    this.logger.log(`Tenant ${tenant.slug} (${tenantId}) transitioned to ${nextTenantStatus} via action '${action}'`);
    return { success: true, data: updated };
  }

  private async issueSessionCookies(userId: string, res: Response) {
    const rawRefreshToken = crypto.randomBytes(32).toString('hex');
    const refreshTokenHash = crypto.createHash('sha256').update(rawRefreshToken).digest('hex');
    const sessionFamilyId = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    await this.prisma.userSession.create({
      data: { userId, refreshTokenHash, sessionFamilyId, expiresAt },
    });

    const cookieOpts = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
    };
    res.cookie(ACCESS_TOKEN_COOKIE, userId, { ...cookieOpts, maxAge: 15 * 60 * 1000 });
    res.cookie(REFRESH_TOKEN_COOKIE, rawRefreshToken, { ...cookieOpts, maxAge: 30 * 24 * 60 * 60 * 1000 });
  }
}
