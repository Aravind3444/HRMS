import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class TicketService {
  private readonly logger = new Logger(TicketService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'TicketService', status: 'operational' };
  }
}
