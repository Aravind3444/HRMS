import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PayrollExchangeService {
  private readonly logger = new Logger(PayrollExchangeService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'PayrollExchangeService', status: 'operational' };
  }
}
