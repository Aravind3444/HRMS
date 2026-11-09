import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { RateLimiterService } from './rate-limiter.service';
import { CrossTenantGuardService } from './cross-tenant-guard.service';
import { SecretsService } from './secrets.service';


@Module({
  providers: [EncryptionService, RateLimiterService, CrossTenantGuardService, SecretsService],
  exports: [EncryptionService, RateLimiterService, CrossTenantGuardService, SecretsService],
})
export class SecurityModule {}
