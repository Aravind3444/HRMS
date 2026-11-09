import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CatalogService {
  private readonly logger = new Logger(CatalogService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'CatalogService', status: 'operational' };
  }
}
