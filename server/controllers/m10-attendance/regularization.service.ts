import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RegularizationService {
  private readonly logger = new Logger(RegularizationService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'RegularizationService', status: 'operational' };
  }
}
