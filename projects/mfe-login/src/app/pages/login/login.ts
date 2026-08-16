import { Component, inject, signal } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth-service';
import { LoginRequest, LoginResponse } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = signal('');
  password = signal('');

  private authService = inject(LoginAuthService);
  private router = inject(Router);

  login(event: Event) {
    event.preventDefault();

    const request: LoginRequest = {
      email: this.email(),
      password: this.password(),
    };

    this.authService.login(request).subscribe({
      next: (response: LoginResponse) => {
        console.log('Backend Response:', response);

        if (response.message.success) {
          console.log('Login Success');

          localStorage.setItem('user', JSON.stringify(response));

          const role = response.message.user.role;

          if (role === 'admin') {
            this.router.navigate(['/admin']);
          }

          if (role === 'user') {
            this.router.navigate(['/users']);
          }

          if (role === 'order') {
            this.router.navigate(['/orders']);
          }

          if (role === 'product') {
            this.router.navigate(['/products']);
          }

          window.dispatchEvent(
            new CustomEvent('login-success', {
              detail: response,
            }),
          );
        } else {
          console.log('Invalid Credentials');
        }
      },

      error: (error) => {
        console.error('Login API Error:', error);
      },
    });
  }
}