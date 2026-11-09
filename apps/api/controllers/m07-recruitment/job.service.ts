import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class JobService {
  private readonly logger = new Logger(JobService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'JobService', status: 'operational' };
  }
}
