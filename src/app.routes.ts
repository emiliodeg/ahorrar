import { Routes } from '@angular/router';
import { guestGuard } from '@auth/guards/guest.guard';
import { loggedInGuard } from '@auth/guards/logged-in.guard';

export const appRoutes: Routes = [
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: async () => import('@auth/features/login-page/login-page.component')
  },
  { path: 'dashboard', canActivate: [loggedInGuard], loadComponent: async () => import('@dashboard/features/main-page/main-page.component') },
  { path: '', loadComponent: async () => import('@pages/home/home-page.component') }
];
