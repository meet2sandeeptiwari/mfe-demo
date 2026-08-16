import { Component, inject } from '@angular/core';
import { ShellAuthService } from '../../services/shell-auth-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
   auth = inject(ShellAuthService);
}

