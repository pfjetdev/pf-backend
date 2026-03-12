import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

const ALLOWED_ORIGINS = [
  'https://priorityflyers.com',
  'https://www.priorityflyers.com',
  'https://pfbusiness.vercel.app',
];

/**
 * Validates the Origin header on state-changing requests (POST/PATCH/PUT/DELETE)
 * to prevent CSRF attacks. Skipped in development.
 */
@Injectable()
export class OriginGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    if (process.env.NODE_ENV !== 'production') return true;

    const request = context.switchToHttp().getRequest();
    const method = request.method?.toUpperCase();

    // Only check state-changing methods
    if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
      return true;
    }

    const origin = request.headers['origin'];
    if (!origin) {
      // Allow server-to-server only if request has valid JWT (authenticated)
      // Otherwise reject — browsers always send Origin on cross-origin requests
      const hasAuth = !!request.headers['authorization'] || !!request.cookies?.token;
      if (hasAuth) return true;
      throw new ForbiddenException('Origin header required');
    }

    if (ALLOWED_ORIGINS.includes(origin)) {
      return true;
    }

    throw new ForbiddenException('Request origin not allowed');
  }
}
