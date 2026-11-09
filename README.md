# Enterprise Indian HRMS Modular Monolith

A multi-tenant, India-first Enterprise Human Resource Management System engineered with NestJS, React, PostgreSQL/Prisma, and Redis/BullMQ.

## 🏗️ Architecture Overview

- **Monorepo Manager**: Turborepo + pnpm
- **Backend (`apps/api`)**: NestJS Modular Monolith containing 31 cohesive business domains
- **Frontend (`apps/web`)**: React 18 + Vite + TanStack Query + Zustand + Tailwind CSS
- **Shared Packages (`packages/*`)**: Shared TS types, DTO contracts, UI primitives, and unified configs
- **Infra (`infra/`)**: Docker Compose for local development; Terraform modular definitions for AWS (ap-south-1)

## 🚀 Quickstart (Local Development)

### Prerequisites
- Node.js >= 20.x
- pnpm >= 9.x
- Docker & Docker Compose

### Step 1: Install Dependencies
```bash
pnpm install
```

### Step 2: Spin Up Infrastructure
```bash
docker-compose up -d
```
Services started:
- PostgreSQL 16 on port `5432`
- Redis 7 on port `6379`
- MinIO (S3 mock) on port `9000` (Console: `9001`)
- MailHog (SMTP mock) on port `1025` (Web UI: `8025`)

### Step 3: Run Database Migrations & Seeds
```bash
pnpm --filter @hrms/api db:generate
pnpm --filter @hrms/api db:migrate:dev
pnpm --filter @hrms/api db:seed
```

### Step 4: Start Development Servers
```bash
pnpm dev
```
- API Server: `http://localhost:4000/api/v1`
- Swagger Docs: `http://localhost:4000/api/docs`
- Web Dashboard: `http://localhost:5173`
