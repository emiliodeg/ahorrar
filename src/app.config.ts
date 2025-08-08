import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEnvironment } from '@env';
import { provideMaterialOptions } from '@shared/providers/material-options.provider';
import { provideSettings } from '@shared/providers/settings.provider';
import { provideSupabase } from '@shared/providers/supabase.provider';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideClientHydration(withEventReplay()),
    provideEnvironment(),
    provideSupabase(),
    provideSettings(),
    provideZonelessChangeDetection(),
    provideMaterialOptions()
  ]
};
