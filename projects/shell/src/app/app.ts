import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellAuthService } from './services/shell-auth-service';

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
    window.addEventListener('login-success', (event: any) => {
      this.auth.currentUser.set(event.detail);
    });
  }
}
