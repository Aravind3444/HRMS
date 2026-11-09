import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PolicyQaService {
  private readonly logger = new Logger(PolicyQaService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'PolicyQaService', status: 'operational' };
  }
}
