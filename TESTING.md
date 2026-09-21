# Testing Record

## Commands run

- `npm run build` via the installed Node.js runtime: passed on 2026-09-21. Vite transformed 48 modules and produced the `dist` bundle.

## Browser checks

- Opened `http://127.0.0.1:5173/case-workspace/overview` on 2026-09-21: passed. Breadcrumb, title, empty sections, and Planned labels rendered.
- Opened `/cases` and selected `Preview case workspace`: passed. The link navigated to `/case-workspace` and the index redirect resolved to the overview.
- Checked browser history: passed. Back and forward navigation remained within the expected routes.
- Checked the 390px viewport: passed. No horizontal overflow was detected.
- Opened People, Documents, and Forensics routes: passed. Expected empty states and section headings rendered.
- Activated the People Victims tab with a browser event: passed. The tab selected state and empty panel updated without records.
- Browser console errors during the route checks: none after the React prop warning fix.
- Opened Evidence, Timeline, Chain of Custody, and Audit History routes: passed. Expected empty states, titles, breadcrumbs, and active navigation rendered.
- Confirmed AI Assistant remains visibly Planned: passed.
- Verified representative global, form, AI, and Evidence Passport routes: passed. Titles and primary headings rendered.
- Checked New Case local validation: passed. Required-field errors appeared and no create action was enabled.
- Checked 390px mobile layout across the route sweep: passed. No horizontal overflow detected.
- No unexpected external requests were observed during the browser route sweep.

## Required checks still pending

- Direct refresh behavior for every production-host route remains dependent on the documented SPA fallback configuration.
- Back to My Cases link has not been clicked in automation; its target is present and correctly linked.
- Overview active state and Planned labels for all other case sections.
- Desktop, tablet, and mobile layout and horizontal overflow.
- Keyboard focus, skip link, semantic labels, and console errors.
- Confirmation that no unexpected external requests occur.

## Known failures

None observed in the production build or representative browser checks. Full screen-reader testing and exhaustive route-by-route mobile inspection were not performed.
