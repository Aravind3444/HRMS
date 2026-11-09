import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ShiftTemplateService {
  private readonly logger = new Logger(ShiftTemplateService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ShiftTemplateService', status: 'operational' };
  }
}
