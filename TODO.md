# Nexora-X UI Library Hybrid Refactor (PrimeNG + Taiga UI)
Status: 🚀 IN PROGRESS

## Step 1: [TODO] action-button → Hybrid Wrapper (tui-button primary + p-button variants)
- [ ] Update action-button.* → Internal tui-button base w/ variant fallbacks
- [ ] Add PrimeNG/Taiga UI imports
- [ ] Override styles: Match .btn-primary/.btn-secondary exactly
- [ ] Test 5+ usages (orders/dashboard/customers)
- [ ] `ng serve` → Visual/functionality check

## Step 2: [TODO] Forms → Taiga UI Inputs
- [ ] auth/login.html: input → tui-input
- [ ] auth/register.html: inputs → tui-input
- [ ] auth/forgot.html: → tui-input
- [ ] Preserve icons/spacing/password-toggle
- [ ] Test forms + dark mode

## Step 3: [TODO] ui-card → Hybrid tui-card/p-card
- [ ] Test tui-card vs p-card styling match
- [ ] Update ui-card.* wrapper
- [ ] Test table wrappers (orders/products)

## Step 4: [TODO] Public raw buttons → app-action-button
- [ ] home/pricing/feature-detail → <app-action-button>
- [ ] Remove raw btn-* classes

## Step 5: [TODO] Optimizations + Cleanup
- [ ] OnPush change detection
- [ ] Remove unused custom SCSS
- [ ] SSR test: `npm run serve:ssr:Nexora-X-Enterprise-Dashboard`
- [ ] Production build size check

## Step 6: [COMPLETE] Final Validation
- [ ] Visual regression test all pages
- [ ] Functionality test (auth/tables/buttons)
- [ ] attempt_completion

