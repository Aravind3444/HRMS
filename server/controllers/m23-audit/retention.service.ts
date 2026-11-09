import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RetentionService {
  private readonly logger = new Logger(RetentionService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'RetentionService', status: 'operational' };
  }
}
