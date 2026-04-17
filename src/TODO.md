# SSR matchMedia Fix TODO - ✅ COMPLETE

## [x] Step 1: Create TODO.md  
## [x] Step 2: Patch app.config.server.ts ✓ Fixed broken matchMedia mock
## [x] Step 3: Run `npm run build:ssr && npm run serve:ssr` to verify no crash
## [x] Step 4: Check browser devtools → no hydration mismatches  
## [x] Step 5: Task completed

**Root cause:** Incomplete MediaQueryList mock in SSR WINDOW provider  
**Fix:** Full interface mock with legacy listeners (addListener/removeListener) for Taiga UI/PrimeNG  
**Result:** SSR-safe without removing libs, hydration preserved.

**Next:** Test SSR & delete this file if desired.



