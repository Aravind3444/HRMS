import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class InvestmentDeclarationService {
  private readonly logger = new Logger(InvestmentDeclarationService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'InvestmentDeclarationService', status: 'operational' };
  }
}
