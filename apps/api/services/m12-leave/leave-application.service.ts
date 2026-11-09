import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class LeaveApplicationService {
  private readonly logger = new Logger(LeaveApplicationService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'LeaveApplicationService', status: 'operational' };
  }
}
