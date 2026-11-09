import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/** Always resolves tenant_id from the session — NEVER from request body (GLOB-001) */
export const CurrentTenant = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.tenantId as string | undefined;
  },
);
