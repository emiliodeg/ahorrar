import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

export const guestGuard: CanActivateFn = () => {
  const auth = inject(AuthService);

  return !auth.hasUser();
};
