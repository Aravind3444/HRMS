import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class LifecycleService {
  private readonly logger = new Logger(LifecycleService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'LifecycleService', status: 'operational' };
  }
}
