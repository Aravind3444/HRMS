import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { SessionService } from './auth/session.service';
import { InvitationService } from './invitation.service';
import { InvitationController } from './invitation.controller';
import { RoleService } from './rbac/role.service';
import { RoleController } from './rbac/role.controller';
import { TenantModule } from '../m01-tenant/tenant.module';
import { NotificationsModule } from '../m24-notifications/notifications.module';

@Module({
  imports: [TenantModule, NotificationsModule],
  controllers: [AuthController, RoleController, InvitationController],
  providers: [
    AuthService,
    SessionService,
    InvitationService,
    RoleService,
  ],
  exports: [AuthService, InvitationService, RoleService],
})
export class IamModule {}
