import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class Form24qService {
  private readonly logger = new Logger(Form24qService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'Form24qService', status: 'operational' };
  }
}
