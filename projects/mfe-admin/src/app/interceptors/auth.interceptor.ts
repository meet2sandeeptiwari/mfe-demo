import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import {
  catchError,
  throwError
} from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');

  console.log('🔥 AUTH INTERCEPTOR');
  console.log('URL:', req.url);
  console.log('TOKEN EXISTS:', !!token);

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('🔥 Authorization header added');
  }

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      if (error.status === 401) {

        console.log('🔥 401 Unauthorized');

        localStorage.removeItem('token');

        window.location.href = '/login';
      }

      if (error.status === 403) {

        console.log('🔥 403 Forbidden');
        console.log(
          'You do not have permission to access this resource'
        );
      }

      return throwError(() => error);
    })

  );
};