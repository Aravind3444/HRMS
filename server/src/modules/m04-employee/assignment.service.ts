import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AssignmentService {
  private readonly logger = new Logger(AssignmentService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'AssignmentService', status: 'operational' };
  }
}
