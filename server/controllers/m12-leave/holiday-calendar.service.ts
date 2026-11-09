import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class HolidayCalendarService {
  private readonly logger = new Logger(HolidayCalendarService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'HolidayCalendarService', status: 'operational' };
  }
}
