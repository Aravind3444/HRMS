import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DefinitionService {
  private readonly logger = new Logger(DefinitionService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'DefinitionService', status: 'operational' };
  }
}
