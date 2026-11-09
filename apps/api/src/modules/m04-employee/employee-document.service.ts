import { Injectable, Logger, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EmployeeDocumentService {
  private readonly logger = new Logger(EmployeeDocumentService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { employeeId, documentType, documentName, fileUrl, fileSize, expiryDate } = dto;

    const employee = await this.prisma.employee.findFirst({
      where: { id: employeeId, tenantId },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    const document = await this.prisma.employeeDocument.create({
      data: {
        tenantId,
        employeeId,
        documentType,
        documentName,
        fileUrl,
        fileSize,
        expiryDate: expiryDate ? new Date(expiryDate) : null,
      },
    });

    this.logger.log(`Employee document created: ${documentName} for employee ${employeeId}`);
    return { success: true, data: document };
  }

  async list(tenantId: string, employeeId?: string) {
    const where: any = { tenantId };
    if (employeeId) where.employeeId = employeeId;

    const documents = await this.prisma.employeeDocument.findMany({
      where,
      orderBy: { uploadedAt: 'desc' },
    });
    return { success: true, data: documents };
  }

  async getById(tenantId: string, id: string) {
    const document = await this.prisma.employeeDocument.findFirst({
      where: { id, tenantId },
    });
    if (!document) throw new NotFoundException('Document not found');
    return { success: true, data: document };
  }

  async delete(tenantId: string, id: string) {
    const document = await this.prisma.employeeDocument.findFirst({
      where: { id, tenantId },
    });
    if (!document) throw new NotFoundException('Document not found');

    await this.prisma.employeeDocument.delete({ where: { id } });
    return { success: true, message: 'Document deleted successfully' };
  }
}
