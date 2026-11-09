import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class SecretsService {
  private readonly logger = new Logger(SecretsService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'SecretsService', status: 'operational' };
  }
}
