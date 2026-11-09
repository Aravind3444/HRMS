import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AuditSearchService {
  private readonly logger = new Logger(AuditSearchService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'AuditSearchService', status: 'operational' };
  }
}
