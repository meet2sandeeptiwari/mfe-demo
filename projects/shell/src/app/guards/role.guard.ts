import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route) => {

  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (!token) {
    return router.createUrlTree(['/login']);
  }

  try {

    const payload = JSON.parse(
      atob(token.split('.')[1])
    );

    const userRole = payload.role;

    const allowedRoles =
      route.data['roles'] as string[];

    console.log('🔥 USER ROLE:', userRole);
    console.log('🔥 ALLOWED ROLES:', allowedRoles);

    if (allowedRoles.includes(userRole)) {

      console.log('✅ ROLE AUTHORIZED');

      return true;
    }

    console.log('❌ ROLE NOT AUTHORIZED');

    return router.createUrlTree(['/']);

  } catch {

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return router.createUrlTree(['/login']);
  }
};