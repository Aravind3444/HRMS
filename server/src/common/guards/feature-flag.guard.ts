import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { REQUIRED_FEATURE_FLAG_KEY } from '../decorators/feature-flag.decorator';
import { PrismaService } from '../../database/prisma.service';

/**
 * FeatureFlagGuard (TEN-016)
 * Evaluates whether a feature flag is enabled for the tenant.
 * If not enabled, returns 403 FEATURE_DISABLED.
 */
@Injectable()
export class FeatureFlagGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredFlag = this.reflector.getAllAndOverride<string>(
      REQUIRED_FEATURE_FLAG_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredFlag) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const tenantId = request.tenantId;

    if (!tenantId) {
      // If no tenant context, bypass (handled by auth/tenant guard)
      return true;
    }

    // Check tenant-specific flag
    const tenantFlag = await this.prisma.featureFlag.findUnique({
      where: { tenantId_code: { tenantId, code: requiredFlag } },
      select: { enabled: true },
    });

    if (tenantFlag?.enabled) {
      return true;
    }

    // Check global flag as fallback
    const globalFlag = await this.prisma.featureFlag.findUnique({
      where: { tenantId_code: { tenantId: null, code: requiredFlag } },
      select: { enabled: true },
    });

    if (globalFlag?.enabled) {
      return true;
    }

    throw new ForbiddenException({
      code: 'FEATURE_DISABLED',
      message: `Feature '${requiredFlag}' is not enabled for this organization. Contact your administrator.`,
    });
  }
}