import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PayslipService {
  private readonly logger = new Logger(PayslipService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'PayslipService', status: 'operational' };
  }
}
