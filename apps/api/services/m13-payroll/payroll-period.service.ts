import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PayrollPeriodService {
  private readonly logger = new Logger(PayrollPeriodService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'PayrollPeriodService', status: 'operational' };
  }
}
