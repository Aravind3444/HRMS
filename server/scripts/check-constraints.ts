import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Check indexes for legal_entities
  const leIndexes = await prisma.$queryRaw`
    SELECT indexname, indexdef
    FROM pg_indexes
    WHERE tablename = 'legal_entities'
    AND schemaname = 'public'
  `;
  console.log('Legal entities indexes:', leIndexes);

  // Check indexes for roles
  const rIndexes = await prisma.$queryRaw`
    SELECT indexname, indexdef
    FROM pg_indexes
    WHERE tablename = 'roles'
    AND schemaname = 'public'
  `;
  console.log('Roles indexes:', rIndexes);

  // Check indexes for leave_types
  const ltIndexes = await prisma.$queryRaw`
    SELECT indexname, indexdef
    FROM pg_indexes
    WHERE tablename = 'leave_types'
    AND schemaname = 'public'
  `;
  console.log('Leave types indexes:', ltIndexes);

  // Check indexes for feature_flags
  const ffIndexes = await prisma.$queryRaw`
    SELECT indexname, indexdef
    FROM pg_indexes
    WHERE tablename = 'feature_flags'
    AND schemaname = 'public'
  `;
  console.log('Feature flags indexes:', ffIndexes);

  // Check indexes for memberships
  const mIndexes = await prisma.$queryRaw`
    SELECT indexname, indexdef
    FROM pg_indexes
    WHERE tablename = 'memberships'
    AND schemaname = 'public'
  `;
  console.log('Memberships indexes:', mIndexes);

  await prisma.$disconnect();
}

main().catch(console.error);