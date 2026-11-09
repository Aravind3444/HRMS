import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CaseService {
  private readonly logger = new Logger(CaseService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'CaseService', status: 'operational' };
  }
}
