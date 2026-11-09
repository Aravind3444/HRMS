import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  Query,
  HttpCode,
  HttpStatus,
  ForbiddenException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCookieAuth, ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { PrismaService } from '../../database/prisma.service';

@ApiTags('ess')
@ApiCookieAuth()
@ApiBearerAuth()
@Controller('ess')
export class EssController {
  constructor(private readonly prisma: PrismaService) {}

  private getTenantId(req: Request, queryTenantId?: string, bodyTenantId?: string): string {
    const tenantId = bodyTenantId || queryTenantId || (req as any).tenantId;
    if (!tenantId) throw new ForbiddenException('Tenant context required');
    return tenantId;
  }

  private async resolveEmployeeId(tenantId: string, req: Request, providedEmpId?: string): Promise<string> {
    if (providedEmpId && providedEmpId.trim()) return providedEmpId;
    const userId = req.cookies?.['hrms_access_token'];
    if (userId) {
      const emp = await this.prisma.employee.findFirst({
        where: { tenantId, userId },
      });
      if (emp) return emp.id;
    }
    const firstEmp = await this.prisma.employee.findFirst({
      where: { tenantId },
      orderBy: { createdAt: 'asc' },
    });
    if (firstEmp) return firstEmp.id;
    return '00000000-0000-0000-0000-000000000000';
  }

  // ============ FAMILY ============

  @Get('family')
  @ApiOperation({ summary: 'List family details' })
  async listFamily(@Req() req: Request, @Query('tenantId') queryTenantId?: string, @Query('employeeId') employeeId?: string) {
    const tenantId = this.getTenantId(req, queryTenantId);
    const where: any = { tenantId };
    if (employeeId) where.employeeId = employeeId;
    const data = await this.prisma.employeeFamily.findMany({ where, orderBy: { createdAt: 'desc' } });
    return { success: true, data };
  }

  @Post('family')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create family member' })
  async createFamily(@Req() req: Request, @Body() dto: any) {
    const tenantId = this.getTenantId(req, dto.tenantId, dto.tenantId);
    const employeeId = await this.resolveEmployeeId(tenantId, req, dto.employeeId);
    const item = await this.prisma.employeeFamily.create({
      data: {
        tenantId,
        employeeId,
        name: dto.name || '',
        relation: dto.relation || dto.relationship || 'Dependent',
        dob: dto.dob ? new Date(dto.dob) : null,
        occupation: dto.occupation || null,
        isDependent: dto.isDependent !== undefined ? Boolean(dto.isDependent) : false,
      },
    });
    return { success: true, data: item };
  }

  @Patch('family/:id')
  @ApiOperation({ summary: 'Update family member' })
  async updateFamily(@Req() req: Request, @Param('id') id: string, @Body() dto: any) {
    const tenantId = this.getTenantId(req, dto.tenantId, dto.tenantId);
    const item = await this.prisma.employeeFamily.update({
      where: { id },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.relation && { relation: dto.relation }),
        ...(dto.relationship && { relation: dto.relationship }),
        ...(dto.dob !== undefined && { dob: dto.dob ? new Date(dto.dob) : null }),
        ...(dto.occupation !== undefined && { occupation: dto.occupation }),
        ...(dto.isDependent !== undefined && { isDependent: Boolean(dto.isDependent) }),
      },
    });
    return { success: true, data: item };
  }

  @Delete('family/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete family member' })
  async deleteFamily(@Req() req: Request, @Param('id') id: string) {
    await this.prisma.employeeFamily.delete({ where: { id } });
    return { success: true, message: 'Deleted successfully' };
  }

  // ============ EDUCATION ============

  @Get('education')
  @ApiOperation({ summary: 'List education records' })
  async listEducation(@Req() req: Request, @Query('tenantId') queryTenantId?: string, @Query('employeeId') employeeId?: string) {
    const tenantId = this.getTenantId(req, queryTenantId);
    const where: any = { tenantId };
    if (employeeId) where.employeeId = employeeId;
    const data = await this.prisma.employeeEducation.findMany({ where, orderBy: { createdAt: 'desc' } });
    return { success: true, data };
  }

  @Post('education')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create education record' })
  async createEducation(@Req() req: Request, @Body() dto: any) {
    const tenantId = this.getTenantId(req, dto.tenantId, dto.tenantId);
    const employeeId = await this.resolveEmployeeId(tenantId, req, dto.employeeId);
    const item = await this.prisma.employeeEducation.create({
      data: {
        tenantId,
        employeeId,
        degree: dto.degree || '',
        institution: dto.institution || '',
        fieldOfStudy: dto.fieldOfStudy || null,
        startYear: dto.startYear ? Number(dto.startYear) : null,
        endYear: dto.endYear ? Number(dto.endYear) : null,
        grade: dto.grade || null,
      },
    });
    return { success: true, data: item };
  }

  @Patch('education/:id')
  @ApiOperation({ summary: 'Update education record' })
  async updateEducation(@Req() req: Request, @Param('id') id: string, @Body() dto: any) {
    const item = await this.prisma.employeeEducation.update({
      where: { id },
      data: {
        ...(dto.degree && { degree: dto.degree }),
        ...(dto.institution && { institution: dto.institution }),
        ...(dto.fieldOfStudy !== undefined && { fieldOfStudy: dto.fieldOfStudy }),
        ...(dto.startYear !== undefined && { startYear: dto.startYear ? Number(dto.startYear) : null }),
        ...(dto.endYear !== undefined && { endYear: dto.endYear ? Number(dto.endYear) : null }),
        ...(dto.grade !== undefined && { grade: dto.grade }),
      },
    });
    return { success: true, data: item };
  }

  @Delete('education/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete education record' })
  async deleteEducation(@Req() req: Request, @Param('id') id: string) {
    await this.prisma.employeeEducation.delete({ where: { id } });
    return { success: true, message: 'Deleted successfully' };
  }

  // ============ EXPERIENCE ============

  @Get('experience')
  @ApiOperation({ summary: 'List work experience records' })
  async listExperience(@Req() req: Request, @Query('tenantId') queryTenantId?: string, @Query('employeeId') employeeId?: string) {
    const tenantId = this.getTenantId(req, queryTenantId);
    const where: any = { tenantId };
    if (employeeId) where.employeeId = employeeId;
    const data = await this.prisma.employeeExperience.findMany({ where, orderBy: { createdAt: 'desc' } });
    return { success: true, data };
  }

  @Post('experience')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create work experience record' })
  async createExperience(@Req() req: Request, @Body() dto: any) {
    const tenantId = this.getTenantId(req, dto.tenantId, dto.tenantId);
    const employeeId = await this.resolveEmployeeId(tenantId, req, dto.employeeId);
    const item = await this.prisma.employeeExperience.create({
      data: {
        tenantId,
        employeeId,
        companyName: dto.companyName || '',
        designation: dto.designation || '',
        startDate: dto.startDate ? new Date(dto.startDate) : new Date(),
        endDate: dto.endDate ? new Date(dto.endDate) : null,
        isCurrent: dto.isCurrent !== undefined ? Boolean(dto.isCurrent) : false,
      },
    });
    return { success: true, data: item };
  }

  @Patch('experience/:id')
  @ApiOperation({ summary: 'Update work experience record' })
  async updateExperience(@Req() req: Request, @Param('id') id: string, @Body() dto: any) {
    const item = await this.prisma.employeeExperience.update({
      where: { id },
      data: {
        ...(dto.companyName && { companyName: dto.companyName }),
        ...(dto.designation && { designation: dto.designation }),
        ...(dto.startDate && { startDate: new Date(dto.startDate) }),
        ...(dto.endDate !== undefined && { endDate: dto.endDate ? new Date(dto.endDate) : null }),
        ...(dto.isCurrent !== undefined && { isCurrent: Boolean(dto.isCurrent) }),
      },
    });
    return { success: true, data: item };
  }

  @Delete('experience/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete work experience record' })
  async deleteExperience(@Req() req: Request, @Param('id') id: string) {
    await this.prisma.employeeExperience.delete({ where: { id } });
    return { success: true, message: 'Deleted successfully' };
  }
}

