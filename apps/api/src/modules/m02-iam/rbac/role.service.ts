import { Injectable, NotFoundException, BadRequestException, ForbiddenException, ConflictException, Logger } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreateRoleDto, UpdateRoleDto, GrantRoleDto } from './dto/role.dto';

@Injectable()
export class RoleService {
  private readonly logger = new Logger(RoleService.name);

  constructor(private readonly prisma: PrismaService) {}

  // Role CRUD
  async createRole(actorUserId: string, tenantId: string, dto: CreateRoleDto) {
    await this.checkPermission(actorUserId, tenantId, 'role:create');
    
    const existing = await this.prisma.role.findFirst({
      where: { code: dto.code, tenantId },
    });
    if (existing) throw new ConflictException('Role with this code already exists in this tenant');

    const role = await this.prisma.role.create({
      data: {
        tenantId,
        code: dto.code,
        name: dto.name,
        description: dto.description,
        isSystem: false,
      },
    });

    // Assign permissions
    if (dto.permissionCodes && dto.permissionCodes.length > 0) {
      const permissions = await this.prisma.permission.findMany({
        where: { code: { in: dto.permissionCodes } },
      });
      if (permissions.length !== dto.permissionCodes.length) {
        throw new BadRequestException('One or more permission codes are invalid');
      }
      await this.prisma.rolePermission.createMany({
        data: permissions.map(p => ({ roleId: role.id, permissionId: p.id })),
        skipDuplicates: true,
      });
    }

    await this.audit(actorUserId, tenantId, 'ROLE_CREATED', 'Role', role.id, { code: dto.code, name: dto.name });
    this.logger.log(`Role created: ${dto.code} in tenant ${tenantId}`);
    return { success: true, data: role };
  }

  async updateRole(actorUserId: string, tenantId: string, roleId: string, dto: UpdateRoleDto) {
    await this.checkPermission(actorUserId, tenantId, 'role:update');
    
    const role = await this.prisma.role.findFirst({ where: { id: roleId, tenantId } });
    if (!role) throw new NotFoundException('Role not found');
    if (role.isSystem) throw new BadRequestException('Cannot modify system roles');

    const updated = await this.prisma.role.update({
      where: { id: roleId },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.description !== undefined && { description: dto.description }),
      },
    });

    if (dto.permissionCodes !== undefined) {
      await this.prisma.rolePermission.deleteMany({ where: { roleId } });
      if (dto.permissionCodes.length > 0) {
        const permissions = await this.prisma.permission.findMany({
          where: { code: { in: dto.permissionCodes } },
        });
        if (permissions.length !== dto.permissionCodes.length) {
          throw new BadRequestException('One or more permission codes are invalid');
        }
        await this.prisma.rolePermission.createMany({
          data: permissions.map(p => ({ roleId, permissionId: p.id })),
          skipDuplicates: true,
        });
      }
    }

    await this.audit(actorUserId, tenantId, 'ROLE_UPDATED', 'Role', roleId, dto);
    return { success: true, data: updated };
  }

  async deleteRole(actorUserId: string, tenantId: string, roleId: string) {
    await this.checkPermission(actorUserId, tenantId, 'role:delete');
    
    const role = await this.prisma.role.findFirst({ where: { id: roleId, tenantId } });
    if (!role) throw new NotFoundException('Role not found');
    if (role.isSystem) throw new BadRequestException('Cannot delete system roles');

    // Check if role is assigned to any membership
    const grants = await this.prisma.membershipRoleGrant.count({ where: { roleId } });
    if (grants > 0) throw new BadRequestException('Cannot delete role with active grants');

    await this.prisma.role.delete({ where: { id: roleId } });
    await this.audit(actorUserId, tenantId, 'ROLE_DELETED', 'Role', roleId);
    return { success: true, message: 'Role deleted' };
  }

  async getRoles(tenantId: string, actorUserId: string) {
    await this.checkPermission(actorUserId, tenantId, 'role:read');
    
    const roles = await this.prisma.role.findMany({
      where: {
        OR: [
          { tenantId: tenantId },
          { tenantId: null },
        ],
      },
      include: { rolePermissions: { include: { permission: true } } },
      orderBy: { isSystem: 'desc' },
    });
    return { success: true, data: roles };
  }

  async getRole(tenantId: string, roleId: string, actorUserId: string) {
    await this.checkPermission(actorUserId, tenantId, 'role:read');
    
    const role = await this.prisma.role.findFirst({
      where: {
        id: roleId,
        OR: [
          { tenantId: tenantId },
          { tenantId: null },
        ],
      },
      include: { rolePermissions: { include: { permission: true } } },
    });
    if (!role) throw new NotFoundException('Role not found');
    return { success: true, data: role };
  }

  // Role Grants
  async grantRole(actorUserId: string, tenantId: string, dto: GrantRoleDto) {
    await this.checkPermission(actorUserId, tenantId, 'role:grant');
    
    const actorMembership = await this.prisma.membership.findFirst({
      where: { userId: actorUserId, tenantId, status: 'active' },
      include: { roleGrants: { include: { role: { include: { rolePermissions: { include: { permission: true } } } } } } },
    });
    if (!actorMembership) throw new ForbiddenException('No active membership');

    const targetMembership = await this.prisma.membership.findFirst({
      where: { userId: dto.userId, tenantId, status: 'active' },
    });
    if (!targetMembership) throw new NotFoundException('Target user not found in this tenant');
    if (targetMembership.id === actorMembership.id) throw new BadRequestException('Cannot grant role to yourself');

    const role = await this.prisma.role.findFirst({
      where: {
        id: dto.roleId,
        OR: [
          { tenantId: tenantId },
          { tenantId: null },
        ],
      },
    });
    if (!role) throw new NotFoundException('Role not found');

    // Check permission ceiling
    const actorPermissions = new Set<string>();
    for (const grant of actorMembership.roleGrants) {
      for (const rp of grant.role.rolePermissions) actorPermissions.add(rp.permission.code);
    }
    const rolePermissions = await this.prisma.rolePermission.findMany({
      where: { roleId: dto.roleId },
      include: { permission: true },
    });
    for (const rp of rolePermissions) {
      if (!actorPermissions.has(rp.permission.code)) {
        throw new ForbiddenException(`Cannot grant role with permission ${rp.permission.code} that you don't have`);
      }
    }

    // Check scope validity
    if (dto.scopeType !== 'ORGANIZATION' && !dto.scopeId) {
      throw new BadRequestException('Scope ID is required for non-ORGANIZATION scopes');
    }
    if (dto.scopeType !== 'ORGANIZATION') {
      // Validate scope exists and belongs to tenant
      // This would need specific checks per scope type
    }

    // Grant role - use findFirst + create/update instead of upsert (Prisma doesn't handle null in where)
    const existingGrant = await this.prisma.membershipRoleGrant.findFirst({
      where: {
        membershipId: targetMembership.id,
        roleId: dto.roleId,
        scopeType: dto.scopeType,
        scopeId: dto.scopeId ?? null,
      },
    });
    if (existingGrant) {
      await this.prisma.membershipRoleGrant.update({
        where: { id: existingGrant.id },
        data: { expiresAt: dto.expiresAt },
      });
    } else {
      await this.prisma.membershipRoleGrant.create({
        data: {
          membershipId: targetMembership.id,
          roleId: dto.roleId,
          scopeType: dto.scopeType,
          scopeId: dto.scopeId,
          expiresAt: dto.expiresAt,
        },
      });
    }

    // Invalidate permission cache (if implemented)
    await this.audit(actorUserId, tenantId, 'ROLE_GRANTED', 'MembershipRoleGrant', existingGrant?.id || 'new', {
      targetUserId: dto.userId,
      roleId: dto.roleId,
      scopeType: dto.scopeType,
      scopeId: dto.scopeId,
    });
    this.logger.log(`Role granted to user ${targetMembership.userId} in tenant ${tenantId}`);
    return { success: true, data: existingGrant };
  }

  async revokeRole(actorUserId: string, tenantId: string, grantId: string) {
    await this.checkPermission(actorUserId, tenantId, 'role:grant');
    
    const grant = await this.prisma.membershipRoleGrant.findUnique({
      where: { id: grantId },
      include: { membership: true },
    });
    if (!grant || grant.membership.tenantId !== tenantId) {
      throw new NotFoundException('Role grant not found');
    }

    await this.prisma.membershipRoleGrant.delete({ where: { id: grantId } });
    await this.audit(actorUserId, tenantId, 'ROLE_REVOKED', 'MembershipRoleGrant', grantId);
    return { success: true, message: 'Role grant revoked' };
  }

  async getUserGrants(actorUserId: string, tenantId: string, targetUserId: string) {
    await this.checkPermission(actorUserId, tenantId, 'role:read');
    
    const targetMembership = await this.prisma.membership.findFirst({
      where: { userId: targetUserId, tenantId, status: 'active' },
      include: { roleGrants: { include: { role: { include: { rolePermissions: { include: { permission: true } } } } } } },
    });
    if (!targetMembership) throw new NotFoundException('User not found in this tenant');
    return { success: true, data: targetMembership.roleGrants };
  }

  private async checkPermission(actorUserId: string, tenantId: string, permissionCode: string) {
    const membership = await this.prisma.membership.findFirst({
      where: { userId: actorUserId, tenantId, status: 'active' },
      include: { roleGrants: { include: { role: { include: { rolePermissions: { include: { permission: true } } } } } } },
    });
    if (!membership) throw new ForbiddenException('No active membership in this tenant');

    const hasPermission = membership.roleGrants.some(g => 
      g.role.rolePermissions.some(rp => rp.permission.code === permissionCode)
    );
    if (!hasPermission) throw new ForbiddenException(`Permission ${permissionCode} required`);
  }

  private async audit(actorUserId: string, tenantId: string, action: string, resourceType: string, resourceId: string, diffJson?: any) {
    await this.prisma.auditEvent.create({
      data: {
        tenantId,
        actorUserId,
        action,
        resourceType,
        resourceId,
        correlationId: require('crypto').randomUUID(),
        diffJson,
      },
    });
  }
}