import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/login.model';
import { empty } from 'rxjs';
import { USERS } from '../mock-data/users';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  private http = inject(HttpClient);

  login(request: LoginRequest) {
    return this.http.post<LoginResponse>('http://localhost:3000/api/auth/login', request);
  }
}
