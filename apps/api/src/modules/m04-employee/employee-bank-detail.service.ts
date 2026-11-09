import { Injectable, Logger, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EmployeeBankDetailService {
  private readonly logger = new Logger(EmployeeBankDetailService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { employeeId, bankName, branchName, accountNumber, ifscCode, accountType, isPrimary } = dto;

    const employee = await this.prisma.employee.findFirst({
      where: { id: employeeId, tenantId },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    // If setting as primary, unset other primary bank details
    if (isPrimary) {
      await this.prisma.employeeBankDetail.updateMany({
        where: { tenantId, employeeId },
        data: { isPrimary: false },
      });
    }

    const bankDetail = await this.prisma.employeeBankDetail.create({
      data: {
        tenantId,
        employeeId,
        bankName,
        branchName,
        accountNumber,
        ifscCode,
        accountType: accountType || 'SAVINGS',
        isPrimary: isPrimary ?? false,
        isVerified: false,
      },
    });

    this.logger.log(`Bank detail created for employee ${employeeId}`);
    return { success: true, data: bankDetail };
  }

  async list(tenantId: string, employeeId?: string) {
    const where: any = { tenantId };
    if (employeeId) where.employeeId = employeeId;

    const bankDetails = await this.prisma.employeeBankDetail.findMany({
      where,
      orderBy: [{ isPrimary: 'desc' }, { createdAt: 'desc' }],
    });
    return { success: true, data: bankDetails };
  }

  async getById(tenantId: string, id: string) {
    const bankDetail = await this.prisma.employeeBankDetail.findFirst({
      where: { id, tenantId },
    });
    if (!bankDetail) throw new NotFoundException('Bank detail not found');
    return { success: true, data: bankDetail };
  }

  async update(tenantId: string, id: string, dto: any) {
    const bankDetail = await this.prisma.employeeBankDetail.findFirst({
      where: { id, tenantId },
    });
    if (!bankDetail) throw new NotFoundException('Bank detail not found');

    const updated = await this.prisma.employeeBankDetail.update({
      where: { id },
      data: {
        ...(dto.bankName && { bankName: dto.bankName }),
        ...(dto.branchName && { branchName: dto.branchName }),
        ...(dto.accountNumber && { accountNumber: dto.accountNumber }),
        ...(dto.ifscCode && { ifscCode: dto.ifscCode }),
        ...(dto.accountType && { accountType: dto.accountType }),
        ...(dto.isPrimary !== undefined && { isPrimary: dto.isPrimary }),
        ...(dto.isVerified !== undefined && { isVerified: dto.isVerified }),
      },
    });

    return { success: true, data: updated };
  }

  async delete(tenantId: string, id: string) {
    const bankDetail = await this.prisma.employeeBankDetail.findFirst({
      where: { id, tenantId },
    });
    if (!bankDetail) throw new NotFoundException('Bank detail not found');

    await this.prisma.employeeBankDetail.delete({ where: { id } });
    return { success: true, message: 'Bank detail deleted successfully' };
  }
}
