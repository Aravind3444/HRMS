import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PreJoiningPortalService {
  private readonly logger = new Logger(PreJoiningPortalService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'PreJoiningPortalService', status: 'operational' };
  }
}
