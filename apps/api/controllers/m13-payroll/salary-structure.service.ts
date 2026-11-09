import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class SalaryStructureService {
  private readonly logger = new Logger(SalaryStructureService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'SalaryStructureService', status: 'operational' };
  }
}
