import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class JournalService {
  private readonly logger = new Logger(JournalService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'JournalService', status: 'operational' };
  }
}
