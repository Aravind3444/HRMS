import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class SubscriptionService {
  private readonly logger = new Logger(SubscriptionService.name);
  constructor(private readonly prisma: PrismaService) {}

  async getSubscription(tenantId: string) {
    const subscription = await this.prisma.subscription.findUnique({
      where: { tenantId },
      include: {
        planVersion: {
          include: {
            plan: true,
          },
        },
      },
    });
    return subscription;
  }

  async isTrialExpired(tenantId: string): Promise<boolean> {
    const subscription = await this.prisma.subscription.findUnique({
      where: { tenantId },
      select: { trialEndsAt: true, status: true },
    });
    if (!subscription?.trialEndsAt) return false;
    return subscription.status === 'expired' || new Date() > subscription.trialEndsAt;
  }
}
