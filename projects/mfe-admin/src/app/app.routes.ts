import { Routes } from '@angular/router';
import { Admin } from './pages/admin/admin';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    component: Admin,

    canActivate: [authGuard, roleGuard],

    data: {
      roles: ['admin'],
    },
  },
];