import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CheckinService {
  private readonly logger = new Logger(CheckinService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'CheckinService', status: 'operational' };
  }
}
