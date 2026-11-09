const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const oaRole = await prisma.role.findFirst({
    where: { code: 'OA', tenantId: null },
    include: { rolePermissions: { include: { permission: true } } }
  });
  console.log('OA Role permissions:');
  oaRole.rolePermissions.forEach(rp => console.log(`  - ${rp.permission.code}`));
  
  // Check if role:create exists
  const roleCreate = await prisma.permission.findUnique({ where: { code: 'role:create' } });
  console.log('\nrole:create permission exists:', !!roleCreate);
  
  await prisma.$disconnect();
}

check().catch(console.error);