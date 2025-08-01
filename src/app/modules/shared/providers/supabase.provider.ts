import { InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Environment, ENVIRONMENT } from '@env';
import { Database } from './database.types';

export const SUPABASE = new InjectionToken<ReturnType<typeof createClient<Database>>>('SUPABASE');

export const provideSupabase = () =>
  makeEnvironmentProviders([
    {
      provide: SUPABASE,
      useFactory: (env: Environment) => createClient<Database>(env.supabase.apiUrl, env.supabase.key),
      deps: [ENVIRONMENT]
    }
  ]);
