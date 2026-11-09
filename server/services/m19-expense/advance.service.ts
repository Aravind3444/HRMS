import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AdvanceService {
  private readonly logger = new Logger(AdvanceService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'AdvanceService', status: 'operational' };
  }
}
