import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from './auth.guard';

export function Auth() {
  return applyDecorators(UseGuards(AuthenticatedGuard));
}
