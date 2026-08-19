import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const token = localStorage.getItem('token');

  console.log('🔥 GUARD TOKEN:', token);

  if (!token) {
    console.log('❌ NO TOKEN');
    return router.createUrlTree(['/login']);
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));

    console.log('🔥 JWT PAYLOAD:', payload);

    const isExpired = payload.exp * 1000 < Date.now();

    console.log('🔥 IS EXPIRED:', isExpired);

    if (isExpired) {
      console.log('❌ TOKEN EXPIRED');

      localStorage.removeItem('token');

      return router.createUrlTree(['/login']);
    }

    console.log('✅ GUARD PASSED');

    return true;
  } catch (error) {
    console.log('❌ JWT DECODE ERROR:', error);

    localStorage.removeItem('token');

    return router.createUrlTree(['/login']);
  }
};
