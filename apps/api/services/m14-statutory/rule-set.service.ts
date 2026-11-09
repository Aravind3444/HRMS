import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RuleSetService {
  private readonly logger = new Logger(RuleSetService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'RuleSetService', status: 'operational' };
  }
}
