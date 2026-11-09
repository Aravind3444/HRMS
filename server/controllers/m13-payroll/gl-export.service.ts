import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class GlExportService {
  private readonly logger = new Logger(GlExportService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'GlExportService', status: 'operational' };
  }
}
