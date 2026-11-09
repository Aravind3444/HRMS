import { Injectable, Logger, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CostCenterService {
  private readonly logger = new Logger(CostCenterService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { code, name, description, parentId } = dto;

    const existing = await this.prisma.costCenter.findUnique({
      where: { tenantId_code: { tenantId, code } },
    });
    if (existing) throw new ConflictException('Cost center code already exists');

    // Validate parent cost center exists
    if (parentId) {
      const parent = await this.prisma.costCenter.findFirst({
        where: { id: parentId, tenantId },
      });
      if (!parent) throw new NotFoundException('Parent cost center not found');
    }

    const costCenter = await this.prisma.costCenter.create({
      data: {
        tenantId,
        code,
        name,
        description,
        parentId: parentId || null,
      },
      include: {
        parentCostCenter: { select: { id: true, name: true, code: true } },
        childCostCenters: { select: { id: true, name: true, code: true } },
      },
    });

    this.logger.log(`Cost center created: ${code} in tenant ${tenantId}`);
    return { success: true, data: costCenter };
  }

  async list(tenantId: string) {
    const costCenters = await this.prisma.costCenter.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
      include: {
        parentCostCenter: { select: { id: true, name: true, code: true } },
        childCostCenters: { select: { id: true, name: true, code: true } },
      },
    });
    return { success: true, data: costCenters };
  }

  async getById(tenantId: string, id: string) {
    const costCenter = await this.prisma.costCenter.findFirst({
      where: { id, tenantId },
    });
    if (!costCenter) throw new NotFoundException('Cost center not found');
    return { success: true, data: costCenter };
  }

  async update(tenantId: string, id: string, dto: any) {
    const costCenter = await this.prisma.costCenter.findFirst({
      where: { id, tenantId },
    });
    if (!costCenter) throw new NotFoundException('Cost center not found');

    if (dto.code && dto.code !== costCenter.code) {
      const existing = await this.prisma.costCenter.findUnique({
        where: { tenantId_code: { tenantId, code: dto.code } },
      });
      if (existing) throw new ConflictException('Cost center code already exists');
    }

    if (dto.parentId === id) {
      throw new BadRequestException('Cost center cannot be its own parent');
    }

    const updated = await this.prisma.costCenter.update({
      where: { id },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.code && { code: dto.code }),
        ...(dto.description !== undefined && { description: dto.description || null }),
        ...(dto.parentId !== undefined && { parentId: dto.parentId || null }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
    return { success: true, data: updated };
  }

  async delete(tenantId: string, id: string) {
    const costCenter = await this.prisma.costCenter.findFirst({
      where: { id, tenantId },
      include: {
        _count: { select: { childCostCenters: true } },
      },
    });
    if (!costCenter) throw new NotFoundException('Cost center not found');

    if (costCenter._count.childCostCenters > 0) {
      throw new BadRequestException('Cannot delete cost center with child cost centers');
    }

    await this.prisma.costCenter.delete({ where: { id } });
    return { success: true, message: 'Cost center deleted' };
  }
}
