import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CompensationService {
  private readonly logger = new Logger(CompensationService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'CompensationService', status: 'operational' };
  }
}
