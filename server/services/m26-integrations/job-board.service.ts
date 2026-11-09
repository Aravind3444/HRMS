import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class JobBoardService {
  private readonly logger = new Logger(JobBoardService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'JobBoardService', status: 'operational' };
  }
}
