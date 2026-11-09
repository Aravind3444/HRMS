import { Injectable, NotFoundException, Logger, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { UpdateTenantSettingsDto } from './dto/tenant-settings.dto';
import * as crypto from 'crypto';

@Injectable()
export class TenantSettingsService {
  private readonly logger = new Logger(TenantSettingsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async getSettings(tenantId: string, requestingUserId: string) {
    const membership = await this.prisma.membership.findFirst({
      where: { userId: requestingUserId, tenantId, status: 'active' },
    });
    if (!membership) throw new NotFoundException('Tenant not found');

    const settings = await this.prisma.tenantSettings.findUnique({
      where: { tenantId },
    });
    if (!settings) throw new NotFoundException('Tenant settings not found');

    return { success: true, data: settings };
  }

  async updateSettings(tenantId: string, dto: UpdateTenantSettingsDto, requestingUserId: string) {
    const membership = await this.prisma.membership.findFirst({
      where: { userId: requestingUserId, tenantId, status: 'active' },
      include: {
        roleGrants: {
          include: {
            role: {
              include: {
                rolePermissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!membership) throw new NotFoundException('Tenant not found');

    // Check if user has OA role or tenant:settings:update permission
    const hasPermission = membership.roleGrants.some(
      (grant) => grant.role.code === 'OA' || grant.role.rolePermissions.some((rp) => rp.permission.code === 'tenant:settings:update'),
    );

    if (!hasPermission) {
      throw new ForbiddenException('Insufficient permissions to update tenant settings');
    }

    const settings = await this.prisma.tenantSettings.update({
      where: { tenantId },
      data: {
        ...(dto.country !== undefined && { country: dto.country }),
        ...(dto.timezone !== undefined && { timezone: dto.timezone }),
        ...(dto.currency !== undefined && { currency: dto.currency }),
        ...(dto.weekStartDay !== undefined && { weekStartDay: dto.weekStartDay }),
        ...(dto.mfaRequired !== undefined && { mfaRequired: dto.mfaRequired }),
        ...(dto.sessionTtlHours !== undefined && { sessionTtlHours: dto.sessionTtlHours }),
      },
    });

    this.logger.log(`Tenant settings updated for ${tenantId} by user ${requestingUserId}`);

    return { success: true, data: settings };
  }

  async markSetupCompleted(tenantId: string, requestingUserId: string) {
    const membership = await this.prisma.membership.findFirst({
      where: { userId: requestingUserId, tenantId, status: 'active' },
      include: { roleGrants: { include: { role: true } } },
    });
    if (!membership) throw new NotFoundException('Tenant not found');

    const hasPermission = membership.roleGrants.some(
      (grant) => grant.role.code === 'OA',
    );

    if (!hasPermission) {
      throw new ForbiddenException('Only Organization Admin can complete setup wizard');
    }

    const settings = await this.prisma.tenantSettings.update({
      where: { tenantId },
      data: {
        setupCompleted: true,
        completedAt: new Date(),
        completedBy: requestingUserId,
      },
    });

    // Audit event
    await this.prisma.auditEvent.create({
      data: {
        tenantId,
        actorUserId: requestingUserId,
        action: 'TENANT_SETUP_COMPLETED',
        resourceType: 'TenantSettings',
        resourceId: tenantId,
        correlationId: crypto.randomUUID(),
      },
    });

    this.logger.log(`Setup wizard completed for tenant ${tenantId} by user ${requestingUserId}`);

    return { success: true, data: settings };
  }

  async getMfaRequired(tenantId: string): Promise<boolean> {
    const settings = await this.prisma.tenantSettings.findUnique({
      where: { tenantId },
      select: { mfaRequired: true },
    });
    return settings?.mfaRequired ?? false;
  }

  async getSessionTtlHours(tenantId: string): Promise<number> {
    const settings = await this.prisma.tenantSettings.findUnique({
      where: { tenantId },
      select: { sessionTtlHours: true },
    });
    return settings?.sessionTtlHours ?? 12;
  }
}