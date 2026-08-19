import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { DashboardHome } from './dashboard/dashboard-home/dashboard-home';

import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';



export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe-login',
        exposedModule: './Routes',
      }).then((m) => m.routes),
  },

  {
    path: '',
    component: DashboardLayout,
    canActivate: [authGuard],

    children: [
      {
        path: '',
        component: DashboardHome,
        pathMatch: 'full',
      },

      {
        path: 'products',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'mfe-product',
            exposedModule: './Routes',
          }).then((m) => m.routes),
      },

      {
        path: 'users',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'mfe-user',
            exposedModule: './Routes',
          }).then((m) => m.routes),
      },

      {
        path: 'orders',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'mfe-order',
            exposedModule: './Routes',
          }).then((m) => m.routes),
      },

      {
        path: 'admin',

        // Authentication + Authorization
        canActivate: [roleGuard],

        data: {
          roles: ['admin'],
        },

        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'mfe-admin',
            exposedModule: './Routes',
          }).then((m) => m.routes),
      },
    ],
  },
];