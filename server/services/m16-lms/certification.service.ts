import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CertificationService {
  private readonly logger = new Logger(CertificationService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'CertificationService', status: 'operational' };
  }
}
