import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { OutboxEvent, Prisma } from '@prisma/client';

@Injectable()
export class OutboxService {
  private readonly logger = new Logger(OutboxService.name);

  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'OutboxService', status: 'operational' };
  }

  /**
   * Emit an outbox event within a transaction (caller must pass tx)
   */
  async emit(
    tx: Prisma.TransactionClient,
    eventType: string,
    payload: Record<string, unknown>,
    tenantId?: string,
  ): Promise<OutboxEvent> {
    return tx.outboxEvent.create({
      data: {
        tenantId,
        eventType,
        payloadJson: payload as any,
        status: 'pending',
        availableAt: new Date(),
      },
    });
  }

  /**
   * Emit an outbox event outside a transaction (creates its own transaction)
   */
  async emitStandalone(
    eventType: string,
    payload: Record<string, unknown>,
    tenantId?: string,
  ): Promise<OutboxEvent> {
    return this.prisma.outboxEvent.create({
      data: {
        tenantId,
        eventType,
        payloadJson: payload as any,
        status: 'pending',
        availableAt: new Date(),
      },
    });
  }

  /**
   * Get pending events for processing (used by worker)
   */
  async getPendingEvents(limit = 100): Promise<OutboxEvent[]> {
    return this.prisma.outboxEvent.findMany({
      where: {
        status: 'pending',
        availableAt: { lte: new Date() },
      },
      orderBy: { availableAt: 'asc' },
      take: limit,
    });
  }

  /**
   * Mark event as processing
   */
  async markProcessing(id: string): Promise<void> {
    await this.prisma.outboxEvent.update({
      where: { id },
      data: { status: 'processing' },
    });
  }

  /**
   * Mark event as completed
   */
  async markCompleted(id: string): Promise<void> {
    await this.prisma.outboxEvent.update({
      where: { id },
      data: { status: 'completed', processedAt: new Date() },
    });
  }

  /**
   * Mark event as failed with retry logic
   */
  async markFailed(id: string, error: string): Promise<void> {
    const event = await this.prisma.outboxEvent.findUnique({ where: { id } });
    if (!event) return;

    const nextRetryCount = event.retryCount + 1;
    const maxRetries = 8;

    if (nextRetryCount >= maxRetries) {
      await this.prisma.outboxEvent.update({
        where: { id },
        data: {
          status: 'failed',
          retryCount: nextRetryCount,
          // Move to dead letter after max retries
        },
      });
      this.logger.error(`Outbox event ${id} moved to dead letter after ${maxRetries} retries: ${error}`);
    } else {
      // Exponential backoff: 1min, 2min, 4min, 8min, 16min, 32min, 64min, 128min
      const delayMinutes = Math.pow(2, nextRetryCount - 1);
      const availableAt = new Date(Date.now() + delayMinutes * 60 * 1000);

      await this.prisma.outboxEvent.update({
        where: { id },
        data: {
          status: 'pending',
          retryCount: nextRetryCount,
          availableAt,
        },
      });
      this.logger.warn(`Outbox event ${id} scheduled for retry ${nextRetryCount}/${maxRetries} in ${delayMinutes}min: ${error}`);
    }
  }

  /**
   * Get dead letter events for manual replay
   */
  async getDeadLetterEvents(tenantId?: string, limit = 50): Promise<OutboxEvent[]> {
    return this.prisma.outboxEvent.findMany({
      where: {
        status: 'failed',
        ...(tenantId && { tenantId }),
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  /**
   * Retry a dead letter event
   */
  async retryDeadLetter(id: string): Promise<void> {
    await this.prisma.outboxEvent.update({
      where: { id },
      data: {
        status: 'pending',
        retryCount: 0,
        availableAt: new Date(),
      },
    });
  }
}
