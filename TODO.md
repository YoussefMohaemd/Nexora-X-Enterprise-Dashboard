# Nexora-X Dashboard Improvements TODO

## Priority Steps (User-Approved Plan)

### 1. Theme System Completion ✅
- [x] Update tailwind.config.js: add `darkMode: 'class'`
- [x] Update src/styles.scss: light mode vars + deeper dark colors/transitions  
- [x] Add theme toggle to src/app/core/layouts/public-layout/public-layout.html

**Theme toggle now works on both admin and public layouts!**

### 2. Pricing Page Redesign [PENDING]
- [ ] Redesign pricing.html, pricing.ts, pricing.scss: 3 tiers, features, responsive

### 3. Document Page [PENDING]
- [ ] Add route to app.routes.ts
- [ ] Create src/app/features/public/document/document.* (html/scss/spec.ts/ts): hero, sidebar, sections

### 4. Feature Pages [PENDING]
- [ ] Add routes for signals, state-management, ssr, high-performance, tables, dark-mode-first, tailwind-integration, grid-system, security
- [ ] Create each as standalone component with demos

### 5. Mock Data Enhancement [PENDING]
- [ ] Expand products.json to 25+ entries
- [ ] Expand users.json to 30+ 
- [ ] Expand orders.json to 20+ with products array

## Testing/Verification
- [ ] Test theme toggle on both layouts, persistence, SSR
- [ ] Verify new pages responsive, smooth transitions
- [ ] Check mock data loads in admin tables

Last Updated: Step 1 starting

