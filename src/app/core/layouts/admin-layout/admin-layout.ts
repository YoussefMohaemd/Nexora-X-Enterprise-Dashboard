import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-layout.html',
  styleUrls: ['./admin-layout.scss'],
})
export class AdminLayoutComponent {
  readonly themeService = inject(ThemeService);
  readonly authService = inject(AuthService);
  readonly router = inject(Router);
  
  readonly isSidebarOpen = signal(true);
  readonly isUserDropdownOpen = signal(false);

  navItems = [
    { label: 'Dashboard', icon: 'pi-th-large', path: '/admin/dashboard' },
    { label: 'Customers', icon: 'pi-users', path: '/admin/customers' },
    { label: 'Products', icon: 'pi-box', path: '/admin/products' },
    { label: 'Orders', icon: 'pi-shopping-cart', path: '/admin/orders' },
    { label: 'Analytics', icon: 'pi-chart-line', path: '/admin/analytics' },
    { label: 'Projects', icon: 'pi-objects-column', path: '/admin/projects' },
    { label: 'Billing', icon: 'pi-credit-card', path: '/admin/billing' },
    { label: 'Settings', icon: 'pi-cog', path: '/admin/settings' },
  ];

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }

  toggleUserDropdown() {
    this.isUserDropdownOpen.update(v => !v);
  }

  logout() {
    this.authService.logout();
  }
}
