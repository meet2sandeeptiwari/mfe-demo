import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const token = localStorage.getItem('token');

  console.log('🔥 SHELL AUTH GUARD TOKEN:', token);

  if (!token) {
    console.log('❌ NO TOKEN');

    return router.createUrlTree(['/login']);
  }

  try {

    const payload = JSON.parse(
      atob(token.split('.')[1])
    );

    console.log('🔥 JWT PAYLOAD:', payload);

    const isExpired =
      payload.exp * 1000 < Date.now();

    console.log('🔥 IS EXPIRED:', isExpired);

    if (isExpired) {

      console.log('❌ TOKEN EXPIRED');

      localStorage.removeItem('token');
      localStorage.removeItem('user');

      return router.createUrlTree(['/login']);
    }

    console.log('✅ SHELL AUTH GUARD PASSED');

    return true;

  } catch (error) {

    console.log('❌ JWT DECODE ERROR:', error);

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return router.createUrlTree(['/login']);
  }
};