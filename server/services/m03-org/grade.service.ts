import { Injectable, Logger, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class GradeService {
  private readonly logger = new Logger(GradeService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { code, name, description, minSalary, maxSalary, currency } = dto;

    const existing = await this.prisma.grade.findUnique({
      where: { tenantId_code: { tenantId, code } },
    });
    if (existing) throw new ConflictException('Grade code already exists');

    const grade = await this.prisma.grade.create({
      data: {
        tenantId,
        code,
        name,
        description,
        minSalary,
        maxSalary,
        currency: currency || 'INR',
      },
    });

    this.logger.log(`Grade created: ${code} in tenant ${tenantId}`);
    return { success: true, data: grade };
  }

  async list(tenantId: string) {
    const grades = await this.prisma.grade.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: grades };
  }

  async getById(tenantId: string, id: string) {
    const grade = await this.prisma.grade.findFirst({
      where: { id, tenantId },
    });
    if (!grade) throw new NotFoundException('Grade not found');
    return { success: true, data: grade };
  }

  async update(tenantId: string, id: string, dto: any) {
    const grade = await this.prisma.grade.findFirst({
      where: { id, tenantId },
    });
    if (!grade) throw new NotFoundException('Grade not found');

    if (dto.code && dto.code !== grade.code) {
      const existing = await this.prisma.grade.findUnique({
        where: { tenantId_code: { tenantId, code: dto.code } },
      });
      if (existing) throw new ConflictException('Grade code already exists');
    }

    const updated = await this.prisma.grade.update({
      where: { id },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.code && { code: dto.code }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.minSalary !== undefined && { minSalary: dto.minSalary }),
        ...(dto.maxSalary !== undefined && { maxSalary: dto.maxSalary }),
        ...(dto.currency !== undefined && { currency: dto.currency }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
    return { success: true, data: updated };
  }

  async delete(tenantId: string, id: string) {
    const grade = await this.prisma.grade.findFirst({
      where: { id, tenantId },
    });
    if (!grade) throw new NotFoundException('Grade not found');

    await this.prisma.grade.delete({ where: { id } });
    return { success: true, message: 'Grade deleted' };
  }
}
