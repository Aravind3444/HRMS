import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class BankAccountService {
  private readonly logger = new Logger(BankAccountService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'BankAccountService', status: 'operational' };
  }
}
