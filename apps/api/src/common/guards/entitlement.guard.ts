import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { REQUIRED_ENTITLEMENT_KEY } from '../decorators/entitlement.decorator';
import { PrismaService } from '../../database/prisma.service';

/**
 * EntitlementGuard (TEN-011)
 * Evaluates whether the tenant's current plan version includes the requested module.
 * If not included, returns 403 MODULE_NOT_ENTITLED.
 */
@Injectable()
export class EntitlementGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredModule = this.reflector.getAllAndOverride<string>(
      REQUIRED_ENTITLEMENT_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredModule) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const tenantId = request.tenantId;

    if (!tenantId) {
      // If no tenant context, bypass (handled by auth/tenant guard)
      return true;
    }

    const subscription = await this.prisma.subscription.findUnique({
      where: { tenantId },
      include: {
        planVersion: true,
      },
    });

    if (!subscription || !subscription.planVersion) {
      throw new ForbiddenException({
        code: 'SUBSCRIPTION_NOT_FOUND',
        message: 'No active subscription found for this organization.',
      });
    }

    const modulesIncluded = (subscription.planVersion.modulesIncluded as string[]) || [];

    if (!modulesIncluded.includes(requiredModule)) {
      throw new ForbiddenException({
        code: 'MODULE_NOT_ENTITLED',
        message: `Your organization's current plan (${subscription.planVersion.planId}) does not include module '${requiredModule}'. Upgrade your plan to access this feature.`,
      });
    }

    return true;
  }
}

