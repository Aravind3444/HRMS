import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ReviewCycleService {
  private readonly logger = new Logger(ReviewCycleService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ReviewCycleService', status: 'operational' };
  }
}
