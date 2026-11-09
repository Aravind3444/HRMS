import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ComplianceCalendarService {
  private readonly logger = new Logger(ComplianceCalendarService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ComplianceCalendarService', status: 'operational' };
  }
}
