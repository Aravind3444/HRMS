import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AccountingService {
  private readonly logger = new Logger(AccountingService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'AccountingService', status: 'operational' };
  }
}
