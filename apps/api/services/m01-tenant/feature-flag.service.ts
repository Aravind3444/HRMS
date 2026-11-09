import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class FeatureFlagService {
  private readonly logger = new Logger(FeatureFlagService.name);

  constructor(private readonly prisma: PrismaService) {}

  async getFlags(tenantId: string) {
    const flags = await this.prisma.featureFlag.findMany({
      where: { tenantId },
      orderBy: { code: 'asc' },
    });
    return { success: true, data: flags };
  }

  async getFlag(tenantId: string, code: string) {
    const flag = await this.prisma.featureFlag.findUnique({
      where: { tenantId_code: { tenantId, code } },
    });
    if (!flag) throw new NotFoundException(`Feature flag ${code} not found`);
    return { success: true, data: flag };
  }

  async isEnabled(tenantId: string, code: string): Promise<boolean> {
    const flag = await this.prisma.featureFlag.findUnique({
      where: { tenantId_code: { tenantId, code } },
      select: { enabled: true },
    });
    return flag?.enabled ?? false;
  }

  async setFlag(tenantId: string, code: string, enabled: boolean, actorUserId: string) {
    const flag = await this.prisma.featureFlag.update({
      where: { tenantId_code: { tenantId, code } },
      data: { enabled },
    });

    await this.prisma.auditEvent.create({
      data: {
        tenantId,
        actorUserId,
        action: `FEATURE_FLAG_${enabled ? 'ENABLED' : 'DISABLED'}`,
        resourceType: 'FeatureFlag',
        resourceId: flag.id,
        correlationId: require('crypto').randomUUID(),
        diffJson: { enabled: { before: !enabled, after: enabled } },
      },
    });

    this.logger.log(`Feature flag ${code} ${enabled ? 'enabled' : 'disabled'} for tenant ${tenantId}`);
    return { success: true, data: flag };
  }

  async getGlobalFlags() {
    const flags = await this.prisma.featureFlag.findMany({
      where: { tenantId: null }, // Global flags have no tenantId
      orderBy: { code: 'asc' },
    });
    return { success: true, data: flags };
  }
}