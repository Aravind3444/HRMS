import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EsiService {
  private readonly logger = new Logger(EsiService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'EsiService', status: 'operational' };
  }
}
