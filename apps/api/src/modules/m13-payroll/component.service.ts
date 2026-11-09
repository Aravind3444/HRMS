import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ComponentService {
  private readonly logger = new Logger(ComponentService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'ComponentService', status: 'operational' };
  }
}
