import { Injectable, Logger, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { SetupWizardStepDto, WizardStep1ProfileDto, WizardStep2LegalEntityDto, WizardStep3LocationsDto, WizardStep4DepartmentsDto, WizardStep5WorkPolicyDto, WizardStep6LeaveDto, WizardStep7InviteUsersDto } from './dto/setup-wizard.dto';
import { TenantSettingsService } from './tenant-settings.service';
import { DefaultSeedingService } from './default-seeding.service';
import * as crypto from 'crypto';

const WIZARD_STEPS = ['profile', 'legal_entity', 'locations', 'departments', 'work_policy', 'leave', 'invite_users'];
const REQUIRED_STEPS = ['work_policy', 'leave']; // Steps that must be completed before wizard can finish

@Injectable()
export class SetupWizardService {
  private readonly logger = new Logger(SetupWizardService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly tenantSettingsService: TenantSettingsService,
    private readonly defaultSeeding: DefaultSeedingService,
  ) {}

  async submitStep(tenantId: string, dto: SetupWizardStepDto, userId: string) {
    const tenant = await this.prisma.tenant.findUnique({ where: { id: tenantId }, include: { settings: true } });
    if (!tenant) throw new NotFoundException('Tenant not found');

    // Verify user has OA permission
    const membership = await this.prisma.membership.findFirst({
      where: { userId, tenantId, status: 'active' },
      include: { roleGrants: { include: { role: true } } },
    });
    if (!membership || !membership.roleGrants.some(g => g.role.code === 'OA')) {
      throw new ForbiddenException('Only Organization Admin can modify setup wizard');
    }

    this.logger.log(`Setup wizard step '${dto.step}' for tenant ${tenantId} by user ${userId}`);

    // Validate and persist step data
    await this.persistStepData(tenantId, dto.step, dto.data);

    // Check if all required steps are complete when marking complete
    if (dto.complete) {
      await this.validateRequiredSteps(tenantId);
      await this.tenantSettingsService.markSetupCompleted(tenantId, userId);
    }

    // Get current step status for response
    const stepStatus = await this.getStepStatus(tenantId);

    return {
      success: true,
      data: {
        step: dto.step,
        nextStep: this.getNextStep(dto.step),
        setupCompleted: dto.complete ?? false,
        stepStatus,
      },
    };
  }

  async getStatus(tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({ where: { id: tenantId }, include: { settings: true } });
    if (!tenant) throw new NotFoundException('Tenant not found');

    const stepStatus = await this.getStepStatus(tenantId);
    const currentStep = this.getCurrentStep(stepStatus);

    return {
      success: true,
      data: {
        completed: tenant.settings?.setupCompleted ?? false,
        currentStep,
        stepStatus,
        completedAt: tenant.settings?.completedAt,
        completedBy: tenant.settings?.completedBy,
      },
    };
  }

  private async persistStepData(tenantId: string, step: string, data?: Record<string, unknown>) {
    if (!data) return;

    switch (step) {
      case 'profile':
        await this.persistProfileStep(tenantId, data as unknown as WizardStep1ProfileDto);
        break;
      case 'legal_entity':
        await this.persistLegalEntityStep(tenantId, data as unknown as WizardStep2LegalEntityDto);
        break;
      case 'locations':
        await this.persistLocationsStep(tenantId, data as unknown as WizardStep3LocationsDto);
        break;
      case 'departments':
        await this.persistDepartmentsStep(tenantId, data as unknown as WizardStep4DepartmentsDto);
        break;
      case 'work_policy':
        await this.persistWorkPolicyStep(tenantId, data as unknown as WizardStep5WorkPolicyDto);
        break;
      case 'leave':
        await this.persistLeaveStep(tenantId, data as unknown as WizardStep6LeaveDto);
        break;
      case 'invite_users':
        await this.persistInviteUsersStep(tenantId, data as unknown as WizardStep7InviteUsersDto);
        break;
      default:
        throw new BadRequestException(`Unknown wizard step: ${step}`);
    }
  }

  private async persistProfileStep(tenantId: string, data: WizardStep1ProfileDto) {
    await this.prisma.$transaction(async (tx) => {
      // Update tenant name
      await tx.tenant.update({
        where: { id: tenantId },
        data: { name: data.companyName },
      });

      // Update tenant settings
      await tx.tenantSettings.update({
        where: { tenantId },
        data: {
          country: data.country,
          timezone: data.timezone,
          currency: data.currency,
          weekStartDay: data.weekStartDay,
        },
      });
    });
  }

  private async persistLegalEntityStep(tenantId: string, data: WizardStep2LegalEntityDto) {
    // Upsert default legal entity
    await this.prisma.legalEntity.upsert({
      where: { tenantId_code: { tenantId, code: data.code } },
      update: {
        name: data.name,
        cin: data.cin,
        pan: data.pan,
        tan: data.tan,
        gstin: data.gstin,
        pfNumber: data.pfNumber,
        esiNumber: data.esiNumber,
      },
      create: {
        tenantId,
        name: data.name,
        code: data.code,
        isDefault: true,
        cin: data.cin,
        pan: data.pan,
        tan: data.tan,
        gstin: data.gstin,
        pfNumber: data.pfNumber,
        esiNumber: data.esiNumber,
      },
    });
  }

  private async persistLocationsStep(tenantId: string, data: WizardStep3LocationsDto) {
    const legalEntity = await this.prisma.legalEntity.findFirst({
      where: { tenantId, isDefault: true },
      select: { id: true },
    });
    if (!legalEntity) throw new BadRequestException('Default legal entity not found. Complete legal_entity step first.');

    await this.prisma.$transaction(async (tx) => {
      for (const loc of data.locations) {
        await tx.location.upsert({
          where: { tenantId_code: { tenantId, code: loc.code } },
          update: {
            name: loc.name,
            address: loc.address,
            state: loc.state,
            pincode: loc.pincode,
            timezone: loc.timezone,
            latitude: loc.latitude,
            longitude: loc.longitude,
            geofenceRadius: loc.geofenceRadius,
            legalEntityId: legalEntity.id,
          },
          create: {
            tenantId,
            legalEntityId: legalEntity.id,
            name: loc.name,
            code: loc.code,
            address: loc.address,
            state: loc.state,
            pincode: loc.pincode,
            timezone: loc.timezone,
            latitude: loc.latitude,
            longitude: loc.longitude,
            geofenceRadius: loc.geofenceRadius,
          },
        });
      }
    });
  }

  private async persistDepartmentsStep(tenantId: string, data: WizardStep4DepartmentsDto) {
    await this.prisma.$transaction(async (tx) => {
      // First pass: create/update departments without parent references
      const deptMap = new Map<string, string>(); // code -> id

      for (const dept of data.departments) {
        const existing = await tx.department.findUnique({
          where: { tenantId_code: { tenantId, code: dept.code } },
          select: { id: true },
        });

        let deptId: string;
        if (existing) {
          await tx.department.update({
            where: { id: existing.id },
            data: { name: dept.name, description: dept.description },
          });
          deptId = existing.id;
        } else {
          const created = await tx.department.create({
            data: { tenantId, name: dept.name, code: dept.code, description: dept.description },
            select: { id: true },
          });
          deptId = created.id;
        }
        deptMap.set(dept.code, deptId);
      }

      // Second pass: update parent references
      for (const dept of data.departments) {
        if (dept.parentDepartmentId) {
          const parentId = deptMap.get(dept.parentDepartmentId) || dept.parentDepartmentId;
          await tx.department.update({
            where: { tenantId_code: { tenantId, code: dept.code } },
            data: { parentDepartmentId: parentId },
          });
        }
      }
    });
  }

  private async persistWorkPolicyStep(tenantId: string, data: WizardStep5WorkPolicyDto) {
    // Get or create attendance policy version 1
    const existing = await this.prisma.attendancePolicyVersion.findUnique({
      where: { tenantId_version: { tenantId, version: 1 } },
      select: { id: true },
    });

    if (existing) {
      await this.prisma.attendancePolicyVersion.update({
        where: { id: existing.id },
        data: {
          name: 'Default Attendance Policy',
          graceMinutes: data.graceMinutes,
          lateMarkThresholdMinutes: data.lateMarkThresholdMinutes,
          halfDayThresholdMinutes: data.halfDayThresholdMinutes,
          fullDayThresholdMinutes: data.fullDayThresholdMinutes,
          allowedPunchWindowMinutes: data.allowedPunchWindowMinutes,
          captureModes: data.captureModes,
          geofenceAction: data.geofenceAction,
          overtimeEnabled: data.overtimeEnabled,
          overtimeThresholdMinutes: data.overtimeThresholdMinutes,
          overtimeRequiresApproval: data.overtimeRequiresApproval,
          lateMarkPolicy: data.lateMarkPolicy as any,
        },
      });
    } else {
      await this.prisma.attendancePolicyVersion.create({
        data: {
          tenantId,
          version: 1,
          name: 'Default Attendance Policy',
          description: 'Created via setup wizard',
          isActive: false, // GATED - requires policy sign-off
          graceMinutes: data.graceMinutes,
          lateMarkThresholdMinutes: data.lateMarkThresholdMinutes,
          halfDayThresholdMinutes: data.halfDayThresholdMinutes,
          fullDayThresholdMinutes: data.fullDayThresholdMinutes,
          allowedPunchWindowMinutes: data.allowedPunchWindowMinutes,
          captureModes: data.captureModes,
          geofenceAction: data.geofenceAction,
          overtimeEnabled: data.overtimeEnabled,
          overtimeThresholdMinutes: data.overtimeThresholdMinutes,
          overtimeRequiresApproval: data.overtimeRequiresApproval,
          lateMarkPolicy: data.lateMarkPolicy as any,
          schemaVersion: 1,
        },
      });
    }
  }

  private async persistLeaveStep(tenantId: string, data: WizardStep6LeaveDto) {
    await this.prisma.$transaction(async (tx) => {
      for (const lt of data.leaveTypes) {
        await tx.leaveType.upsert({
          where: { tenantId_code: { tenantId, code: lt.code } },
          update: {
            name: lt.name,
            isPaid: lt.isPaid,
            color: lt.color,
            requiresAttachment: lt.requiresAttachment,
            halfDayAllowed: lt.halfDayAllowed,
            sortOrder: lt.sortOrder,
          },
          create: {
            tenantId,
            code: lt.code,
            name: lt.name,
            isPaid: lt.isPaid,
            color: lt.color,
            requiresAttachment: lt.requiresAttachment,
            halfDayAllowed: lt.halfDayAllowed,
            sortOrder: lt.sortOrder,
          },
        });
      }
    });
  }

  private async persistInviteUsersStep(tenantId: string, data: WizardStep7InviteUsersDto) {
    // Get system roles
    const roles = await this.prisma.role.findMany({
      where: { code: { in: data.users.map(u => u.roleCode) }, tenantId: null, isSystem: true },
      select: { id: true, code: true },
    });
    const roleMap = new Map(roles.map(r => [r.code, r.id]));

    for (const user of data.users) {
      const roleId = roleMap.get(user.roleCode);
      if (!roleId) {
        this.logger.warn(`Role ${user.roleCode} not found, skipping invitation for ${user.email}`);
        continue;
      }

      // Check if user already exists
      const existingUser = await this.prisma.user.findUnique({
        where: { email: user.email.toLowerCase() },
      });

      let userId: string;
      if (existingUser) {
        userId = existingUser.id;
      } else {
        // Create user with temporary password (they'll set via invitation)
        const tempPassword = crypto.randomBytes(16).toString('hex');
        const passwordHash = await import('bcryptjs').then(m => m.default.hash(tempPassword, 12));

        const created = await this.prisma.user.create({
          data: {
            email: user.email.toLowerCase(),
            passwordHash,
            fullName: user.fullName,
            isEmailVerified: false,
          },
        });
        userId = created.id;
      }

      // Create or update membership
      const membership = await this.prisma.membership.upsert({
        where: { tenantId_userId: { tenantId, userId } },
        update: { status: 'active' },
        create: { tenantId, userId, status: 'active', joinedAt: new Date() },
      });

      // Grant role
      const scopeType = user.scopeType || 'ORGANIZATION';
      await this.prisma.membershipRoleGrant.upsert({
        where: { membershipId_roleId_scopeType_scopeId: { membershipId: membership.id, roleId, scopeType, scopeId: null } },
        update: {},
        create: { membershipId: membership.id, roleId, scopeType },
      });

      // Create invitation token (if new user)
      if (!existingUser) {
        const rawToken = crypto.randomBytes(32).toString('hex');
        const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
        await this.prisma.emailVerificationToken.create({
          data: {
            userId,
            tokenHash,
            expiresAt: new Date(Date.now() + 72 * 60 * 60 * 1000), // 72 hours
          },
        });

        // Emit outbox event for invitation email
        await this.prisma.outboxEvent.create({
          data: {
            tenantId,
            eventType: 'USER_INVITED',
            payloadJson: {
              userId,
              email: user.email,
              fullName: user.fullName,
              roleCode: user.roleCode,
              invitationToken: rawToken,
              tenantName: (await this.prisma.tenant.findUnique({ where: { id: tenantId }, select: { name: true } }))?.name,
            },
          },
        });
      }
    }
  }

  private async validateRequiredSteps(tenantId: string) {
    const missingSteps: string[] = [];

    // Check work_policy: attendance policy version exists
    const attendancePolicy = await this.prisma.attendancePolicyVersion.findFirst({
      where: { tenantId },
      select: { id: true },
    });
    if (!attendancePolicy) missingSteps.push('work_policy (attendance policy)');

    // Check leave: at least one leave type exists
    const leaveTypes = await this.prisma.leaveType.count({ where: { tenantId } });
    if (leaveTypes === 0) missingSteps.push('leave (at least one leave type)');

    if (missingSteps.length > 0) {
      throw new BadRequestException({
        code: 'SETUP_INCOMPLETE',
        message: `Cannot complete setup wizard. Missing required steps: ${missingSteps.join(', ')}`,
        missingSteps,
      });
    }
  }

  private async getStepStatus(tenantId: string) {
    const [
      hasProfile,
      hasLegalEntity,
      hasLocations,
      hasDepartments,
      hasWorkPolicy,
      hasLeaveTypes,
    ] = await Promise.all([
      this.prisma.tenant.findUnique({ where: { id: tenantId }, select: { name: true } }).then(t => !!t?.name),
      this.prisma.legalEntity.findFirst({ where: { tenantId, isDefault: true }, select: { id: true } }).then(l => !!l),
      this.prisma.location.count({ where: { tenantId } }).then(c => c > 0),
      this.prisma.department.count({ where: { tenantId } }).then(c => c > 0),
      this.prisma.attendancePolicyVersion.findFirst({ where: { tenantId }, select: { id: true } }).then(p => !!p),
      this.prisma.leaveType.count({ where: { tenantId } }).then(c => c > 0),
    ]);

    return {
      profile: hasProfile,
      legal_entity: hasLegalEntity,
      locations: hasLocations,
      departments: hasDepartments,
      work_policy: hasWorkPolicy,
      leave: hasLeaveTypes,
      invite_users: true, // Optional step
    };
  }

  private getCurrentStep(stepStatus: Record<string, boolean>): string {
    for (const step of WIZARD_STEPS) {
      if (!stepStatus[step]) return step;
    }
    return 'completed';
  }

  private getNextStep(current?: string): string | null {
    if (!current) return WIZARD_STEPS[0];
    const idx = WIZARD_STEPS.indexOf(current);
    return idx >= 0 && idx < WIZARD_STEPS.length - 1 ? WIZARD_STEPS[idx + 1] : null;
  }
}
