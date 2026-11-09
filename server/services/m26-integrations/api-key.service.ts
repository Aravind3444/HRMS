import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ApiKeyService {
  private readonly logger = new Logger(ApiKeyService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ApiKeyService', status: 'operational' };
  }
}
