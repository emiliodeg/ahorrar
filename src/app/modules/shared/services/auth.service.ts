import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SUPABASE } from '@shared/providers/supabase.provider';
import { Session, SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #supabase = inject(SUPABASE);

  #user = toSignal(from(this.#supabase.auth.getUser()).pipe(map(({ data }) => data)));
  #session = signal<null | Session>(null);

  readonly hasUser = computed(() => this.#session() != null);
  readonly getUser = computed(() => this.#user()?.user);

  constructor() {
    this.#supabase.auth.onAuthStateChange((_event, session) => this.#session.set(session));
  }

  login(credentials: SignInWithPasswordCredentials) {
    return from(this.#supabase.auth.signInWithPassword(credentials));
  }

  signOut() {
    return from(this.#supabase.auth.signOut());
  }
}
