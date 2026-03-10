import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

const AUDIT_METHODS = new Set(['POST', 'PATCH', 'PUT', 'DELETE']);

const AUDIT_PATHS = [
  '/auth/login',
  '/auth/setup',
  '/auth/change-password',
  '/leads/export/csv',
  '/leads/bulk/',
  '/beat-my-price/export/csv',
  '/beat-my-price/bulk/',
  '/settings/',
  '/agents',
  '/deals',
];

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  private readonly logger = new Logger('Audit');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = context.switchToHttp().getRequest();
    const method: string = req.method;

    if (!AUDIT_METHODS.has(method)) {
      return next.handle();
    }

    const path: string = req.url?.split('?')[0] || '';
    const shouldAudit = AUDIT_PATHS.some((p) => path.includes(p));
    if (!shouldAudit) {
      return next.handle();
    }

    const userId = req.user?.id || 'anonymous';
    const userEmail = req.user?.email || '';
    const start = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          this.logger.log(
            `${method} ${path} | user=${userId} (${userEmail}) | ${Date.now() - start}ms | OK`,
          );
        },
        error: (err) => {
          this.logger.warn(
            `${method} ${path} | user=${userId} (${userEmail}) | ${Date.now() - start}ms | ERROR: ${err.message}`,
          );
        },
      }),
    );
  }
}
