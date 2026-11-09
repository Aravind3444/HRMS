import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../database/prisma.service';
import { OutboxService } from '../../modules/m24-notifications/outbox.service';

@Injectable()
export class TrialReminderWorker {
  private readonly logger = new Logger(TrialReminderWorker.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly outboxService: OutboxService,
  ) {}

  /**
   * Run daily at 9:00 AM to check for trial endings
   * Sends reminders at 7, 3, and 1 days before trial ends
   */
  @Cron(CronExpression.EVERY_DAY_AT_9AM)
  async checkTrialEndings() {
    this.logger.log('Checking for trial endings...');

    const now = new Date();
    const reminderDays = [7, 3, 1];

    for (const days of reminderDays) {
      const targetDate = new Date(now);
      targetDate.setDate(targetDate.getDate() + days);
      targetDate.setHours(23, 59, 59, 999); // End of day

      const subscriptions = await this.prisma.subscription.findMany({
        where: {
          status: 'trial',
          trialEndsAt: {
            gte: new Date(targetDate.getTime() - 24 * 60 * 60 * 1000), // Start of target day
            lte: targetDate,
          },
        },
        include: {
          tenant: {
            include: {
              memberships: {
                where: { status: 'active' },
                include: { user: { select: { id: true, email: true, fullName: true } } },
              },
            },
          },
        },
      });

      for (const sub of subscriptions) {
        await this.sendTrialReminder(sub, days);
      }
    }
  }

  private async sendTrialReminder(subscription: any, daysRemaining: number) {
    const tenant = subscription.tenant;
    const tenantName = tenant.name;
    const trialEndsAt = subscription.trialEndsAt;

    // Get tenant admins (OA role)
    const adminMemberships = tenant.memberships.filter(m => 
      m.roleGrants?.some((g: any) => g.role.code === 'OA')
    );

    for (const membership of adminMemberships) {
      const user = membership.user;
      if (!user?.email) continue;

      // Emit outbox event for email
      await this.outboxService.emitStandalone('TRIAL_ENDING_REMINDER', {
        userId: user.id,
        email: user.email,
        fullName: user.fullName,
        tenantId: tenant.id,
        tenantName,
        trialEndsAt: trialEndsAt.toISOString(),
        daysRemaining,
        loginUrl: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/login`,
      }, tenant.id);

      this.logger.log(`Trial reminder (${daysRemaining} days) queued for ${user.email} (tenant: ${tenantName})`);
    }
  }

  /**
   * Handle trial expiry - transition to expired/past_due
   * Run daily at midnight
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleTrialExpiry() {
    this.logger.log('Checking for expired trials...');

    const expiredSubscriptions = await this.prisma.subscription.findMany({
      where: {
        status: 'trial',
        trialEndsAt: { lt: new Date() },
      },
      include: {
        tenant: {
          include: {
            memberships: {
              where: { status: 'active' },
              include: { user: { select: { id: true, email: true, fullName: true } } },
            },
          },
        },
      },
    });

    for (const sub of expiredSubscriptions) {
      await this.expireTrial(sub);
    }
  }

  private async expireTrial(subscription: any) {
    const tenant = subscription.tenant;
    const tenantId = tenant.id;

    await this.prisma.$transaction(async (tx) => {
      // Update subscription status
      await tx.subscription.update({
        where: { id: subscription.id },
        data: { status: 'expired' },
      });

      // Update tenant status to suspended (grace period before cancellation)
      await tx.tenant.update({
        where: { id: tenantId },
        data: { status: 'suspended' },
      });

      // Audit event
      await tx.auditEvent.create({
        data: {
          tenantId,
          action: 'TRIAL_EXPIRED',
          resourceType: 'Subscription',
          resourceId: subscription.id,
          correlationId: require('crypto').randomUUID(),
          diffJson: {
            before: { subscriptionStatus: 'trial', tenantStatus: tenant.status },
            after: { subscriptionStatus: 'expired', tenantStatus: 'suspended' },
          },
        },
      });

      // Outbox event for notification
      await tx.outboxEvent.create({
        data: {
          tenantId,
          eventType: 'TRIAL_EXPIRED',
          payloadJson: {
            tenantId,
            tenantName: tenant.name,
            subscriptionId: subscription.id,
            trialEndedAt: subscription.trialEndsAt.toISOString(),
          },
        },
      });
    });

    // Notify admins
    for (const membership of tenant.memberships) {
      const user = membership.user;
      if (user?.email) {
        await this.outboxService.emitStandalone('TRIAL_EXPIRED', {
          userId: user.id,
          email: user.email,
          fullName: user.fullName,
          tenantId,
          tenantName: tenant.name,
          loginUrl: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/login`,
        }, tenantId);
      }
    }

    this.logger.log(`Trial expired for tenant ${tenant.name} (${tenantId})`);
  }
}