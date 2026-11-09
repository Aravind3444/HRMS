# ADR-003: Cookie-Based Authentication with Token Rotation

## Context
Security best practices require mitigating token theft and XSS vulnerabilities on the web client.

## Decision
Enforce HttpOnly, SameSite=Lax, Secure cookies for access tokens (15 mins) and refresh tokens (30 days) with automatic reuse-detection family revocation.

## Status
Accepted
