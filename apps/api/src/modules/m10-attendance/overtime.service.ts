import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class OvertimeService {
  private readonly logger = new Logger(OvertimeService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'OvertimeService', status: 'operational' };
  }
}
