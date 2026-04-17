# NexoraX Enterprise Dashboard Upgrade Plan
This document outlines the architectural and sequential plan to upgrade the NexoraX Angular 21 application into a production-grade SaaS demo dashboard, fulfilling all UI/UX and architectural constraints.

## User Review Required
> [!IMPORTANT]
> Please review this implementation plan. Everything is mapped out to build a clean, dark-mode SaaS dashboard with SSR compatibility, using your updated Tailwind CSS configuration and PrimeNG features. Let me know if you approve before I begin execution!

## 1. Full Folder-Level Plan

```text
src/app/
├── core/
│   ├── auth/ (Mock Auth Service & Guards)
│   ├── layouts/
│   │   ├── admin-layout/ (Sidebar, Topbar)
│   │   ├── auth-layout/ (Clean centered layout)
│   │   └── public-layout/ (Landing, Features, Pricing)
│   ├── services/ (Refactored to purely reactive Signals, no stray effects)
│   └── interfaces/
├── shared/
│   ├── components/
│   │   ├── ui-card/ (Reusable elevated container)
│   │   ├── stat-card/ (Animated KPI counters)
│   │   ├── action-button/
│   │   ├── page-header/ (Title + Breadcrumbs + Actions)
│   │   └── empty-state/
│   └── tables/ (Reusable PrimeNG table skeleton/wrappers)
└── pages/
    ├── auth/ (login, register, forgot-password)
    ├── admin/
    │   ├── dashboard/ (Charts, KPIs, Recent Activity)
    │   ├── customers/ (PrimeNG Advanced Table)
    │   ├── products/ (PrimeNG Advanced Table)
    │   ├── orders/ (PrimeNG Advanced Table)
    │   ├── analytics/ (Charts)
    │   ├── projects/ (Kanban UI)
    │   ├── billing/ (Pricing, Invoices)
    │   └── settings/ (Profile UI)
    └── public/
        ├── home/ (Landing)
        ├── features/
        └── pricing/
```

## 2. UI Component Architecture

The UI will rely heavily on the custom PostCSS variables you just integrated (`--bg`, `--card`, `--primary`, `--secondary`).

- **Layout Shell**:
  - `AdminLayout`: Sticky sidebar navigation + Topbar (global search, user avatar, theme toggle, notifications). Glassmorphism on both.
  - `PublicLayout`: Classic SaaS hero header + footer.
  - `AuthLayout`: Centered, elevated card against the main background with a subtle gradient.
- **Micro-Components**:
  - `AppCard`: Standard content wrapper (`.card`).
  - `PageHeader`: Consistent H1 title and action buttons.
  - `StatCard`: Dedicated wrapper for numeric KPIs with trend indicators (+12%).

## 3. New Routing Structure (Fully Lazy-Loaded)

All routes will be lazy-loaded using `loadComponent` / `loadChildren` to optimize the SSR bundle.

```typescript
// app.routes.ts mapping:
[
  { 
    path: '', 
    component: PublicLayoutComponent,
    children: [
      { path: '', loadComponent: ...HomeComponent },
      { path: 'features', loadComponent: ...FeaturesComponent },
      { path: 'pricing', loadComponent: ...PricingComponent },
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', loadComponent: ...LoginComponent },
      { path: 'register', loadComponent: ...RegisterComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [mockAuthGuard], // UI-level redirect
    children: [
      { path: 'dashboard', loadComponent: ...DashboardComponent },
      { path: 'customers', loadComponent: ...CustomersComponent },
      { path: 'products', loadComponent: ...ProductsComponent },
      { path: 'orders', loadComponent: ...OrdersComponent },
      { path: 'analytics', loadComponent: ...AnalyticsComponent },
      { path: 'projects', loadComponent: ...ProjectsComponent },
      { path: 'billing', loadComponent: ...BillingComponent },
      { path: 'settings', loadComponent: ...SettingsComponent },
    ]
  }
]
```

## 4. Updated Design System Approach

1. **Colors**: Your dark theme logic (`var(--bg)` -> `#0f172a`) will be the default. Tailwind configuration already maps `primary: "var(--primary)"`. We will remove `dark:` utility prefixes and embrace the CSS variable structure you defined.
2. **Tables**: PrimeNG tables will be embedded within `AppCard` wrappers without borders. We will use `p-paginator`, `p-tableHeaderCheckbox`, and PrimeNG's built-in global filter API.
3. **Forms/Inputs**: Tailored `.input` utility class that perfectly matches the provided `.card` UI styling.
4. **Taiga UI**: Will be used specifically for precise layout primitives or micro-animations if helpful, but styling fallback defaults to Tailwind + Vanilla SCSS tokens.

## 5. Priority Execution Plan

### P0: Foundation & Core Layout
1. Delete unused components/layouts from the previous architecture.
2. Generate all core `shared/components/` (Card, PageHeader, StatCard).
3. Generate the 3 main Layout shells (`AuthLayout`, `AdminLayout`, `PublicLayout`).
4. Update `app.routes.ts` with the new routing skeleton.
5. Create the Mock Auth flow + `AuthGuard` (redirects user from `/admin/*` to `/auth/login` if not logged in).

### P1: The "Enterprise Data" Tier
1. Refactor `BaseService`, `UserService`, and `ProductService` to remove risky `effect()` bounds and purely use RxJS `toSignal`/Signals accurately.
2. Build the Advanced PrimeNG Tables for:
   - **Customers** (status tags, avatars, search).
   - **Products** (categories, stock tags).
   - **Orders** (monetary formatting, transaction tracking).
3. Connect tables to mock JSON data safely.

### P2: Dashboards & Public Views
1. Build the Main `/admin/dashboard` (KPI stat cards, Recent activity mock, mock Revenue chart using CSS or basic HTML/Prime primitives).
2. Build remaining static Admin views (`/projects` kanban UI, `/settings` form UI, `/billing` pricing table UI).
3. Build the Public SaaS pages (`features`, `home` improvements).

## 6. Verification & Quality Check
1. Ensure SSR compilation works perfectly (no DOM manipulation outside `isPlatformBrowser`).
2. Verify all links transition beautifully.
3. Check table pagination + filtering UX.
4. Ensure dark premium aesthetic matches user specifications.
