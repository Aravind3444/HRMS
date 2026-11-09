import { Controller, Post, Get, Delete, Param, Body, Req, HttpCode, HttpStatus, ForbiddenException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCookieAuth } from '@nestjs/swagger';
import { InvitationService } from './invitation.service';
import { InviteUserDto, AcceptInvitationDto } from './auth/dto/invite-user.dto';
import { Request } from 'express';
import { Public } from '../../common/decorators/public.decorator';

@ApiTags('iam/invitations')
@ApiCookieAuth()
@Controller('iam/invitations')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  private getActorUserId(req: Request): string {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new ForbiddenException('Authentication required');
    return userId;
  }

  private getTenantId(req: Request): string {
    const tenantId = (req as any).tenantId;
    if (!tenantId) throw new ForbiddenException('Tenant context required');
    return tenantId;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Invite a user to the organization' })
  async inviteUser(
    @Req() req: Request,
    @Body() dto: InviteUserDto,
  ) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.invitationService.inviteUser(actorUserId, tenantId, dto);
  }

  @Public()
  @Post('accept')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Accept an invitation' })
  async acceptInvitation(@Body() dto: AcceptInvitationDto) {
    return this.invitationService.acceptInvitation(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List pending invitations' })
  async getPendingInvitations(@Req() req: Request) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.invitationService.getPendingInvitations(tenantId, actorUserId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Revoke a pending invitation' })
  async revokeInvitation(
    @Param('id') invitationId: string,
    @Req() req: Request,
  ) {
    const actorUserId = this.getActorUserId(req);
    const tenantId = this.getTenantId(req);
    return this.invitationService.revokeInvitation(invitationId, actorUserId, tenantId);
  }
}