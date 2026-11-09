import { Module, Global } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { HealthController } from './health/health.controller';
import { AuthGuard } from './guards/auth.guard';
import { TenantGuard } from './guards/tenant.guard';
import { EntitlementGuard } from './guards/entitlement.guard';
import { FeatureFlagGuard } from './guards/feature-flag.guard';

@Global()
@Module({
  controllers: [HealthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: TenantGuard,
    },
    {
      provide: APP_GUARD,
      useClass: EntitlementGuard,
    },
    {
      provide: APP_GUARD,
      useClass: FeatureFlagGuard,
    },
  ],
  exports: [],
})
export class CommonModule {}
