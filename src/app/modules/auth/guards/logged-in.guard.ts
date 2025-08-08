import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SUPABASE } from '@shared/providers/supabase.provider';

export const loggedInGuard: CanActivateFn = async () => {
  const auth = inject(SUPABASE);

  const {
    data: { session }
  } = await auth.auth.getSession();

  return !!session;
};
