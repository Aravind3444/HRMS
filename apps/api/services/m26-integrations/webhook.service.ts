import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class WebhookService {
  private readonly logger = new Logger(WebhookService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'WebhookService', status: 'operational' };
  }
}
