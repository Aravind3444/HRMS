import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { randomUUID } from 'crypto';

@Injectable()
export class CorrelationIdInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const correlationId = (request.headers['x-correlation-id'] as string) || randomUUID();
    request.correlationId = correlationId;

    const response = context.switchToHttp().getResponse();
    response.setHeader('X-Correlation-ID', correlationId);

    return next.handle().pipe(
      tap(() => {
        /* correlation id already set on response header */
      }),
    );
  }
}
