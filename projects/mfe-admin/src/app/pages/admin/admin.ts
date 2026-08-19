import { Component, inject, OnInit, signal } from '@angular/core';
import { AdminService } from '../../services/admin.service';

export interface AdminDashboard {
  message: string;
  data: {
    totalUsers: number;
    totalProducts: number;
    totalOrders: number;
  };
}

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {

  private adminService = inject(AdminService);

  dashboard = signal<AdminDashboard | null>(null);

  ngOnInit() {
    this.adminService.getAdminWorks().subscribe({
      next: (response) => {
        console.log('Admin API Response', response);
        this.dashboard.set(response);
      },
      error: (error) => {
        console.error('Admin API error', error);
      },
    });
  }
}