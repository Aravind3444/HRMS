const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getToken() {
  const outbox = await prisma.outboxEvent.findFirst({
    where: { eventType: 'EMAIL_VERIFICATION' },
    orderBy: { createdAt: 'desc' }
  });
  console.log(outbox?.payloadJson?.verificationToken);
  await prisma.$disconnect();
}

getToken().catch(console.error);