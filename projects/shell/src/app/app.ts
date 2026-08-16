import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellAuthService } from './services/shell-auth-service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('shell');
  private auth = inject(ShellAuthService);

  constructor() {
    window.addEventListener('login-success', (event) => {
      const customEvent = event as CustomEvent<User>;

      this.auth.currentUser.set(customEvent.detail);
    });
  }
}
