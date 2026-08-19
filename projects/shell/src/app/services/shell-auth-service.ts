import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ShellAuthService {

  currentUser = signal<User | null>(null);

  constructor(private router: Router) {
    this.loadUser();
  }

  loadUser() {
    const user = localStorage.getItem('user');

    if (user) {
      this.currentUser.set(JSON.parse(user));
    }
  }

  setUser(user: User) {
    this.currentUser.set(user);
  }

  isAdmin(): boolean {
    return this.currentUser()?.role === 'admin';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.currentUser.set(null);

    this.router.navigate(['/login']);
  }
}