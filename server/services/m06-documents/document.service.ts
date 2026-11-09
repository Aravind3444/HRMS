import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DocumentService {
  private readonly logger = new Logger(DocumentService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'DocumentService', status: 'operational' };
  }
}
