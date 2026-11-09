import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { ApiKeyService } from './api-key.service';
import { CalendarService } from './calendar.service';
import { JobBoardService } from './job-board.service';
import { AccountingService } from './accounting.service';
import { BiometricService } from './biometric.service';


@Module({
  providers: [WebhookService, ApiKeyService, CalendarService, JobBoardService, AccountingService, BiometricService],
  exports: [WebhookService, ApiKeyService, CalendarService, JobBoardService, AccountingService, BiometricService],
})
export class IntegrationsModule {}
