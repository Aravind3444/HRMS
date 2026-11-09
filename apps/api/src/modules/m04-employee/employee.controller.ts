import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  HttpCode,
  HttpStatus,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCookieAuth, ApiBearerAuth } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { EmployeeDocumentService } from './employee-document.service';
import { EmployeeEmergencyContactService } from './employee-emergency-contact.service';
import { EmployeeBankDetailService } from './employee-bank-detail.service';
import { EmployeeTaxInfoService } from './employee-tax-info.service';
import { Request } from 'express';

@ApiTags('employee')
@ApiCookieAuth()
@ApiBearerAuth()
@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly employeeDocumentService: EmployeeDocumentService,
    private readonly employeeEmergencyContactService: EmployeeEmergencyContactService,
    private readonly employeeBankDetailService: EmployeeBankDetailService,
    private readonly employeeTaxInfoService: EmployeeTaxInfoService,
  ) {}

  private getActorUserId(req: Request): string {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new ForbiddenException('Authentication required');
    return userId;
  }

  private getTenantId(req: Request): string {
    const tenantId = (req as any).tenantId;
    if (!tenantId) throw new ForbiddenException('Tenant context required');
    return tenantId;
  }

  // ============ EMPLOYEE CRUD ============

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create an employee record' })
  async createEmployee(@Req() req: Request, @Body() dto: any) {
    const tenantId = dto.tenantId || this.getTenantId(req);
    return this.employeeService.create(tenantId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all employees' })
  async listEmployees(@Req() req: Request) {
    const tenantId = (req.query.tenantId as string) || this.getTenantId(req);
    const dto: any = {};
    if (req.query.departmentId) dto.departmentId = req.query.departmentId;
    if (req.query.designationId) dto.designationId = req.query.designationId;
    if (req.query.gradeId) dto.gradeId = req.query.gradeId;
    if (req.query.employmentTypeId) dto.employmentTypeId = req.query.employmentTypeId;
    if (req.query.isActive !== undefined) dto.isActive = req.query.isActive === 'true';
    if (req.query.search) dto.search = req.query.search;
    return this.employeeService.list(tenantId, dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee by ID' })
  async getEmployee(@Req() req: Request, @Param('id') id: string) {
    const tenantId = (req.query.tenantId as string) || this.getTenantId(req);
    return this.employeeService.getById(tenantId, id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update employee' })
  async updateEmployee(@Req() req: Request, @Param('id') id: string, @Body() dto: any) {
    const tenantId = dto.tenantId || (req.query.tenantId as string) || this.getTenantId(req);
    return this.employeeService.update(tenantId, id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete employee' })
  async deleteEmployee(@Req() req: Request, @Param('id') id: string) {
    const tenantId = (req.query.tenantId as string) || this.getTenantId(req);
    return this.employeeService.delete(tenantId, id);
  }

  // ============ EMPLOYEE DOCUMENTS ============

  @Post(':id/documents')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create employee document' })
  async createDocument(@Req() req: Request, @Param('id') employeeId: string, @Body() dto: any) {
    const tenantId = this.getTenantId(req);
    return this.employeeDocumentService.create(tenantId, { ...dto, employeeId });
  }

  @Get(':id/documents')
  @ApiOperation({ summary: 'List employee documents' })
  async listDocuments(@Req() req: Request, @Param('id') employeeId: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeDocumentService.list(tenantId, employeeId);
  }

  @Get('documents/:id')
  @ApiOperation({ summary: 'Get document by ID' })
  async getDocument(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeDocumentService.getById(tenantId, id);
  }

  @Delete('documents/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete document' })
  async deleteDocument(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeDocumentService.delete(tenantId, id);
  }

  // ============ EMERGENCY CONTACTS ============

  @Post(':id/emergency-contacts')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create emergency contact' })
  async createEmergencyContact(@Req() req: Request, @Param('id') employeeId: string, @Body() dto: any) {
    const tenantId = this.getTenantId(req);
    return this.employeeEmergencyContactService.create(tenantId, { ...dto, employeeId });
  }

  @Get(':id/emergency-contacts')
  @ApiOperation({ summary: 'List emergency contacts' })
  async listEmergencyContacts(@Req() req: Request, @Param('id') employeeId: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeEmergencyContactService.list(tenantId, employeeId);
  }

  @Get('emergency-contacts/:id')
  @ApiOperation({ summary: 'Get emergency contact by ID' })
  async getEmergencyContact(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeEmergencyContactService.getById(tenantId, id);
  }

  @Patch('emergency-contacts/:id')
  @ApiOperation({ summary: 'Update emergency contact' })
  async updateEmergencyContact(@Req() req: Request, @Param('id') id: string, @Body() dto: any) {
    const tenantId = this.getTenantId(req);
    return this.employeeEmergencyContactService.update(tenantId, id, dto);
  }

  @Delete('emergency-contacts/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete emergency contact' })
  async deleteEmergencyContact(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeEmergencyContactService.delete(tenantId, id);
  }

  // ============ BANK DETAILS ============

  @Post(':id/bank-details')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create bank detail' })
  async createBankDetail(@Req() req: Request, @Param('id') employeeId: string, @Body() dto: any) {
    const tenantId = this.getTenantId(req);
    return this.employeeBankDetailService.create(tenantId, { ...dto, employeeId });
  }

  @Get(':id/bank-details')
  @ApiOperation({ summary: 'List bank details' })
  async listBankDetails(@Req() req: Request, @Param('id') employeeId: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeBankDetailService.list(tenantId, employeeId);
  }

  @Get('bank-details/:id')
  @ApiOperation({ summary: 'Get bank detail by ID' })
  async getBankDetail(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeBankDetailService.getById(tenantId, id);
  }

  @Patch('bank-details/:id')
  @ApiOperation({ summary: 'Update bank detail' })
  async updateBankDetail(@Req() req: Request, @Param('id') id: string, @Body() dto: any) {
    const tenantId = this.getTenantId(req);
    return this.employeeBankDetailService.update(tenantId, id, dto);
  }

  @Delete('bank-details/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete bank detail' })
  async deleteBankDetail(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeBankDetailService.delete(tenantId, id);
  }

  // ============ TAX INFO ============

  @Post(':id/tax-info')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create tax info' })
  async createTaxInfo(@Req() req: Request, @Param('id') employeeId: string, @Body() dto: any) {
    const tenantId = this.getTenantId(req);
    return this.employeeTaxInfoService.create(tenantId, { ...dto, employeeId });
  }

  @Get(':id/tax-info')
  @ApiOperation({ summary: 'List tax info' })
  async listTaxInfo(@Req() req: Request, @Param('id') employeeId: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeTaxInfoService.list(tenantId, employeeId);
  }

  @Get('tax-info/:id')
  @ApiOperation({ summary: 'Get tax info by ID' })
  async getTaxInfo(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeTaxInfoService.getById(tenantId, id);
  }

  @Patch('tax-info/:id')
  @ApiOperation({ summary: 'Update tax info' })
  async updateTaxInfo(@Req() req: Request, @Param('id') id: string, @Body() dto: any) {
    const tenantId = this.getTenantId(req);
    return this.employeeTaxInfoService.update(tenantId, id, dto);
  }

  @Delete('tax-info/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete tax info' })
  async deleteTaxInfo(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employeeTaxInfoService.delete(tenantId, id);
  }
}
