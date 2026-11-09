import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AuditEventService {
  private readonly logger = new Logger(AuditEventService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'AuditEventService', status: 'operational' };
  }
}
