import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'TaskService', status: 'operational' };
  }
}
