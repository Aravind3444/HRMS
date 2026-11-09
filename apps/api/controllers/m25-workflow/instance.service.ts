import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class InstanceService {
  private readonly logger = new Logger(InstanceService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'InstanceService', status: 'operational' };
  }
}
