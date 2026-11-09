import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class KpiService {
  private readonly logger = new Logger(KpiService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'KpiService', status: 'operational' };
  }
}
