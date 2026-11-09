const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getToken() {
  const token = await prisma.emailVerificationToken.findFirst({
    where: { userId: '32b8c434-373c-4a02-92ac-a19ca38f2377' },
    orderBy: { createdAt: 'desc' }
  });
  console.log('Token:', token);
  await prisma.$disconnect();
}

getToken().catch(console.error);