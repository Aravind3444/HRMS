import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class OrgChartService {
  private readonly logger = new Logger(OrgChartService.name);
  constructor(private readonly prisma: PrismaService) {}

  async getTree(tenantId: string) {
    this.logger.log(`Fetching org chart tree for tenant ${tenantId}`);
    return { id: 'root', name: 'Organization', children: [] };
  }
}

