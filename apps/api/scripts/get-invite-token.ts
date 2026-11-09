const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getToken() {
  const outbox = await prisma.outboxEvent.findFirst({
    where: { eventType: 'USER_INVITED' },
    orderBy: { createdAt: 'desc' }
  });
  const url = outbox?.payloadJson?.invitationUrl;
  // Extract token from URL: .../accept-invitation?token=xxx
  const token = url?.split('token=')[1];
  console.log('Raw invitation token:', token);
  
  await prisma.$disconnect();
}

getToken().catch(console.error);