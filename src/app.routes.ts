import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';

export const appRoutes: Routes = [
  { path: '', component: Landing },
  // {
  //   path: '',
  //   component: AppLayout,
  //   loadChildren: () => import('./app/pages/pages.routes')
  //   // children: [
  //   //   { path: '', component: Dashboard },
  //   //   { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
  //   //   { path: 'documentation', component: Documentation }
  //   // ]
  // },
  { path: '', loadChildren: () => import('./app/modules/auth/features/auth.routes') },
  { path: '404', component: Notfound },
  { path: '**', redirectTo: '/notfound' }
];
