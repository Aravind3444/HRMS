import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class FeedbackService {
  private readonly logger = new Logger(FeedbackService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'FeedbackService', status: 'operational' };
  }
}
