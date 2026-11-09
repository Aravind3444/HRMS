import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class BiometricService {
  private readonly logger = new Logger(BiometricService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'BiometricService', status: 'operational' };
  }
}
