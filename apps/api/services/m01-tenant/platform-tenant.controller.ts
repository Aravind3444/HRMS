import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  Query,
  Req,
  UnauthorizedException,
  ForbiddenException,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCookieAuth, ApiQuery } from '@nestjs/swagger';
import { TenantService } from './tenant.service';
import { UpdateTenantStatusDto } from './dto/update-tenant-status.dto';
import { PrismaService } from '../../database/prisma.service';
import { Request } from 'express';
import { Entitlement } from '../../common/decorators/entitlement.decorator';

@ApiTags('platform/tenants')
@ApiCookieAuth()
@Entitlement('M01')
@Controller('platform/tenants')
export class PlatformTenantController {
  constructor(
    private readonly tenantService: TenantService,
    private readonly prisma: PrismaService,
  ) {}

  private async assertPlatformAdmin(req: Request): Promise<string> {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new UnauthorizedException('Authentication required');

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { isPlatformAdmin: true },
    });
    if (!user || !user.isPlatformAdmin) {
      throw new ForbiddenException('Super Admin privilege required');
    }
    return userId;
  }

  @Get('plans')
  @ApiOperation({ summary: 'Super Admin: List all subscription plans and pricing versions' })
  async listPlans(@Req() req: Request) {
    await this.assertPlatformAdmin(req);
    const plans = await this.prisma.plan.findMany({
      include: {
        versions: {
          orderBy: { version: 'desc' },
        },
      },
      orderBy: { code: 'asc' },
    });
    return { success: true, data: plans };
  }

  @Get()
  @ApiOperation({ summary: 'Super Admin: List all tenants with status filter' })
  @ApiQuery({ name: 'status', required: false, description: 'Filter by status: pending_review, active, suspended, cancelled, archived' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async listTenants(
    @Query('status') status?: string,
    @Query('limit') limit?: string,
    @Req() req?: Request,
  ) {
    await this.assertPlatformAdmin(req!);
    return this.tenantService.listTenantsForPlatform(status, limit ? parseInt(limit, 10) : 50);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Super Admin: Transition tenant lifecycle (approve, suspend, reactivate, cancel, archive)' })
  async updateStatus(
    @Param('id') tenantId: string,
    @Body() dto: UpdateTenantStatusDto,
    @Req() req: Request,
  ) {
    const actorUserId = await this.assertPlatformAdmin(req);
    return this.tenantService.updateLifecycleStatus(tenantId, dto.action, dto.reason, actorUserId);
  }
}

