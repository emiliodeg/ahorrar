import { provideServerRendering, withRoutes } from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from '../app.config';
import { serverRoutes } from '../app.server.routes';
import { provideRouter } from '@angular/router';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes))]
};

export const config = mergeApplicationConfig(
  {
    ...appConfig,
    providers: appConfig.providers.filter((p) => !(p instanceof provideRouter))
  },
  serverConfig
);
