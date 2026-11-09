import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class LeaveLedgerService {
  private readonly logger = new Logger(LeaveLedgerService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'LeaveLedgerService', status: 'operational' };
  }
}
