import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class LeaveTypeService {
  private readonly logger = new Logger(LeaveTypeService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'LeaveTypeService', status: 'operational' };
  }
}
