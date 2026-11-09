import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { OutboxService } from '../../modules/m24-notifications/outbox.service';
import { EmailService } from '../../modules/m24-notifications/email.service';
import { InappService } from '../../modules/m24-notifications/inapp.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class NotificationWorker implements OnModuleInit {
  private readonly logger = new Logger(NotificationWorker.name);
  private isProcessing = false;
  private readonly POLL_INTERVAL = 5000; // 5 seconds
  private readonly BATCH_SIZE = 50;

  constructor(
    private readonly prisma: PrismaService,
    private readonly outboxService: OutboxService,
    private readonly emailService: EmailService,
    private readonly inappService: InappService,
  ) {}

  async onModuleInit() {
    // Start the polling loop
    this.startPolling();
  }

  private startPolling() {
    setInterval(() => this.processPendingEvents(), this.POLL_INTERVAL);
    this.logger.log('Notification worker started');
  }

  private async processPendingEvents() {
    if (this.isProcessing) return;
    this.isProcessing = true;

    try {
      const events = await this.outboxService.getPendingEvents(this.BATCH_SIZE);
      
      for (const event of events) {
        await this.processEvent(event);
      }
    } catch (error) {
      this.logger.error(`Error processing outbox events: ${error.message}`);
    } finally {
      this.isProcessing = false;
    }
  }

  private async processEvent(event: Prisma.OutboxEventGetPayload<{}>): Promise<void> {
    const eventId = event.id;
    
    try {
      await this.outboxService.markProcessing(eventId);

      // Determine recipients based on event type
      const recipients = await this.getRecipients(event);
      
      for (const recipient of recipients) {
        await this.deliverToRecipient(event, recipient);
      }

      await this.outboxService.markCompleted(eventId);
      this.logger.debug(`Processed outbox event ${eventId} (${event.eventType}) for ${recipients.length} recipients`);
    } catch (error) {
      this.logger.error(`Failed to process outbox event ${eventId}: ${error.message}`);
      await this.outboxService.markFailed(eventId, error.message);
    }
  }

  private async getRecipients(event: Prisma.OutboxEventGetPayload<{}>): Promise<Array<{ userId: string; email?: string }>> {
    const payload = event.payloadJson as Record<string, unknown>;
    const tenantId = event.tenantId;
    const recipients: Array<{ userId: string; email?: string }> = [];

    switch (event.eventType) {
      case 'TENANT_SIGNUP':
      case 'TENANT_APPROVED':
      case 'TENANT_REJECTED':
      case 'TENANT_SUSPENDED':
      case 'TENANT_REACTIVATED':
      case 'TENANT_CANCELLED':
        // Send to tenant owner/admin
        if (payload.adminEmail) {
          recipients.push({ userId: payload.adminUserId as string, email: payload.adminEmail as string });
        }
        break;

      case 'USER_INVITED':
        if (payload.email) {
          recipients.push({ userId: payload.userId as string, email: payload.email as string });
        }
        break;

      case 'EMAIL_VERIFICATION':
        if (payload.userId) {
          const user = await this.prisma.user.findUnique({
            where: { id: payload.userId as string },
            select: { email: true },
          });
          if (user?.email) {
            recipients.push({ userId: payload.userId as string, email: user.email });
          }
        }
        break;

      case 'PASSWORD_RESET':
        if (payload.userId) {
          const user = await this.prisma.user.findUnique({
            where: { id: payload.userId as string },
            select: { email: true },
          });
          if (user?.email) {
            recipients.push({ userId: payload.userId as string, email: user.email });
          }
        }
        break;

      default:
        // For tenant-scoped events, get all active members with relevant permissions
        if (tenantId) {
          const memberships = await this.prisma.membership.findMany({
            where: { tenantId, status: 'active' },
            include: { user: { select: { id: true, email: true } } },
          });
          recipients.push(...memberships.map(m => ({ userId: m.userId, email: m.user.email })));
        }
        break;
    }

    return recipients;
  }

  private async deliverToRecipient(event: Prisma.OutboxEventGetPayload<{}>, recipient: { userId?: string; email?: string }): Promise<void> {
    const payload = event.payloadJson as Record<string, unknown>;
    const tenantId = event.tenantId;

    // Use a fallback userId if not provided (must be valid UUID)
    const recipientUserId = recipient.userId || payload.userId as string || payload.adminUserId as string || payload.actorUserId as string || '00000000-0000-0000-0000-000000000000';

    // Use null for system-level templates (no tenant context)
    const delivery = await this.prisma.notificationDelivery.upsert({
      where: {
        outboxEventId_recipientUserId_channel: {
          outboxEventId: event.id,
          recipientUserId,
          channel: 'EMAIL',
        },
      },
      update: {
        status: 'PROCESSING',
        errorMessage: null,
      },
      create: {
        tenantId: tenantId || null,
        outboxEventId: event.id,
        recipientUserId,
        channel: 'EMAIL',
        templateCode: this.getTemplateCodeForEvent(event.eventType),
        status: 'PROCESSING',
      },
    });

    try {
      // Send email
      if (recipient.email) {
        await this.emailService.sendTemplateEmail(
          recipient.email,
          this.getTemplateCodeForEvent(event.eventType),
          payload,
          tenantId || undefined,
        );
      }

      // Create in-app notification
      await this.inappService.createNotification({
        tenantId: tenantId || null,
        userId: recipient.userId,
        eventType: event.eventType,
        payload,
      });

      // Update delivery status
      await this.prisma.notificationDelivery.update({
        where: { id: delivery.id },
        data: { status: 'PROCESSED', sentAt: new Date() },
      });
    } catch (error) {
      await this.prisma.notificationDelivery.update({
        where: { id: delivery.id },
        data: { status: 'FAILED', errorMessage: error.message },
      });
      throw error;
    }
  }

  private getTemplateCodeForEvent(eventType: string): string {
    const templateMap: Record<string, string> = {
      'TENANT_SIGNUP': 'EMAIL_VERIFICATION',
      'TENANT_APPROVED': 'TENANT_APPROVED',
      'TENANT_REJECTED': 'TENANT_REJECTED',
      'TENANT_SUSPENDED': 'TENANT_SUSPENDED',
      'TENANT_REACTIVATED': 'TENANT_APPROVED',
      'TENANT_CANCELLED': 'TENANT_REJECTED',
      'USER_INVITED': 'USER_INVITATION',
      'EMAIL_VERIFICATION': 'EMAIL_VERIFICATION',
      'PASSWORD_RESET': 'PASSWORD_RESET',
      'MFA_ENROLLMENT_REQUIRED': 'MFA_ENROLLMENT',
    };
    return templateMap[eventType] || 'EMAIL_VERIFICATION';
  }
}