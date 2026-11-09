import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class GoalService {
  private readonly logger = new Logger(GoalService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'GoalService', status: 'operational' };
  }
}
