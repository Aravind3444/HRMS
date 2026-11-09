import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DeviceSyncService {
  private readonly logger = new Logger(DeviceSyncService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'DeviceSyncService', status: 'operational' };
  }
}
