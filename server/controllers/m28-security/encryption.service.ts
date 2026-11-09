import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EncryptionService {
  private readonly logger = new Logger(EncryptionService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'EncryptionService', status: 'operational' };
  }
}
