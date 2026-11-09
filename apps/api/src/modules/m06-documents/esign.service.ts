import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EsignService {
  private readonly logger = new Logger(EsignService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'EsignService', status: 'operational' };
  }
}
