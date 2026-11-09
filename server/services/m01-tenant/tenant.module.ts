import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { PlatformTenantController } from './platform-tenant.controller';
import { TenantService } from './tenant.service';
import { SubscriptionService } from './subscription.service';
import { SetupWizardService } from './setup-wizard.service';
import { DefaultSeedingService } from './default-seeding.service';
import { TenantSettingsService } from './tenant-settings.service';

@Module({
  controllers: [TenantController, PlatformTenantController],
  providers: [TenantService, SubscriptionService, SetupWizardService, DefaultSeedingService, TenantSettingsService],
  exports: [TenantService, SubscriptionService, DefaultSeedingService, TenantSettingsService],
})
export class TenantModule {}
