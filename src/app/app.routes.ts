import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { PublicLayoutComponent } from './core/layouts/public-layout/public-layout';
import { AdminLayoutComponent } from './core/layouts/admin-layout/admin-layout';

export const routes: Routes = [
  // Public Routes
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/public/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'features',
        loadComponent: () =>
          import('./features/public/features/features.component').then((m) => m.FeaturesComponent),
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import('./features/public/pricing/pricing').then((m) => m.PricingComponent),
      },
    ],
  },

  // Auth Routes
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./features/auth/forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent,
          ),
      },
    ],
  },

  // Admin Routes (Protected)
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('./features/admin/customers/customers.component').then(
            (m) => m.CustomersComponent,
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./features/admin/products/products.component').then((m) => m.ProductsComponent),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./features/admin/orders/orders.component').then((m) => m.OrdersComponent),
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./features/admin/analytics/analytics.component').then(
            (m) => m.AnalyticsComponent,
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/admin/projects/projects.component').then((m) => m.ProjectsComponent),
      },
      {
        path: 'billing',
        loadComponent: () =>
          import('./features/admin/billing/billing.component').then((m) => m.BillingComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/admin/settings/settings.component').then((m) => m.SettingsComponent),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  // Wildcard
  {
    path: '**',
    redirectTo: '',
  },
];
