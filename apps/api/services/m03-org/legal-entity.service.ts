import { Injectable, Logger, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class LegalEntityService {
  private readonly logger = new Logger(LegalEntityService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { name, code, cin, pan, tan, gstin, pfNumber, esiNumber, isDefault } = dto;

    // Check if code already exists
    const existing = await this.prisma.legalEntity.findUnique({
      where: { tenantId_code: { tenantId, code } },
    });
    if (existing) throw new ConflictException('Legal entity code already exists');

    // If setting as default, unset other defaults
    if (isDefault) {
      await this.prisma.legalEntity.updateMany({
        where: { tenantId, isDefault: true },
        data: { isDefault: false },
      });
    }

    const legalEntity = await this.prisma.legalEntity.create({
      data: {
        tenantId,
        name,
        code,
        isDefault: isDefault ?? false,
        cin,
        pan,
        tan,
        gstin,
        pfNumber,
        esiNumber,
      },
    });

    this.logger.log(`Legal entity created: ${code} in tenant ${tenantId}`);
    return { success: true, data: legalEntity };
  }

  async list(tenantId: string) {
    const entities = await this.prisma.legalEntity.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: entities };
  }

  async getById(tenantId: string, id: string) {
    const entity = await this.prisma.legalEntity.findFirst({
      where: { id, tenantId },
    });
    if (!entity) throw new NotFoundException('Legal entity not found');
    return { success: true, data: entity };
  }

  async update(tenantId: string, id: string, dto: any) {
    const entity = await this.prisma.legalEntity.findFirst({
      where: { id, tenantId },
    });
    if (!entity) throw new NotFoundException('Legal entity not found');

    if (dto.code && dto.code !== entity.code) {
      const existing = await this.prisma.legalEntity.findUnique({
        where: { tenantId_code: { tenantId, code: dto.code } },
      });
      if (existing) throw new ConflictException('Legal entity code already exists');
    }

    if (dto.isDefault) {
      await this.prisma.legalEntity.updateMany({
        where: { tenantId, isDefault: true },
        data: { isDefault: false },
      });
    }

    const updated = await this.prisma.legalEntity.update({
      where: { id },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.code && { code: dto.code }),
        ...(dto.isDefault !== undefined && { isDefault: dto.isDefault }),
        ...(dto.cin !== undefined && { cin: dto.cin }),
        ...(dto.pan !== undefined && { pan: dto.pan }),
        ...(dto.tan !== undefined && { tan: dto.tan }),
        ...(dto.gstin !== undefined && { gstin: dto.gstin }),
        ...(dto.pfNumber !== undefined && { pfNumber: dto.pfNumber }),
        ...(dto.esiNumber !== undefined && { esiNumber: dto.esiNumber }),
      },
    });
    return { success: true, data: updated };
  }

  async delete(tenantId: string, id: string) {
    const entity = await this.prisma.legalEntity.findFirst({
      where: { id, tenantId },
      include: { _count: { select: { locations: true } } },
    });
    if (!entity) throw new NotFoundException('Legal entity not found');

    if (entity._count.locations > 0) {
      throw new BadRequestException('Cannot delete legal entity with existing locations');
    }

    await this.prisma.legalEntity.delete({ where: { id } });
    return { success: true, message: 'Legal entity deleted' };
  }
}
