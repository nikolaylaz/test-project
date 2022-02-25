import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import { COOKIE_KEY } from './auth.constants';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return !!request['signedCookies'][COOKIE_KEY];
  }
}
