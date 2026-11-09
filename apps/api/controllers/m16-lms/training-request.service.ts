import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class TrainingRequestService {
  private readonly logger = new Logger(TrainingRequestService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'TrainingRequestService', status: 'operational' };
  }
}
