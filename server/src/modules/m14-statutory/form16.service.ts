import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class Form16Service {
  private readonly logger = new Logger(Form16Service.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'Form16Service', status: 'operational' };
  }
}
