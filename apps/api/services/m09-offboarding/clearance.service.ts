import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ClearanceService {
  private readonly logger = new Logger(ClearanceService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ClearanceService', status: 'operational' };
  }
}
