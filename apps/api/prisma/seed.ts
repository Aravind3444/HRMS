import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

// Explicitly type prisma client so IDE language servers pick up dynamically generated models
const prisma: any = new PrismaClient();

const STANDARD_PERMISSIONS = [
  // Tenant & Organization
  { code: 'tenant:settings:read', module: 'TENANT', description: 'View organization configuration and settings' },
  { code: 'tenant:settings:update', module: 'TENANT', description: 'Update organization settings' },
  { code: 'org:legal_entity:read', module: 'ORG', description: 'View company legal entities' },
  { code: 'org:legal_entity:write', module: 'ORG', description: 'Create and modify company legal entities' },
  { code: 'org:location:read', module: 'ORG', description: 'View locations and branches' },
  { code: 'org:location:write', module: 'ORG', description: 'Create and update locations and branches' },
  { code: 'org:department:read', module: 'ORG', description: 'View department structure' },
  { code: 'org:department:write', module: 'ORG', description: 'Modify department hierarchy' },

  // User & RBAC Management
  { code: 'user:read', module: 'ACCESS', description: 'View users and members' },
  { code: 'user:invite', module: 'ACCESS', description: 'Invite users to tenant' },
  { code: 'role:read', module: 'ACCESS', description: 'View roles and permissions' },
  { code: 'role:create', module: 'ACCESS', description: 'Create custom roles' },
  { code: 'role:update', module: 'ACCESS', description: 'Update custom roles' },
  { code: 'role:delete', module: 'ACCESS', description: 'Delete custom roles' },
  { code: 'role:grant', module: 'ACCESS', description: 'Assign roles to members' },

  // Employee Lifecycle
  { code: 'employee:read', module: 'EMPLOYEE', description: 'View employee records' },
  { code: 'employee:write', module: 'EMPLOYEE', description: 'Create and update employee records' },
  { code: 'employee:profile:self', module: 'EMPLOYEE', description: 'View and update own profile' },

  // Attendance & Leave
  { code: 'attendance:punch:self', module: 'ATTENDANCE', description: 'Clock in and out' },
  { code: 'attendance:team:read', module: 'ATTENDANCE', description: 'View team attendance' },
  { code: 'leave:apply:self', module: 'LEAVE', description: 'Apply for leaves' },
  { code: 'leave:approve:team', module: 'LEAVE', description: 'Approve team leave requests' },

  // Audit
  { code: 'audit:read', module: 'AUDIT', description: 'Inspect audit trail logs' },
];

const SYSTEM_ROLES = [
  {
    code: 'OA',
    name: 'Organization Admin',
    description: 'Full administrative ownership over tenant configuration, users and settings',
    permissions: STANDARD_PERMISSIONS.map((p) => p.code),
  },
  {
    code: 'HR',
    name: 'HR Admin',
    description: 'Manages employees, organization masters, attendance and leaves',
    permissions: [
      'org:legal_entity:read',
      'org:location:read',
      'org:department:read',
      'user:read',
      'user:invite',
      'employee:read',
      'employee:write',
      'employee:profile:self',
      'attendance:punch:self',
      'attendance:team:read',
      'leave:apply:self',
      'leave:approve:team',
    ],
  },
  {
    code: 'MGR',
    name: 'Line Manager',
    description: 'Manages direct team approvals and views team attendance',
    permissions: [
      'employee:profile:self',
      'attendance:punch:self',
      'attendance:team:read',
      'leave:apply:self',
      'leave:approve:team',
    ],
  },
  {
    code: 'EMP',
    name: 'Employee',
    description: 'Self-service access for personal profile, punches, and leaves',
    permissions: [
      'employee:profile:self',
      'attendance:punch:self',
      'leave:apply:self',
    ],
  },
];

async function main() {
  console.log('🌱 Seeding Permissions...');
  for (const perm of STANDARD_PERMISSIONS) {
    await prisma.permission.upsert({
      where: { code: perm.code },
      update: { description: perm.description, module: perm.module },
      create: perm,
    });
  }

  console.log('🌱 Seeding System Roles...');
  for (const roleDef of SYSTEM_ROLES) {
    // System roles have tenantId = null
    let role = await prisma.role.findFirst({
      where: { code: roleDef.code, tenantId: null },
    });

    if (!role) {
      role = await prisma.role.create({
        data: {
          code: roleDef.code,
          name: roleDef.name,
          description: roleDef.description,
          isSystem: true,
          tenantId: null,
        },
      });
    }

    // Link permissions
    for (const permCode of roleDef.permissions) {
      const permission = await prisma.permission.findUnique({
        where: { code: permCode },
      });
      if (permission) {
        await prisma.rolePermission.upsert({
          where: {
            roleId_permissionId: {
              roleId: role.id,
              permissionId: permission.id,
            },
          },
          update: {},
          create: {
            roleId: role.id,
            permissionId: permission.id,
          },
        });
      }
    }
  }

  // 3. Seed Default Plans & Plan Versions (TEN-009)
  console.log('Seeding default subscription plans...');
  const DEFAULT_PLANS = [
    {
      code: 'starter',
      name: 'Starter Plan',
      description: 'Core HR foundation: Organization, Employee Directory, ESS, Basic Attendance & Leave',
      basePrice: 0,
      perSeatPrice: 50,
      seatLimitDefault: 50,
      modulesIncluded: ['M01', 'M02', 'M03', 'M04', 'M05', 'M06', 'M10', 'M12', 'M23', 'M24', 'M25'],
    },
    {
      code: 'standard',
      name: 'Standard Growth Plan',
      description: 'Advanced Attendance, Native Payroll, Shifts, Expenses, Performance & Assets',
      basePrice: 2000,
      perSeatPrice: 85,
      seatLimitDefault: 200,
      modulesIncluded: [
        'M01', 'M02', 'M03', 'M04', 'M05', 'M06', 'M08', 'M09', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M17', 'M19', 'M21', 'M22', 'M23', 'M24', 'M25', 'M28', 'M29'
      ],
    },
    {
      code: 'enterprise',
      name: 'Enterprise Scale Plan',
      description: 'All 31 modules including ATS Recruitment, LMS, Helpdesk, Travel, Finance Core & AI HR Assistant',
      basePrice: 5000,
      perSeatPrice: 120,
      seatLimitDefault: 1000,
      modulesIncluded: Array.from({ length: 31 }, (_, i) => {
        const num = (i + 1).toString().padStart(2, '0');
        return `M${num}`;
      }),
    },
  ];

  for (const planDef of DEFAULT_PLANS) {
    const plan = await prisma.plan.upsert({
      where: { code: planDef.code },
      update: { name: planDef.name, description: planDef.description },
      create: {
        code: planDef.code,
        name: planDef.name,
        description: planDef.description,
        isActive: true,
      },
    });

    await prisma.planVersion.upsert({
      where: {
        planId_version: {
          planId: plan.id,
          version: 1,
        },
      },
      update: {
        basePrice: planDef.basePrice,
        perSeatPrice: planDef.perSeatPrice,
        seatLimitDefault: planDef.seatLimitDefault,
        modulesIncluded: planDef.modulesIncluded,
      },
      create: {
        planId: plan.id,
        version: 1,
        basePrice: planDef.basePrice,
        perSeatPrice: planDef.perSeatPrice,
        currency: 'INR',
        seatLimitDefault: planDef.seatLimitDefault,
        modulesIncluded: planDef.modulesIncluded,
        isPublished: true,
      },
    });
  }

  // 4. Seed Default Super Admin Account (CF-04 / TEN-003)
  console.log('Seeding default platform Super Admin...');
  const superAdminPasswordHash = await bcrypt.hash('SuperAdmin@123', 12);
  await prisma.user.upsert({
    where: { email: 'superadmin@hrms.internal' },
    update: { isPlatformAdmin: true },
    create: {
      email: 'superadmin@hrms.internal',
      passwordHash: superAdminPasswordHash,
      fullName: 'System Super Admin',
      isPlatformAdmin: true,
      isEmailVerified: true,
    },
  });

  console.log('✅ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
