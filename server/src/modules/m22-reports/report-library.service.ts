import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ReportLibraryService {
  private readonly logger = new Logger(ReportLibraryService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ReportLibraryService', status: 'operational' };
  }
}
