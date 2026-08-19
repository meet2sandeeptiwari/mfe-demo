import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/login.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  private http = inject(HttpClient);

  // login(request: LoginRequest) {
  //   return this.http.post<LoginResponse>('http://localhost:3000/api/auth/login', request);
  // }

  login(request: LoginRequest) {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/api/auth/login`, request);
  }
}
