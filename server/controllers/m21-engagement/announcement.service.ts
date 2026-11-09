import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AnnouncementService {
  private readonly logger = new Logger(AnnouncementService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'AnnouncementService', status: 'operational' };
  }
}
