import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class BookingService {
  private readonly logger = new Logger(BookingService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'BookingService', status: 'operational' };
  }
}
