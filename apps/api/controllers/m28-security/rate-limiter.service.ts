import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RateLimiterService {
  private readonly logger = new Logger(RateLimiterService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'RateLimiterService', status: 'operational' };
  }
}
