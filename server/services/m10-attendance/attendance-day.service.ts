import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AttendanceDayService {
  private readonly logger = new Logger(AttendanceDayService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'AttendanceDayService', status: 'operational' };
  }
}
