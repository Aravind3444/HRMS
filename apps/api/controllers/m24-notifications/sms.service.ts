import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'SmsService', status: 'operational' };
  }
}
