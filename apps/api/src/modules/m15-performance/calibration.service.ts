import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CalibrationService {
  private readonly logger = new Logger(CalibrationService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'CalibrationService', status: 'operational' };
  }
}
