import { Injectable, Logger, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EmployeeEmergencyContactService {
  private readonly logger = new Logger(EmployeeEmergencyContactService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { employeeId, name, relationship, phone, email, isPrimary } = dto;

    const employee = await this.prisma.employee.findFirst({
      where: { id: employeeId, tenantId },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    // If setting as primary, unset other primary contacts
    if (isPrimary) {
      await this.prisma.employeeEmergencyContact.updateMany({
        where: { tenantId, employeeId },
        data: { isPrimary: false },
      });
    }

    const contact = await this.prisma.employeeEmergencyContact.create({
      data: {
        tenantId,
        employeeId,
        name,
        relationship,
        phone,
        email,
        isPrimary: isPrimary ?? false,
      },
    });

    this.logger.log(`Emergency contact created for employee ${employeeId}`);
    return { success: true, data: contact };
  }

  async list(tenantId: string, employeeId: string) {
    const contacts = await this.prisma.employeeEmergencyContact.findMany({
      where: { tenantId, employeeId },
      orderBy: [{ isPrimary: 'desc' }, { createdAt: 'desc' }],
    });
    return { success: true, data: contacts };
  }

  async getById(tenantId: string, id: string) {
    const contact = await this.prisma.employeeEmergencyContact.findFirst({
      where: { id, tenantId },
    });
    if (!contact) throw new NotFoundException('Emergency contact not found');
    return { success: true, data: contact };
  }

  async update(tenantId: string, id: string, dto: any) {
    const contact = await this.prisma.employeeEmergencyContact.findFirst({
      where: { id, tenantId },
    });
    if (!contact) throw new NotFoundException('Emergency contact not found');

    const updated = await this.prisma.employeeEmergencyContact.update({
      where: { id },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.relationship !== undefined && { relationship: dto.relationship }),
        ...(dto.phone !== undefined && { phone: dto.phone }),
        ...(dto.email !== undefined && { email: dto.email }),
        ...(dto.isPrimary !== undefined && { isPrimary: dto.isActive }),
      },
    });

    return { success: true, data: updated };
  }

  async delete(tenantId: string, id: string) {
    const contact = await this.prisma.employeeEmergencyContact.findFirst({
      where: { id, tenantId },
    });
    if (!contact) throw new NotFoundException('Emergency contact not found');

    await this.prisma.employeeEmergencyContact.delete({ where: { id } });
    return { success: true, message: 'Emergency contact deleted successfully' };
  }
}
