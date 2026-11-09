import { Injectable, NotFoundException, BadRequestException, ConflictException, ForbiddenException, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { InviteUserDto } from './auth/dto/invite-user.dto';
import { AcceptInvitationDto } from './auth/dto/accept-invitation.dto';
import * as crypto from 'crypto';
import * as bcrypt from 'bcryptjs';
import { EmailService } from '../../modules/m24-notifications/email.service';
import { OutboxService } from '../../modules/m24-notifications/outbox.service';

@Injectable()
export class InvitationService {
  private readonly logger = new Logger(InvitationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly outboxService: OutboxService,
  ) {}

  async inviteUser(actorUserId: string, tenantId: string, dto: InviteUserDto) {
    // Check if actor has permission to invite
    const actorMembership = await this.prisma.membership.findFirst({
      where: { userId: actorUserId, tenantId, status: 'active' },
      include: { roleGrants: { include: { role: { include: { rolePermissions: { include: { permission: true } } } } } } },
    });
    if (!actorMembership) throw new ForbiddenException('No active membership in this tenant');

    const canInvite = actorMembership.roleGrants.some(g => 
      g.role.rolePermissions.some(rp => rp.permission.code === 'user:invite')
    );
    if (!canInvite) throw new ForbiddenException('Insufficient permissions to invite users');

    const normalizedEmail = dto.email.toLowerCase().trim();
    
    // Check if user already exists globally
    const existingUser = await this.prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existingUser) {
      // Check if already a member of this tenant
      const existingMembership = await this.prisma.membership.findUnique({
        where: { tenantId_userId: { tenantId, userId: existingUser.id } },
      });
      if (existingMembership) {
        throw new ConflictException('User is already a member of this organization');
      }
    }

    // Check if there's already a pending invitation
    const existingInvitation = await this.prisma.invitation.findFirst({
      where: { tenantId, email: normalizedEmail, status: 'pending' },
    });
    if (existingInvitation) {
      throw new ConflictException('An invitation is already pending for this email');
    }

    // Verify role exists and is assignable by actor
    const role = await this.prisma.role.findFirst({
      where: { code: dto.roleCode, tenantId: dto.roleCode.startsWith('CUSTOM_') ? tenantId : null },
      include: { rolePermissions: { include: { permission: true } } },
    });
    if (!role) throw new BadRequestException('Invalid role');
    if (role.tenantId && role.tenantId !== tenantId) {
      throw new ForbiddenException('Cannot assign role from another tenant');
    }

    // Check permission ceiling
    const actorPermissions = new Set<string>();
    for (const grant of actorMembership.roleGrants) {
      for (const rp of grant.role.rolePermissions) actorPermissions.add(rp.permission.code);
    }
    for (const rp of role.rolePermissions) {
      if (!actorPermissions.has(rp.permission.code)) {
        throw new ForbiddenException(`Cannot assign role with permission ${rp.permission.code} that you don't have`);
      }
    }

    // Create invitation
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000); // 72 hours

    const invitation = await this.prisma.invitation.create({
      data: {
        tenantId,
        email: normalizedEmail,
        roleId: role.id,
        invitedById: actorUserId,
        tokenHash,
        expiresAt,
        status: 'pending',
      },
    });

    // Emit outbox event for invitation email
    const correlationId = crypto.randomUUID();
    await this.prisma.outboxEvent.create({
      data: {
        tenantId,
        eventType: 'USER_INVITED',
        payloadJson: {
          invitationId: invitation.id,
          email: normalizedEmail,
          roleName: role.name,
          invitedByName: (await this.prisma.user.findUnique({ where: { id: actorUserId }, select: { fullName: true } }))?.fullName,
          tenantName: (await this.prisma.tenant.findUnique({ where: { id: tenantId }, select: { name: true } }))?.name,
          invitationUrl: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/auth/accept-invitation?token=${rawToken}`,
          expiresAt: expiresAt.toISOString(),
        },
      },
    });

    // Audit
    await this.prisma.auditEvent.create({
      data: {
        tenantId,
        actorUserId,
        action: 'USER_INVITED',
        resourceType: 'Invitation',
        resourceId: invitation.id,
        correlationId,
      },
    });

    this.logger.log(`User invited: ${normalizedEmail} to tenant ${tenantId}`);
    return { success: true, data: { invitationId: invitation.id, email: normalizedEmail } };
  }

  async acceptInvitation(dto: AcceptInvitationDto) {
    const tokenHash = crypto.createHash('sha256').update(dto.token).digest('hex');
    
    const invitation = await this.prisma.invitation.findUnique({
      where: { tokenHash },
      include: { role: true, tenant: true, invitedBy: true },
    });
    if (!invitation) throw new BadRequestException('Invalid or expired invitation token');
    if (invitation.status !== 'pending') throw new BadRequestException('This invitation has already been used or revoked');
    if (invitation.expiresAt < new Date()) throw new BadRequestException('This invitation has expired');

    // Check if user already exists
    let user = await this.prisma.user.findUnique({ where: { email: invitation.email } });
    if (!user) {
      // Create user with temporary password
      const tempPassword = crypto.randomBytes(16).toString('hex');
      const passwordHash = await bcrypt.hash(tempPassword, 12);
      user = await this.prisma.user.create({
        data: {
          email: invitation.email,
          passwordHash,
          fullName: dto.fullName,
          isEmailVerified: true,
        },
      });
    }

    // Create or update membership
    const membership = await this.prisma.membership.upsert({
      where: { tenantId_userId: { tenantId: invitation.tenantId, userId: user.id } },
      update: { status: 'active' },
      create: { tenantId: invitation.tenantId, userId: user.id, status: 'active', joinedAt: new Date() },
    });

    // Grant role - use findFirst + create/update instead of upsert (Prisma doesn't handle null in where)
    const existingGrant = await this.prisma.membershipRoleGrant.findFirst({
      where: {
        membershipId: membership.id,
        roleId: invitation.roleId,
        scopeType: 'ORGANIZATION',
        scopeId: null,
      },
    });
    if (existingGrant) {
      await this.prisma.membershipRoleGrant.update({
        where: { id: existingGrant.id },
        data: {},
      });
    } else {
      await this.prisma.membershipRoleGrant.create({
        data: { membershipId: membership.id, roleId: invitation.roleId, scopeType: 'ORGANIZATION' },
      });
    }

    // Mark invitation as accepted
    await this.prisma.invitation.update({
      where: { id: invitation.id },
      data: { status: 'accepted', acceptedAt: new Date() },
    });

    // Audit
    await this.prisma.auditEvent.create({
      data: {
        tenantId: invitation.tenantId,
        actorUserId: user.id,
        action: 'INVITATION_ACCEPTED',
        resourceType: 'Invitation',
        resourceId: invitation.id,
        correlationId: crypto.randomUUID(),
      },
    });

    this.logger.log(`Invitation accepted: ${invitation.email} for tenant ${invitation.tenantId}`);
    return { success: true, message: 'Invitation accepted successfully. You can now log in.' };
  }

  async getPendingInvitations(tenantId: string, actorUserId: string) {
    const actorMembership = await this.prisma.membership.findFirst({
      where: { userId: actorUserId, tenantId, status: 'active' },
      include: { roleGrants: { include: { role: { include: { rolePermissions: { include: { permission: true } } } } } } },
    });
    if (!actorMembership) throw new ForbiddenException('No active membership');

    const canView = actorMembership.roleGrants.some(g => 
      g.role.rolePermissions?.some(rp => rp.permission.code === 'user:invite')
    );
    if (!canView) throw new ForbiddenException('Insufficient permissions');

    const invitations = await this.prisma.invitation.findMany({
      where: { tenantId, status: 'pending' },
      include: { role: true, invitedBy: { select: { id: true, fullName: true, email: true } } },
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: invitations };
  }

  async revokeInvitation(invitationId: string, actorUserId: string, tenantId: string) {
    const actorMembership = await this.prisma.membership.findFirst({
      where: { userId: actorUserId, tenantId, status: 'active' },
      include: { roleGrants: { include: { role: { include: { rolePermissions: { include: { permission: true } } } } } } },
    });
    if (!actorMembership) throw new ForbiddenException('No active membership');

    const canRevoke = actorMembership.roleGrants.some(g => 
      g.role.rolePermissions?.some(rp => rp.permission.code === 'user:invite')
    );
    if (!canRevoke) throw new ForbiddenException('Insufficient permissions');

    const invitation = await this.prisma.invitation.findUnique({ where: { id: invitationId } });
    if (!invitation || invitation.tenantId !== tenantId) throw new NotFoundException('Invitation not found');
    if (invitation.status !== 'pending') throw new BadRequestException('Only pending invitations can be revoked');

    await this.prisma.invitation.update({
      where: { id: invitationId },
      data: { status: 'revoked', revokedAt: new Date() },
    });

    await this.prisma.auditEvent.create({
      data: {
        tenantId,
        actorUserId,
        action: 'INVITATION_REVOKED',
        resourceType: 'Invitation',
        resourceId: invitationId,
        correlationId: crypto.randomUUID(),
      },
    });

    return { success: true, message: 'Invitation revoked' };
  }
}