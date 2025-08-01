import { InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { Environment } from './environment.model';
import { environment } from './environment';

export * from './environment.model';

export const ENVIRONMENT = new InjectionToken<Environment>('environment');

export const provideEnvironment = () =>
  makeEnvironmentProviders([
    {
      provide: ENVIRONMENT,
      useValue: environment
    }
  ]);
