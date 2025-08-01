import { Routes } from '@angular/router';
import { guestGuard } from '@auth/guards/guest.guard';

export const appRoutes: Routes = [
  { path: '', loadComponent: async () => import('@pages/home/home-page.component') },
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: async () => import('@auth/features/login-page/login-page.component')
  }
];
