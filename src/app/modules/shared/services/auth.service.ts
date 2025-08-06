import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SUPABASE } from '@shared/providers/supabase.provider';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #supabase = inject(SUPABASE);

  #user = toSignal(from(this.#supabase.auth.getUser()).pipe(map(({ data }) => data)));
  #session = toSignal(from(this.#supabase.auth.getSession()).pipe(map(({ data }) => data)));

  readonly hasUser = computed(() => this.#session()?.session != null);
  readonly getUser = computed(() => this.#user()?.user);

  login(credentials: SignInWithPasswordCredentials) {
    return from(this.#supabase.auth.signInWithPassword(credentials));
  }

  signOut() {
    return from(this.#supabase.auth.signOut());
  }
}
