import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DpdpService {
  private readonly logger = new Logger(DpdpService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'DpdpService', status: 'operational' };
  }
}
