import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  Res,
  Req,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCookieAuth } from '@nestjs/swagger';
import { TenantService } from './tenant.service';
import { SetupWizardService } from './setup-wizard.service';
import { TenantSettingsService } from './tenant-settings.service';
import { SignupDto } from './dto/signup.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { SetupWizardStepDto } from './dto/setup-wizard.dto';
import { UpdateTenantSettingsDto } from './dto/tenant-settings.dto';
import { Public } from '../../common/decorators/public.decorator';
import { Entitlement } from '../../common/decorators/entitlement.decorator';
import { Response, Request } from 'express';

@ApiTags('tenant')
@Entitlement('M01')
@Controller('tenant')
export class TenantController {
  constructor(
    private readonly tenantService: TenantService,
    private readonly setupWizardService: SetupWizardService,
    private readonly tenantSettingsService: TenantSettingsService,
  ) {}

  @Public()
  @Get('plans')
  @ApiOperation({ summary: 'Public: List available subscription plans for registration' })
  async getPublicPlans() {
    return this.tenantService.getPublicPlans();
  }

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Onboard a new tenant (creates tenant + admin user in one transaction)' })
  async signup(
    @Body() dto: SignupDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.tenantService.signup(dto, res);
  }

  @Get(':id')
  @ApiCookieAuth()
  @ApiOperation({ summary: 'Get tenant by ID' })
  async findOne(@Param('id') id: string, @Req() req: Request) {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new UnauthorizedException();
    return this.tenantService.findById(id, userId);
  }

  @Patch(':id')
  @ApiCookieAuth()
  @ApiOperation({ summary: 'Update tenant details' })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTenantDto,
    @Req() req: Request,
  ) {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new UnauthorizedException();
    return this.tenantService.update(id, dto, userId);
  }

  @Get(':id/settings')
  @ApiCookieAuth()
  @ApiOperation({ summary: 'Get tenant settings' })
  async getSettings(@Param('id') id: string, @Req() req: Request) {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new UnauthorizedException();
    return this.tenantSettingsService.getSettings(id, userId);
  }

  @Patch(':id/settings')
  @ApiCookieAuth()
  @ApiOperation({ summary: 'Update tenant settings' })
  async updateSettings(
    @Param('id') id: string,
    @Body() dto: UpdateTenantSettingsDto,
    @Req() req: Request,
  ) {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new UnauthorizedException();
    return this.tenantSettingsService.updateSettings(id, dto, userId);
  }

  @Post(':id/setup-wizard')
  @ApiCookieAuth()
  @ApiOperation({ summary: 'Submit a setup wizard step' })
  async setupWizard(
    @Param('id') tenantId: string,
    @Body() dto: SetupWizardStepDto,
    @Req() req: Request,
  ) {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new UnauthorizedException();
    return this.setupWizardService.submitStep(tenantId, dto, userId);
  }

  @Post(':id/setup-wizard/complete')
  @ApiCookieAuth()
  @ApiOperation({ summary: 'Complete the setup wizard' })
  async completeSetupWizard(@Param('id') tenantId: string, @Req() req: Request) {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new UnauthorizedException();
    return this.tenantSettingsService.markSetupCompleted(tenantId, userId);
  }
}
