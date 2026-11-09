import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class TimesheetService {
  private readonly logger = new Logger(TimesheetService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'TimesheetService', status: 'operational' };
  }
}
