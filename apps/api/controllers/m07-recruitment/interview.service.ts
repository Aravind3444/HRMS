import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class InterviewService {
  private readonly logger = new Logger(InterviewService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'InterviewService', status: 'operational' };
  }
}
