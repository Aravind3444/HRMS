import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PayrollRunService {
  private readonly logger = new Logger(PayrollRunService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'PayrollRunService', status: 'operational' };
  }
}
