import { Component, inject } from '@angular/core';
import { ShellAuthService } from '../../services/shell-auth-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
   auth = inject(ShellAuthService);
}

