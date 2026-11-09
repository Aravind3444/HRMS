import { Module } from '@nestjs/common';
import { AuditEventService } from './audit-event.service';
import { AuditSearchService } from './audit-search.service';
import { RetentionService } from './retention.service';
import { DpdpService } from './dpdp.service';


@Module({
  providers: [AuditEventService, AuditSearchService, RetentionService, DpdpService],
  exports: [AuditEventService, AuditSearchService, RetentionService, DpdpService],
})
export class AuditModule {}
