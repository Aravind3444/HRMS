const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getToken() {
  const token = await prisma.emailVerificationToken.findFirst({
    where: { userId: '40687d22-ce08-4cf3-b531-db2f5c1f9bcf' },
    orderBy: { createdAt: 'desc' }
  });
  console.log('Verification Token:', token ? token.tokenHash.substring(0, 20) + '...' : 'NOT FOUND');
  console.log('Token used:', token?.usedAt);
  console.log('Token expires:', token?.expiresAt);
  
  // Check notification deliveries
  const deliveries = await prisma.notificationDelivery.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5
  });
  console.log('\nDeliveries count:', deliveries.length);
  for (const d of deliveries) {
    console.log(`  - ID: ${d.id}, Status: ${d.status}, Template: ${d.templateCode}, Error: ${d.errorMessage?.substring(0, 80) || 'none'}`);
  }
  
  // Check outbox events
  const outbox = await prisma.outboxEvent.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5
  });
  console.log('\nOutbox count:', outbox.length);
  for (const o of outbox) {
    console.log(`  - ID: ${o.id}, Type: ${o.eventType}, Status: ${o.status}, Retry: ${o.retryCount}`);
  }
  
  await prisma.$disconnect();
}

getToken().catch(console.error);