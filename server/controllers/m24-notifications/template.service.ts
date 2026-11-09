import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class TemplateService {
  private readonly logger = new Logger(TemplateService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'TemplateService', status: 'operational' };
  }
}
