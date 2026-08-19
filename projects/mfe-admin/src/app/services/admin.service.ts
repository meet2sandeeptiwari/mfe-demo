import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface AdminDashboardResponse {
  success: boolean;
  message: string;
  data: {
    totalUsers: number;
    totalProducts: number;
    totalOrders: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  private http = inject(HttpClient);

  getAdminWorks() {
    return this.http.get<AdminDashboardResponse>(
      `${environment.apiUrl}/api/admin/works`
    );
  }
}