"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const STANDARD_PERMISSIONS = [
    { code: 'tenant:settings:read', module: 'TENANT', description: 'View organization configuration and settings' },
    { code: 'tenant:settings:update', module: 'TENANT', description: 'Update organization settings' },
    { code: 'org:legal_entity:read', module: 'ORG', description: 'View company legal entities' },
    { code: 'org:legal_entity:write', module: 'ORG', description: 'Create and modify company legal entities' },
    { code: 'org:location:read', module: 'ORG', description: 'View locations and branches' },
    { code: 'org:location:write', module: 'ORG', description: 'Create and update locations and branches' },
    { code: 'org:department:read', module: 'ORG', description: 'View department structure' },
    { code: 'org:department:write', module: 'ORG', description: 'Modify department hierarchy' },
    { code: 'user:read', module: 'ACCESS', description: 'View users and members' },
    { code: 'user:invite', module: 'ACCESS', description: 'Invite users to tenant' },
    { code: 'role:read', module: 'ACCESS', description: 'View roles and permissions' },
    { code: 'role:grant', module: 'ACCESS', description: 'Assign roles to members' },
    { code: 'employee:read', module: 'EMPLOYEE', description: 'View employee records' },
    { code: 'employee:write', module: 'EMPLOYEE', description: 'Create and update employee records' },
    { code: 'employee:profile:self', module: 'EMPLOYEE', description: 'View and update own profile' },
    { code: 'attendance:punch:self', module: 'ATTENDANCE', description: 'Clock in and out' },
    { code: 'attendance:team:read', module: 'ATTENDANCE', description: 'View team attendance' },
    { code: 'leave:apply:self', module: 'LEAVE', description: 'Apply for leaves' },
    { code: 'leave:approve:team', module: 'LEAVE', description: 'Approve team leave requests' },
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
//# sourceMappingURL=seed.js.map