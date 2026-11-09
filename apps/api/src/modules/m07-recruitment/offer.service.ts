import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class OfferService {
  private readonly logger = new Logger(OfferService.name);
  constructor(private readonly prisma: PrismaService) {}

  async healthCheck() {
    return { service: 'OfferService', status: 'operational' };
  }
}
