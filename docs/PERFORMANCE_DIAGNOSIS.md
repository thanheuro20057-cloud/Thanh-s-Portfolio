# Performance Diagnosis & Fixes

## Step 1 — Profiling Results (Chrome DevTools)

### Likely causes of scroll jank

1. **Scroll-snap vs Lenis conflict**
   - CSS `scroll-snap-type: y proximity` on `html` expects native scroll
   - Lenis uses transform-based virtual scroll; native scroll position doesn’t update the same way
   - Result: layout thrashing, double-handling, inconsistent scroll behavior

2. **Excessive React state updates on scroll**
   - Three separate IntersectionObservers: HashSync, Nav, SideDots
   - During Lenis scroll, sections rapidly enter/exit root margin → many callbacks per second
   - Each callback: `setActiveId()` (Nav, SideDots) or `history.replaceState()` (HashSync)
   - Result: frequent React re-renders on every scroll frame → main-thread overload

3. **Heavy CSS & animation cost**
   - `backdrop-blur-sm` on Projects modal: full-viewport blur → expensive compositing
   - Intro infinite opacity animation: `animate` with `repeat: Infinity` → continuous JS work
   - Framer Motion `layoutId` on Nav indicator: layout animations can cause reflow
   - Result: layout/repaint pressure during scroll

4. **Framer Motion `useScroll` vs Lenis**
   - Playground uses `useScroll` (native window scroll)
   - Lenis uses virtual scroll; `window.scrollY` may not track correctly
   - Result: conflicting or incorrect scroll-driven animations

### Top 3 fixes applied

1. **Remove scroll-snap, use Lenis only** — Single scroll driver; no CSS scroll-snap
2. **Single observer + throttled updates** — One IntersectionObserver (ActiveSectionProvider), throttle/dedupe state updates
3. **Reduce expensive effects** — Remove backdrop-blur; replace with solid overlay; remove Intro infinite animation; drive scroll effects from Lenis `progress` via MotionValue

---

## Step 4 — Verification Checklist

- [ ] **Transitions smooth** — Scroll between sections; Lenis handles smoothing; no stutter
- [ ] **CPU usage reduced** — Single observer; no setState on every scroll tick; MotionValues for scroll-driven effects
- [ ] **No flicker on URL hash change** — `history.replaceState` (no reload); hashchange only for back/forward
- [ ] **Mobile acceptable** — Lenis touch; ShadeSweep respects prefers-reduced-motion
- [ ] **prefers-reduced-motion** — ShadeSweep falls back to solid dark; Playground hidden; stagger/duration reduced in sections
