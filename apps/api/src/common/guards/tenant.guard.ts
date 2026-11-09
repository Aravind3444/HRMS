import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { PrismaService } from '../../database/prisma.service';

/**
 * TenantGuard (CF-17 / TEN-004)
 * Ensures that if a user is authenticated, their active tenant must be in 'active' status.
 * Returns 403 TENANT_PENDING_APPROVAL or TENANT_SUSPENDED if the tenant is not active.
 */
@Injectable()
export class TenantGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    const userId = request.cookies?.['hrms_access_token'];
    if (!userId) {
      // AuthGuard handles 401 Unauthenticated
      return true;
    }

    // Platform routes (Super Admin) bypass tenant status checks
    if (request.url?.includes('/api/v1/platform/') || request.url?.includes('/api/v1/auth/me')) {
      return true;
    }

    // Fetch user and active membership tenant status
    const membership = await this.prisma.membership.findFirst({
      where: { userId, status: 'active' },
      include: { tenant: true },
    });

    if (!membership) {
      return true;
    }

    const tenant = membership.tenant;
    request.tenantId = tenant.id;

    if (tenant.status === 'pending_review') {
      throw new ForbiddenException({
        code: 'TENANT_PENDING_APPROVAL',
        message: 'Your organization is pending review by platform administrators.',
      });
    }

    if (tenant.status === 'suspended') {
      throw new ForbiddenException({
        code: 'TENANT_SUSPENDED',
        message: 'Your organization account is suspended. Please contact platform support.',
      });
    }

    if (tenant.status === 'cancelled' || tenant.status === 'archived') {
      throw new ForbiddenException({
        code: 'TENANT_INACTIVE',
        message: 'Your organization account is no longer active.',
      });
    }

    return true;
  }
}
