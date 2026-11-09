import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RequisitionService {
  private readonly logger = new Logger(RequisitionService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'RequisitionService', status: 'operational' };
  }
}
