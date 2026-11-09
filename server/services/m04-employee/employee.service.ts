import { Injectable, Logger, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EmployeeService {
  private readonly logger = new Logger(EmployeeService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const code = dto.code || dto.employeeCode;
    if (!code) throw new BadRequestException('Employee code is required');
    if (!tenantId) throw new BadRequestException('Tenant ID is required');

    const existing = await this.prisma.employee.findUnique({
      where: { tenantId_employeeCode: { tenantId, employeeCode: code } },
    });
    if (existing) throw new ConflictException(`Employee code '${code}' already exists`);

    // Resolve or provision user
    let userId = dto.userId;
    if (userId) {
      const user = await this.prisma.user.findUnique({ where: { id: userId } });
      if (!user) throw new NotFoundException('User not found');

      // Check if user already has an employee record in this tenant
      const existingUserEmp = await this.prisma.employee.findFirst({
        where: { tenantId, userId },
      });
      if (existingUserEmp) {
        // If the user already has an employee record in this tenant (e.g. org admin creating new teammates),
        // we create a new user for this distinct employee rather than blocking
        userId = undefined;
      }
    }

    if (!userId) {
      const email = dto.email?.trim().toLowerCase() || `${code.toLowerCase()}@${tenantId.substring(0, 8)}.hrms.internal`;
      let user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) {
        const tempPassword = crypto.randomBytes(16).toString('hex');
        const passwordHash = await bcrypt.hash(tempPassword, 10);
        user = await this.prisma.user.create({
          data: {
            email,
            passwordHash,
            fullName: dto.name || 'Employee',
            phoneNumber: dto.phoneNumber || undefined,
            isEmailVerified: true,
          },
        });
      } else if (dto.name && user.fullName !== dto.name) {
        // Update user's name if needed
        await this.prisma.user.update({
          where: { id: user.id },
          data: { fullName: dto.name },
        });
      }
      userId = user.id;

      // Ensure membership in tenant
      await this.prisma.membership.upsert({
        where: { tenantId_userId: { tenantId, userId } },
        update: { status: 'active' },
        create: {
          tenantId,
          userId,
          status: 'active',
          joinedAt: new Date(),
        },
      });
    }

    // Double check unique constraint on [tenantId, userId]
    const alreadyLinked = await this.prisma.employee.findFirst({
      where: { tenantId, userId },
    });
    if (alreadyLinked) {
      // Create a unique shadow user record for this employee
      const uniqueEmail = `emp.${Date.now()}.${crypto.randomBytes(4).toString('hex')}@hrms.internal`;
      const passwordHash = await bcrypt.hash(crypto.randomBytes(16).toString('hex'), 10);
      const shadowUser = await this.prisma.user.create({
        data: {
          email: uniqueEmail,
          passwordHash,
          fullName: dto.name || 'Employee',
          phoneNumber: dto.phoneNumber || undefined,
          isEmailVerified: true,
        },
      });
      userId = shadowUser.id;
      await this.prisma.membership.create({
        data: {
          tenantId,
          userId,
          status: 'active',
          joinedAt: new Date(),
        },
      });
    }

    // Resolve legalEntityId (auto-fallback to default or first legal entity of tenant if not supplied)
    let legalEntityId = dto.legalEntityId;
    if (!legalEntityId) {
      const defaultEntity = await this.prisma.legalEntity.findFirst({
        where: { tenantId, isDefault: true },
      }) || await this.prisma.legalEntity.findFirst({
        where: { tenantId },
        orderBy: { createdAt: 'asc' },
      });
      if (defaultEntity) {
        legalEntityId = defaultEntity.id;
      } else {
        // Create an automatic default legal entity for this tenant so employee creation never blocks
        const tenant = await this.prisma.tenant.findUnique({ where: { id: tenantId } });
        const newEntity = await this.prisma.legalEntity.create({
          data: {
            tenantId,
            name: tenant?.name || 'Default Legal Entity',
            code: 'DEFAULT',
            isDefault: true,
          },
        });
        legalEntityId = newEntity.id;
      }
    }

    const employee = await this.prisma.employee.create({
      data: {
        tenantId,
        userId,
        legalEntityId,
        locationId: dto.locationId || undefined,
        departmentId: dto.departmentId || undefined,
        designationId: dto.designationId || undefined,
        gradeId: dto.gradeId || undefined,
        costCenterId: dto.costCenterId || undefined,
        employmentTypeId: dto.employmentTypeId || undefined,
        employeeCode: code,
        employeeType: dto.employeeType || 'full_time',
        dateOfJoining: dto.dateOfJoining ? new Date(dto.dateOfJoining) : new Date(),
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
        gender: dto.gender || undefined,
        bloodGroup: dto.bloodGroup || undefined,
        maritalStatus: dto.maritalStatus || undefined,
        address: dto.address || undefined,
        city: dto.city || undefined,
        state: dto.state || undefined,
        pincode: dto.pincode || undefined,
        country: dto.country || undefined,
        emergencyContactName: dto.emergencyContactName || undefined,
        emergencyContactPhone: dto.emergencyContactPhone || undefined,
        emergencyContactRelation: dto.emergencyContactRelation || undefined,
        panNumber: dto.panNumber || undefined,
        aadhaarNumber: dto.aadhaarNumber || undefined,
        bankAccountNumber: dto.bankAccountNumber || undefined,
        bankName: dto.bankName || undefined,
        bankBranch: dto.bankBranch || undefined,
        bankIFSC: dto.bankIFSC || undefined,
        isActive: dto.isActive !== undefined ? dto.isActive : true,
      },
      include: {
        legalEntity: true,
        department: true,
        designation: true,
        user: true,
      },
    });

    this.logger.log(`Employee created: ${code} in tenant ${tenantId}`);
    return {
      success: true,
      data: {
        ...employee,
        name: employee.user?.fullName || dto.name,
        email: employee.user?.email || dto.email,
      },
    };
  }

  async list(tenantId: string, filters?: any) {
    const { departmentId, designationId, gradeId, employmentTypeId, isActive, search } = filters || {};

    const where: any = { tenantId };
    if (departmentId) where.departmentId = departmentId;
    if (designationId) where.designationId = designationId;
    if (gradeId) where.gradeId = gradeId;
    if (employmentTypeId) where.employmentTypeId = employmentTypeId;
    if (isActive !== undefined) where.isActive = isActive;
    if (search) {
      where.OR = [
        { employeeCode: { contains: search, mode: 'insensitive' } },
        { user: { fullName: { contains: search, mode: 'insensitive' } } },
        { user: { email: { contains: search, mode: 'insensitive' } } },
      ];
    }

    const employees = await this.prisma.employee.findMany({
      where,
      include: {
        legalEntity: true,
        location: true,
        department: true,
        designation: true,
        grade: true,
        costCenter: true,
        employmentType: true,
        user: true,
        employeeDocuments: true,
        employeeEmergencyContacts: true,
        employeeBankDetails: true,
        employeeTaxInfos: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    const mapped = employees.map((emp) => ({
      ...emp,
      name: emp.user?.fullName || '',
      email: emp.user?.email || '',
    }));

    return { success: true, data: mapped };
  }

  async getById(tenantId: string, id: string) {
    const employee = await this.prisma.employee.findFirst({
      where: { id, tenantId },
      include: {
        legalEntity: true,
        location: true,
        department: true,
        designation: true,
        grade: true,
        costCenter: true,
        employmentType: true,
        user: true,
        employeeDocuments: true,
        employeeEmergencyContacts: true,
        employeeBankDetails: true,
        employeeTaxInfos: true,
      },
    });
    if (!employee) throw new NotFoundException('Employee not found');
    return {
      success: true,
      data: {
        ...employee,
        name: employee.user?.fullName || '',
        email: employee.user?.email || '',
      },
    };
  }

  async update(tenantId: string, id: string, dto: any) {
    const employee = await this.prisma.employee.findFirst({
      where: { id, tenantId },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    if (dto.code && dto.code !== employee.employeeCode) {
      const existing = await this.prisma.employee.findUnique({
        where: { tenantId_employeeCode: { tenantId, employeeCode: dto.code } },
      });
      if (existing) throw new ConflictException('Employee code already exists');
    }

    if (dto.name || dto.phoneNumber) {
      await this.prisma.user.update({
        where: { id: employee.userId },
        data: {
          ...(dto.name && { fullName: dto.name }),
          ...(dto.phoneNumber && { phoneNumber: dto.phoneNumber }),
        },
      });
    }

    const updated = await this.prisma.employee.update({
      where: { id },
      data: {
        ...(dto.code && { employeeCode: dto.code }),
        ...(dto.departmentId !== undefined && { departmentId: dto.departmentId || null }),
        ...(dto.designationId !== undefined && { designationId: dto.designationId || null }),
        ...(dto.gradeId !== undefined && { gradeId: dto.gradeId || null }),
        ...(dto.costCenterId !== undefined && { costCenterId: dto.costCenterId || null }),
        ...(dto.employmentTypeId !== undefined && { employmentTypeId: dto.employmentTypeId || null }),
        ...(dto.legalEntityId !== undefined && { legalEntityId: dto.legalEntityId }),
        ...(dto.locationId !== undefined && { locationId: dto.locationId || null }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
        ...(dto.address !== undefined && { address: dto.address }),
        ...(dto.city !== undefined && { city: dto.city }),
        ...(dto.state !== undefined && { state: dto.state }),
        ...(dto.pincode !== undefined && { pincode: dto.pincode }),
        ...(dto.country !== undefined && { country: dto.country }),
      } as any,
      include: {
        legalEntity: true,
        location: true,
        department: true,
        designation: true,
        grade: true,
        costCenter: true,
        employmentType: true,
        user: true,
      },
    });

    this.logger.log(`Employee updated: ${id} in tenant ${tenantId}`);
    return {
      success: true,
      data: {
        ...updated,
        name: updated.user?.fullName || '',
        email: updated.user?.email || '',
      },
    };
  }

  async delete(tenantId: string, id: string) {
    const employee = await this.prisma.employee.findFirst({
      where: { id, tenantId },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    await this.prisma.employee.delete({ where: { id } });
    return { success: true, message: 'Employee deleted successfully' };
  }
}

function restDto(dto: any) {
  const rest: any = {};
  if (dto.email) rest.email = dto.email;
  if (dto.dateOfJoining) rest.dateOfJoining = dto.dateOfJoining;
  if (dto.dateOfBirth) rest.dateOfBirth = dto.dateOfBirth;
  if (dto.gender) rest.gender = dto.gender;
  if (dto.bloodGroup) rest.bloodGroup = dto.bloodGroup;
  if (dto.maritalStatus) rest.maritalStatus = dto.maritalStatus;
  if (dto.address) rest.address = dto.address;
  if (dto.city) rest.city = dto.city;
  if (dto.state) rest.state = dto.state;
  if (dto.pincode) rest.pincode = dto.pincode;
  if (dto.country) rest.country = dto.country;
  return rest;
}

export * from './employee-tax-info.service';