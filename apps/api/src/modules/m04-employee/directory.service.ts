import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DirectoryService {
  private readonly logger = new Logger(DirectoryService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'DirectoryService', status: 'operational' };
  }
}
