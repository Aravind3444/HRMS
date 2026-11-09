import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class FnfService {
  private readonly logger = new Logger(FnfService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'FnfService', status: 'operational' };
  }
}
