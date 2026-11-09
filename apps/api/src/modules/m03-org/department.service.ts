import { Injectable, Logger, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DepartmentService {
  private readonly logger = new Logger(DepartmentService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { name, code, description, parentDepartmentId, headEmployeeId } = dto;

    // Check if code already exists
    const existing = await this.prisma.department.findUnique({
      where: { tenantId_code: { tenantId, code } },
    });
    if (existing) throw new ConflictException('Department code already exists');

    // Validate parent department exists
    if (parentDepartmentId) {
      const parent = await this.prisma.department.findFirst({
        where: { id: parentDepartmentId, tenantId },
      });
      if (!parent) throw new NotFoundException('Parent department not found');
    }

    const department = await this.prisma.department.create({
      data: {
        tenantId,
        parentDepartmentId: parentDepartmentId || null,
        name,
        code,
        description,
        headEmployeeId: headEmployeeId || null,
      },
      include: {
        parentDepartment: { select: { id: true, name: true, code: true } },
        childDepartments: { select: { id: true, name: true, code: true } },
      },
    });

    this.logger.log(`Department created: ${code} in tenant ${tenantId}`);
    return { success: true, data: department };
  }

  async list(tenantId: string) {
    const departments = await this.prisma.department.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
      include: {
        parentDepartment: { select: { id: true, name: true, code: true } },
        childDepartments: { select: { id: true, name: true, code: true } },
      },
    });
    return { success: true, data: departments };
  }

  async getById(tenantId: string, id: string) {
    const department = await this.prisma.department.findFirst({
      where: { id, tenantId },
      include: {
        parentDepartment: { select: { id: true, name: true, code: true } },
        childDepartments: { select: { id: true, name: true, code: true } },
      },
    });
    if (!department) throw new NotFoundException('Department not found');
    return { success: true, data: department };
  }

  async update(tenantId: string, id: string, dto: any) {
    const department = await this.prisma.department.findFirst({
      where: { id, tenantId },
    });
    if (!department) throw new NotFoundException('Department not found');

    if (dto.code && dto.code !== department.code) {
      const existing = await this.prisma.department.findUnique({
        where: { tenantId_code: { tenantId, code: dto.code } },
      });
      if (existing) throw new ConflictException('Department code already exists');
    }

    // Prevent self-reference
    if (dto.parentDepartmentId === id) {
      throw new BadRequestException('Department cannot be its own parent');
    }

    const updated = await this.prisma.department.update({
      where: { id },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.code && { code: dto.code }),
        ...(dto.description !== undefined && { description: dto.description || null }),
        ...(dto.parentDepartmentId !== undefined && { parentDepartmentId: dto.parentDepartmentId || null }),
        ...(dto.headEmployeeId !== undefined && { headEmployeeId: dto.headEmployeeId || null }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
    return { success: true, data: updated };
  }

  async delete(tenantId: string, id: string) {
    const department = await this.prisma.department.findFirst({
      where: { id, tenantId },
      include: {
        _count: { select: { childDepartments: true } },
      },
    });
    if (!department) throw new NotFoundException('Department not found');

    if (department._count.childDepartments > 0) {
      throw new BadRequestException('Cannot delete department with child departments');
    }

    await this.prisma.department.delete({ where: { id } });
    return { success: true, message: 'Department deleted' };
  }

  async getTree(tenantId: string) {
    const departments = await this.prisma.department.findMany({
      where: { tenantId, parentDepartmentId: null },
      orderBy: { createdAt: 'asc' },
      include: {
        childDepartments: {
          orderBy: { createdAt: 'asc' },
          include: {
            childDepartments: {
              orderBy: { createdAt: 'asc' },
            },
          },
        },
      },
    });
    return { success: true, data: departments };
  }
}
