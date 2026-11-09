import { Module } from '@nestjs/common';
import { OutboxService } from './outbox.service';
import { TemplateService } from './template.service';
import { EmailService } from './email.service';
import { SmsService } from './sms.service';
import { PushService } from './push.service';
import { InappService } from './inapp.service';


@Module({
  providers: [OutboxService, TemplateService, EmailService, SmsService, PushService, InappService],
  exports: [OutboxService, TemplateService, EmailService, SmsService, PushService, InappService],
})
export class NotificationsModule {}
