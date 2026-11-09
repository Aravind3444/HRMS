const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function cleanDb() {
  console.log('Cleaning up database...');
  
  // Delete in correct order (respecting foreign keys)
  await prisma.notificationDelivery.deleteMany();
  await prisma.outboxEvent.deleteMany();
  await prisma.auditEvent.deleteMany();
  await prisma.emailVerificationToken.deleteMany();
  await prisma.userSession.deleteMany();
  await prisma.membershipRoleGrant.deleteMany();
  await prisma.membership.deleteMany();
  await prisma.tenantSettings.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.legalEntity.deleteMany();
  await prisma.tenant.deleteMany();
  await prisma.user.deleteMany();
  await prisma.planVersion.deleteMany();
  await prisma.plan.deleteMany();
  await prisma.rolePermission.deleteMany();
  await prisma.role.deleteMany();
  await prisma.permission.deleteMany();
  
  console.log('Database cleaned!');
  await prisma.$disconnect();
}

cleanDb().catch(console.error);