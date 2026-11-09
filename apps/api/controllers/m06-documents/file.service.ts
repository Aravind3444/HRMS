import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class FileService {
  private readonly logger = new Logger(FileService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'FileService', status: 'operational' };
  }
}
