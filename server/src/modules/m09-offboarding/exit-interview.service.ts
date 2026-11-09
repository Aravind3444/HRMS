import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ExitInterviewService {
  private readonly logger = new Logger(ExitInterviewService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ExitInterviewService', status: 'operational' };
  }
}
