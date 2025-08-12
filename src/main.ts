import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';

// eslint-disable-next-line no-console
bootstrapApplication(AppComponent, appConfig).catch(console.error);
