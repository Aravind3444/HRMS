# ADR-002: NestJS Modular Monolith Architecture

## Context
High feature complexity with 31 distinct business modules requires decoupled domain cohesion without premature microservice overhead.

## Decision
Structure `apps/api` as a Modular Monolith where each module has its own directory, DTOs, services, and controllers with clear public export interfaces.

## Status
Accepted
