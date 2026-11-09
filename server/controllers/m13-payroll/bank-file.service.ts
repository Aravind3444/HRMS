import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class BankFileService {
  private readonly logger = new Logger(BankFileService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'BankFileService', status: 'operational' };
  }
}
