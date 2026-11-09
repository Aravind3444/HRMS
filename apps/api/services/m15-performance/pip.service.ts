import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PipService {
  private readonly logger = new Logger(PipService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'PipService', status: 'operational' };
  }
}
