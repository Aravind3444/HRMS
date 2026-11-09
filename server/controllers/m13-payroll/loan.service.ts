import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class LoanService {
  private readonly logger = new Logger(LoanService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'LoanService', status: 'operational' };
  }
}
