import { Component, inject, signal } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  private adminService = inject(AdminService);

  dashboard = signal<any>(null);

  ngOnInit() {
    this.adminService.getAdminWorks().subscribe({
      next: (response) => {
        console.log('Admin Api Response', response);
        this.dashboard.set(response);
      },
      error: (error) => {
        console.error('Admin Api error', error);
      },
    });
  }
}
