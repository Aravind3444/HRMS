import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class StatutoryIdService {
  private readonly logger = new Logger(StatutoryIdService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'StatutoryIdService', status: 'operational' };
  }
}
