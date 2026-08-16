import { Component } from '@angular/core';
import { RecentOrders } from '../recent-orders/recent-orders';
import { RecentUsers } from '../recent-users/recent-users';
import { DashboardCard } from '../dashboard-card/dashboard-card';
import { Charts } from '../charts/charts';

@Component({
  selector: 'app-dashboard-home',
  imports: [RecentOrders, RecentUsers, DashboardCard, Charts],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.scss',
})
export class DashboardHome {}
