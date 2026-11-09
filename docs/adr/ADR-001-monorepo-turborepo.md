# ADR-001: Monorepo Architecture with Turborepo & pnpm

## Context
The HRMS system consists of an API monolith, web SPA, shared domain types/DTOs, design kit, and workers.

## Decision
Adopt a pnpm workspace monorepo orchestrated with Turborepo for strict boundary enforcement, lightning-fast incremental builds, and unified versioning.

## Status
Accepted
