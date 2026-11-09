import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class ScopeResolverService {
  private readonly logger = new Logger(ScopeResolverService.name);
  constructor(private readonly prisma: PrismaService) {}

  async resolveScopes(membershipId: string) {
    const grants = await this.prisma.membershipRoleGrant.findMany({
      where: { membershipId },
      include: { role: true },
    });
    return grants.map(g => ({
      role: g.role.code,
      scopeType: g.scopeType,
      scopeId: g.scopeId,
    }));
  }
}

