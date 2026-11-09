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
import { Request } from 'express';
import { LegalEntityService } from './legal-entity.service';
import { LocationService } from './location.service';
import { DepartmentService } from './department.service';
import { DesignationService } from './designation.service';
import { GradeService } from './grade.service';
import { CostCenterService } from './cost-center.service';
import { EmploymentTypeService } from './employment-type.service';
import {
  CreateLegalEntityDto, UpdateLegalEntityDto,
  CreateLocationDto, UpdateLocationDto,
  CreateDepartmentDto, UpdateDepartmentDto,
  CreateDesignationDto, UpdateDesignationDto,
  CreateGradeDto, UpdateGradeDto,
  CreateCostCenterDto, UpdateCostCenterDto,
  CreateEmploymentTypeDto, UpdateEmploymentTypeDto,
} from './dto';

@ApiTags('org')
@ApiCookieAuth()
@ApiBearerAuth()
@Controller('org')
export class OrgController {
  constructor(
    private readonly legalEntityService: LegalEntityService,
    private readonly locationService: LocationService,
    private readonly departmentService: DepartmentService,
    private readonly designationService: DesignationService,
    private readonly gradeService: GradeService,
    private readonly costCenterService: CostCenterService,
    private readonly employmentTypeService: EmploymentTypeService,
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

  // ============ LEGAL ENTITIES ============

  @Post('legal-entities')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a legal entity' })
  async createLegalEntity(@Req() req: Request, @Body() dto: CreateLegalEntityDto) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.legalEntityService.create(tenantId, { ...dto, actorUserId });
  }

  @Get('legal-entities')
  @ApiOperation({ summary: 'List all legal entities' })
  async listLegalEntities(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.legalEntityService.list(tenantId);
  }

  @Get('legal-entities/:id')
  @ApiOperation({ summary: 'Get legal entity by ID' })
  async getLegalEntity(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.legalEntityService.getById(tenantId, id);
  }

  @Patch('legal-entities/:id')
  @ApiOperation({ summary: 'Update legal entity' })
  async updateLegalEntity(@Req() req: Request, @Param('id') id: string, @Body() dto: UpdateLegalEntityDto) {
    const tenantId = this.getTenantId(req);
    return this.legalEntityService.update(tenantId, id, dto);
  }

  @Delete('legal-entities/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete legal entity' })
  async deleteLegalEntity(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.legalEntityService.delete(tenantId, id);
  }

  // ============ LOCATIONS ============

  @Post('locations')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a location' })
  async createLocation(@Req() req: Request, @Body() dto: CreateLocationDto) {
    const tenantId = this.getTenantId(req);
    return this.locationService.create(tenantId, dto);
  }

  @Get('locations')
  @ApiOperation({ summary: 'List all locations' })
  async listLocations(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.locationService.list(tenantId);
  }

  @Get('locations/:id')
  @ApiOperation({ summary: 'Get location by ID' })
  async getLocation(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.locationService.getById(tenantId, id);
  }

  @Patch('locations/:id')
  @ApiOperation({ summary: 'Update location' })
  async updateLocation(@Req() req: Request, @Param('id') id: string, @Body() dto: UpdateLocationDto) {
    const tenantId = this.getTenantId(req);
    return this.locationService.update(tenantId, id, dto);
  }

  @Delete('locations/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete location' })
  async deleteLocation(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.locationService.delete(tenantId, id);
  }

  // ============ DEPARTMENTS ============

  @Post('departments')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a department' })
  async createDepartment(@Req() req: Request, @Body() dto: CreateDepartmentDto) {
    const tenantId = this.getTenantId(req);
    return this.departmentService.create(tenantId, dto);
  }

  @Get('departments')
  @ApiOperation({ summary: 'List all departments' })
  async listDepartments(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.departmentService.list(tenantId);
  }

  @Get('departments/tree')
  @ApiOperation({ summary: 'Get department hierarchy tree' })
  async getDepartmentTree(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.departmentService.getTree(tenantId);
  }

  @Get('departments/:id')
  @ApiOperation({ summary: 'Get department by ID' })
  async getDepartment(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.departmentService.getById(tenantId, id);
  }

  @Patch('departments/:id')
  @ApiOperation({ summary: 'Update department' })
  async updateDepartment(@Req() req: Request, @Param('id') id: string, @Body() dto: UpdateDepartmentDto) {
    const tenantId = this.getTenantId(req);
    return this.departmentService.update(tenantId, id, dto);
  }

  @Delete('departments/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete department' })
  async deleteDepartment(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.departmentService.delete(tenantId, id);
  }

  // ============ DESIGNATIONS ============

  @Post('designations')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a designation' })
  async createDesignation(@Req() req: Request, @Body() dto: CreateDesignationDto) {
    const tenantId = this.getTenantId(req);
    return this.designationService.create(tenantId, dto);
  }

  @Get('designations')
  @ApiOperation({ summary: 'List all designations' })
  async listDesignations(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.designationService.list(tenantId);
  }

  @Get('designations/:id')
  @ApiOperation({ summary: 'Get designation by ID' })
  async getDesignation(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.designationService.getById(tenantId, id);
  }

  @Patch('designations/:id')
  @ApiOperation({ summary: 'Update designation' })
  async updateDesignation(@Req() req: Request, @Param('id') id: string, @Body() dto: UpdateDesignationDto) {
    const tenantId = this.getTenantId(req);
    return this.designationService.update(tenantId, id, dto);
  }

  @Delete('designations/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete designation' })
  async deleteDesignation(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.designationService.delete(tenantId, id);
  }

  // ============ GRADES ============

  @Post('grades')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a grade' })
  async createGrade(@Req() req: Request, @Body() dto: CreateGradeDto) {
    const tenantId = this.getTenantId(req);
    return this.gradeService.create(tenantId, dto);
  }

  @Get('grades')
  @ApiOperation({ summary: 'List all grades' })
  async listGrades(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.gradeService.list(tenantId);
  }

  @Get('grades/:id')
  @ApiOperation({ summary: 'Get grade by ID' })
  async getGrade(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.gradeService.getById(tenantId, id);
  }

  @Patch('grades/:id')
  @ApiOperation({ summary: 'Update grade' })
  async updateGrade(@Req() req: Request, @Param('id') id: string, @Body() dto: UpdateGradeDto) {
    const tenantId = this.getTenantId(req);
    return this.gradeService.update(tenantId, id, dto);
  }

  @Delete('grades/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete grade' })
  async deleteGrade(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.gradeService.delete(tenantId, id);
  }

  // ============ COST CENTERS ============

  @Post('cost-centers')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a cost center' })
  async createCostCenter(@Req() req: Request, @Body() dto: CreateCostCenterDto) {
    const tenantId = this.getTenantId(req);
    return this.costCenterService.create(tenantId, dto);
  }

  @Get('cost-centers')
  @ApiOperation({ summary: 'List all cost centers' })
  async listCostCenters(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.costCenterService.list(tenantId);
  }

  @Get('cost-centers/:id')
  @ApiOperation({ summary: 'Get cost center by ID' })
  async getCostCenter(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.costCenterService.getById(tenantId, id);
  }

  @Patch('cost-centers/:id')
  @ApiOperation({ summary: 'Update cost center' })
  async updateCostCenter(@Req() req: Request, @Param('id') id: string, @Body() dto: UpdateCostCenterDto) {
    const tenantId = this.getTenantId(req);
    return this.costCenterService.update(tenantId, id, dto);
  }

  @Delete('cost-centers/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete cost center' })
  async deleteCostCenter(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.costCenterService.delete(tenantId, id);
  }

  // ============ EMPLOYMENT TYPES ============

  @Post('employment-types')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create an employment type' })
  async createEmploymentType(@Req() req: Request, @Body() dto: CreateEmploymentTypeDto) {
    const tenantId = this.getTenantId(req);
    return this.employmentTypeService.create(tenantId, dto);
  }

  @Get('employment-types')
  @ApiOperation({ summary: 'List all employment types' })
  async listEmploymentTypes(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.employmentTypeService.list(tenantId);
  }

  @Get('employment-types/:id')
  @ApiOperation({ summary: 'Get employment type by ID' })
  async getEmploymentType(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employmentTypeService.getById(tenantId, id);
  }

  @Patch('employment-types/:id')
  @ApiOperation({ summary: 'Update employment type' })
  async updateEmploymentType(@Req() req: Request, @Param('id') id: string, @Body() dto: UpdateEmploymentTypeDto) {
    const tenantId = this.getTenantId(req);
    return this.employmentTypeService.update(tenantId, id, dto);
  }

  @Delete('employment-types/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete employment type' })
  async deleteEmploymentType(@Req() req: Request, @Param('id') id: string) {
    const tenantId = this.getTenantId(req);
    return this.employmentTypeService.delete(tenantId, id);
  }

  // ============ ORG CHART ============

  @Get('org-chart')
  @ApiOperation({ summary: 'Get organization chart' })
  async getOrgChart(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return { success: true, data: { departments: [] } };
  }
}
