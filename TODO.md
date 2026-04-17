# Nexora-X Fix TODO

## Progress Tracker

### [x] Step 1: Cleanup Structure
- Delete duplicate layout .ts files (keep .component.ts)
- Ensure core/{auth,base,enums,interfaces}/ exist (create files will handle)

### [x] Step 2: Create Core Files
- core/enums/api-endpoints.enum.ts
- core/interfaces/{user,product,order}.interface.ts (+ mappers)
- core/auth/auth.service.ts (move logic from services/auth.service.ts, delete old)
- core/base/base.service.ts (move from services/base.service.ts, delete old)

### [x] Step 3: Fix Services
- Update user/product/order.service.ts: imports, extend BaseService, typed http.get<T>, toSignal<User[]>
- Update adapters if needed

### [ ] Step 4: Fix Guards & Layouts
- guards/auth.guard.ts: import from './auth/auth.service'
- layouts/**/admin-layout.component.ts: fix theme service import

### [ ] Step 5: Fix Routing
- app.routes.ts: update ALL loadComponent to match actual file locations (features/)

### [ ] Step 6: UI Fixes
- products.component.html: severity fixes
- Ensure all components standalone w/ imports[]

### [ ] Step 7: Validate
- Run `ng build` 
- Fix any remaining
- `ng serve`

**Current: Step 3 adapters fixed. Next Step 4.**
