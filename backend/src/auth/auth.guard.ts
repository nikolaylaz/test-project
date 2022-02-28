import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import { AUTH_HEADER } from './auth.constants';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return !!request.headers[AUTH_HEADER.toLocaleLowerCase()];
  }
}
