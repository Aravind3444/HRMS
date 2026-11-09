import { Injectable, Logger, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DesignationService {
  private readonly logger = new Logger(DesignationService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { code, name, description } = dto;

    const existing = await this.prisma.designation.findUnique({
      where: { tenantId_code: { tenantId, code } },
    });
    if (existing) throw new ConflictException('Designation code already exists');

    const designation = await this.prisma.designation.create({
      data: {
        tenantId,
        code,
        name,
        description,
      },
    });

    this.logger.log(`Designation created: ${code} in tenant ${tenantId}`);
    return { success: true, data: designation };
  }

  async list(tenantId: string) {
    const designations = await this.prisma.designation.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: designations };
  }

  async getById(tenantId: string, id: string) {
    const designation = await this.prisma.designation.findFirst({
      where: { id, tenantId },
    });
    if (!designation) throw new NotFoundException('Designation not found');
    return { success: true, data: designation };
  }

  async update(tenantId: string, id: string, dto: any) {
    const designation = await this.prisma.designation.findFirst({
      where: { id, tenantId },
    });
    if (!designation) throw new NotFoundException('Designation not found');

    if (dto.code && dto.code !== designation.code) {
      const existing = await this.prisma.designation.findUnique({
        where: { tenantId_code: { tenantId, code: dto.code } },
      });
      if (existing) throw new ConflictException('Designation code already exists');
    }

    const updated = await this.prisma.designation.update({
      where: { id },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.code && { code: dto.code }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
    return { success: true, data: updated };
  }

  async delete(tenantId: string, id: string) {
    const designation = await this.prisma.designation.findFirst({
      where: { id, tenantId },
    });
    if (!designation) throw new NotFoundException('Designation not found');

    await this.prisma.designation.delete({ where: { id } });
    return { success: true, message: 'Designation deleted' };
  }
}
