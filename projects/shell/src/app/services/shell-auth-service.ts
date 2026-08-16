import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ShellAuthService {
  currentUser = signal<User | null>(null);

  constructor() {
    // const user = localStorage.getItem('user');

    // if (user) {
    //   this.currentUser.set(JSON.parse(user));
    // }
  }
}
