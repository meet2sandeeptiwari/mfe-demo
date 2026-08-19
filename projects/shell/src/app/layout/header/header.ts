import { Component, inject } from '@angular/core';
import { ShellAuthService } from '../../services/shell-auth-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  auth = inject(ShellAuthService);

  logout() {
    this.auth.logout();
  }
}