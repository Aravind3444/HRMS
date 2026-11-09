import { Injectable, Logger, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EmploymentTypeService {
  private readonly logger = new Logger(EmploymentTypeService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { code, name, description } = dto;

    const existing = await this.prisma.employmentType.findUnique({
      where: { tenantId_code: { tenantId, code } },
    });
    if (existing) throw new ConflictException('Employment type code already exists');

    const employmentType = await this.prisma.employmentType.create({
      data: {
        tenantId,
        code,
        name,
        description,
      },
    });

    this.logger.log(`Employment type created: ${code} in tenant ${tenantId}`);
    return { success: true, data: employmentType };
  }

  async list(tenantId: string) {
    const employmentTypes = await this.prisma.employmentType.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: employmentTypes };
  }

  async getById(tenantId: string, id: string) {
    const employmentType = await this.prisma.employmentType.findFirst({
      where: { id, tenantId },
    });
    if (!employmentType) throw new NotFoundException('Employment type not found');
    return { success: true, data: employmentType };
  }

  async update(tenantId: string, id: string, dto: any) {
    const employmentType = await this.prisma.employmentType.findFirst({
      where: { id, tenantId },
    });
    if (!employmentType) throw new NotFoundException('Employment type not found');

    if (dto.code && dto.code !== employmentType.code) {
      const existing = await this.prisma.employmentType.findUnique({
        where: { tenantId_code: { tenantId, code: dto.code } },
      });
      if (existing) throw new ConflictException('Employment type code already exists');
    }

    const updated = await this.prisma.employmentType.update({
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
    const employmentType = await this.prisma.employmentType.findFirst({
      where: { id, tenantId },
    });
    if (!employmentType) throw new NotFoundException('Employment type not found');

    await this.prisma.employmentType.delete({ where: { id } });
    return { success: true, message: 'Employment type deleted' };
  }
}
