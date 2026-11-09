import { Controller, Get, Post, Patch, Delete, Param, Body, Req, HttpCode, HttpStatus, ForbiddenException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCookieAuth, ApiBearerAuth } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { CreateRoleDto, UpdateRoleDto, GrantRoleDto } from './dto/role.dto';
import { Request } from 'express';

@ApiTags('iam/roles')
@ApiCookieAuth()
@ApiBearerAuth()
@Controller('iam/roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

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

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a custom role' })
  async createRole(
    @Req() req: Request,
    @Body() dto: CreateRoleDto,
  ) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.roleService.createRole(actorUserId, tenantId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all roles (system + tenant custom)' })
  async listRoles(@Req() req: Request) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.roleService.getRoles(tenantId, actorUserId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get role by ID' })
  async getRole(
    @Param('id') roleId: string,
    @Req() req: Request,
  ) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.roleService.getRole(tenantId, roleId, actorUserId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a custom role' })
  async updateRole(
    @Param('id') roleId: string,
    @Body() dto: UpdateRoleDto,
    @Req() req: Request,
  ) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.roleService.updateRole(actorUserId, tenantId, roleId, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a custom role' })
  async deleteRole(
    @Param('id') roleId: string,
    @Req() req: Request,
  ) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.roleService.deleteRole(actorUserId, tenantId, roleId);
  }

  @Post('grants')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Grant a role to a user with scope' })
  async grantRole(
    @Req() req: Request,
    @Body() dto: GrantRoleDto,
  ) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.roleService.grantRole(actorUserId, tenantId, dto);
  }

  @Delete('grants/:grantId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Revoke a role grant' })
  async revokeRole(
    @Param('grantId') grantId: string,
    @Req() req: Request,
  ) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.roleService.revokeRole(actorUserId, tenantId, grantId);
  }

  @Get('users/:userId/grants')
  @ApiOperation({ summary: 'Get all role grants for a user' })
  async getUserGrants(
    @Param('userId') userId: string,
    @Req() req: Request,
  ) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.roleService.getUserGrants(actorUserId, tenantId, userId);
  }
}