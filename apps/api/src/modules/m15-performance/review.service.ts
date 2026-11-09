import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ReviewService {
  private readonly logger = new Logger(ReviewService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ReviewService', status: 'operational' };
  }
}
