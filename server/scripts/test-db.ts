const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    const plans = await prisma.plan.findMany({ where: { isActive: true } });
    console.log('Plans:', plans.length);
    const starter = await prisma.plan.findUnique({ 
      where: { code: 'starter' }, 
      include: { versions: { where: { isPublished: true }, orderBy: { version: 'desc' }, take: 1 } } 
    });
    console.log('Starter plan:', starter);
    const oaRole = await prisma.role.findFirst({ where: { code: 'OA', tenantId: null } });
    console.log('OA Role:', oaRole);
    await prisma.$disconnect();
  } catch (e) {
    console.error('Error:', e);
  }
}

test();