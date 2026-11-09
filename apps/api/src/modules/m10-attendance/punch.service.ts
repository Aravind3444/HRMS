import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PunchService {
  private readonly logger = new Logger(PunchService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'PunchService', status: 'operational' };
  }
}
