import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class YearEndService {
  private readonly logger = new Logger(YearEndService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'YearEndService', status: 'operational' };
  }
}
