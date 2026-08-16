import { Component, signal } from '@angular/core';
import { MenuItem } from '../../models/menu.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  menuList = signal<MenuItem[]>([]);

  menuItems = signal<MenuItem[]>([
    {
      id: 1,
      title: 'Products',
      role: ['admin', 'user'],
      icon: '📦',
      route: '/products'
    },
    {
      id: 2,
      title: 'Users',
      role: ['admin', 'users'],
      icon: '👤',
      route: '/users'
    },
    {
      id: 3,
      title: 'Orders',
      role: ['admin', 'orders'],
      icon: '🛒',
      route: '/orders'
    },
    {
      id: 4,
      title: 'Admin',
      role: ['admin'],
      icon: '⚙',
      route: '/admin'
    }
  ]);

  currentRole = localStorage.getItem('role');

  constructor() {
    const menus = this.menuItems().filter(menu =>
      menu.role.includes(this.currentRole ?? '')
    );

    this.menuList.set(menus);
  }
}