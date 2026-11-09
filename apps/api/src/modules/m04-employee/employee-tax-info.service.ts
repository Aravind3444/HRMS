import { Injectable, Logger, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EmployeeTaxInfoService {
  private readonly logger = new Logger(EmployeeTaxInfoService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { employeeId, panNumber, aadhaarNumber, uanNumber, bankAccountNumber, bankName, bankIFSC, taxSlab } = dto;

    const employee = await this.prisma.employee.findFirst({
      where: { id: employeeId, tenantId },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    // Check if tax info already exists
    const existing = await this.prisma.employeeTaxInfo.findFirst({
      where: { tenantId, employeeId },
    });
    if (existing) throw new ConflictException('Tax info already exists for this employee');

    const taxInfo = await this.prisma.employeeTaxInfo.create({
      data: {
        tenantId,
        employeeId,
        panNumber,
        aadhaarNumber,
        uanNumber,
        bankAccountNumber,
        bankName,
        bankIFSC,
        taxSlab,
      },
    });

    this.logger.log(`Tax info created for employee ${employeeId}`);
    return { success: true, data: taxInfo };
  }

  async list(tenantId: string, employeeId?: string) {
    const where: any = { tenantId };
    if (employeeId) where.employeeId = employeeId;

    const taxInfos = await this.prisma.employeeTaxInfo.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: taxInfos };
  }

  async getById(tenantId: string, id: string) {
    const taxInfo = await this.prisma.employeeTaxInfo.findFirst({
      where: { id, tenantId },
    });
    if (!taxInfo) throw new NotFoundException('Tax info not found');
    return { success: true, data: taxInfo };
  }

  async update(tenantId: string, id: string, dto: any) {
    const taxInfo = await this.prisma.employeeTaxInfo.findFirst({
      where: { id, tenantId },
    });
    if (!taxInfo) throw new NotFoundException('Tax info not found');

    const updated = await this.prisma.employeeTaxInfo.update({
      where: { id },
      data: {
        ...(dto.panNumber && { panNumber: dto.panNumber }),
        ...(dto.aadhaarNumber && { aadhaarNumber: dto.aadhaarNumber }),
        ...(dto.uanNumber && { uanNumber: dto.uanNumber }),
        ...(dto.bankAccountNumber && { bankAccountNumber: dto.bankAccountNumber }),
        ...(dto.bankName && { bankName: dto.bankName }),
        ...(dto.bankIFSC && { bankIFSC: dto.bankIFSC }),
        ...(dto.taxSlab && { taxSlab: dto.taxSlab }),
      },
    });

    return { success: true, data: updated };
  }

  async delete(tenantId: string, id: string) {
    const taxInfo = await this.prisma.employeeTaxInfo.findFirst({
      where: { id, tenantId },
    });
    if (!taxInfo) throw new NotFoundException('Tax info not found');

    await this.prisma.employeeTaxInfo.delete({ where: { id } });
    return { success: true, message: 'Tax info deleted successfully' };
  }
}
