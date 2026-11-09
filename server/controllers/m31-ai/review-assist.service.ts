import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ReviewAssistService {
  private readonly logger = new Logger(ReviewAssistService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ReviewAssistService', status: 'operational' };
  }
}
