import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class SwapService {
  private readonly logger = new Logger(SwapService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'SwapService', status: 'operational' };
  }
}
