# Project

Secure Digital Case & Evidence Management System

An investigator-focused, case-centric workspace for organizing investigation information and evidence.

# Project Goal

Help authorized professionals organize complete investigations, understand case history, and maintain evidence accountability. Build one explicitly requested feature at a time.

# Current Development Phase

Phases 1-7: Frontend investigation workspace prototype complete. Final manual review is available.

# Current Architecture

React single-page frontend with Vite configuration, Tailwind CSS integration, React Router route definitions, a shared application layout, Dashboard, My Cases, Search, and an ID-free Case Workspace preview. The shared header, breadcrumbs, and document title reflect the current route. No services, backend, persistence, or domain records.

# Current Tech Stack

- React / React DOM 19.3.0
- Vite 7.3.6 and React plugin 5.2.0
- Tailwind CSS / Vite integration 4.3.3
- React Router DOM 7.18.3
- JavaScript/JSX, CSS, semantic HTML, and inline SVG icons
- pnpm dependency lockfile; Node.js 24.19.0 used for validation

pnpm-workspace.yaml explicitly skips the esbuild lifecycle script; its installed platform binary successfully builds the project. README.md documents install, development, and production build commands.

# Planned Technologies

PLANNED only: Python/FastAPI, REST APIs, PostgreSQL, MinIO/S3, SHA-256, encryption, MFA, RBAC, ABAC, secure sessions, key management, OCR, embeddings, pgvector, RAG/LLM, append-only hash-chained audit ledger, optional Hyperledger Fabric, Docker/Compose. AI must use authorized sources and must never modify original evidence or determine guilt.

# Current Routes

- `/dashboard`: dashboard shell and empty states, implemented in source.
- `/cases`: displays the assigned cases workspace. Status: implemented frontend layout with empty state.
- `/case-workspace`: redirects to `/case-workspace/overview`.
- `/case-workspace/overview`: ID-free case workspace shell and empty overview sections.
- `/case-workspace/people`: disconnected people categories with local accessible tabs.
- `/case-workspace/documents`: disconnected document categories and empty lists.
- `/case-workspace/forensics`: disconnected forensic report area.
- `/case-workspace/evidence`: disconnected evidence categories and empty lists.
- `/case-workspace/timeline`: disconnected chronological events area.
- `/case-workspace/chain-of-custody`: disconnected custody history area.
- `/case-workspace/audit-history`: disconnected audit history area.
- `/search`: frontend-only search layout.
- `/evidence`, `/notifications`, `/profile`, `/settings`: disconnected global pages.
- `/cases/new`, `/case-workspace/documents/new`, `/case-workspace/evidence/new`: local validation form layouts.
- `/case-workspace/ai-assistant`, `/case-workspace/evidence-passport`: disconnected intelligent-assistance and verification placeholders.
- `/` and unmatched URLs: redirect to `/dashboard` with history replacement.
- All requested frontend routes are implemented. Backend-dependent capabilities remain unavailable.

# Current Features

- Application shell with left navigation, top header, and footer.
- Dashboard with unavailable summary values (em dashes), My Cases, Pending Actions, and Recent Activity empty states.
- Desktop-first layout with tablet and mobile breakpoints.
- Skip link, focus styling, semantic landmarks, and accessible navigation.
- Explicit prototype and disconnected-data indicators.
- My Cases page with assigned cases empty state and the existing Dashboard visual language.
- Case search/filter toolbar layout: search accepts text locally; the list stays empty. Filter and sort controls are disabled, with explanatory help text. No search operation or network request occurs.
- Functional My Cases sidebar navigation with route-specific active styling and breadcrumb.
- ID-free Case Workspace preview with Overview navigation, Back to My Cases link, planned section labels, and empty Case Information, Investigation Summary, and Pending Actions sections.
- Case Workspace breadcrumbs and document title reflect the explicit preview route without a fabricated case identifier.
- Case record sections for People, Documents, and Forensics use empty states and disabled backend-dependent actions.
- Evidence and investigation history sections use empty states and do not claim verification, custody, or audit capabilities.
- Global navigation pages, local validation forms, AI Assistant, and Evidence Passport placeholders are implemented without persistence or network calls.

# Current UI Components

| Component | File Location | Purpose | Where Used |
| --- | --- | --- | --- |
| AppLayout | src/components/AppLayout.jsx | Sidebar, header, main outlet, footer | Router layout |
| PlannedNav | src/components/AppLayout.jsx | Disabled future navigation | Sidebar |
| Icon | src/components/Icon.jsx | Decorative inline SVG icons | Layout, Dashboard, and My Cases |
| EmptyState | src/components/EmptyState.jsx | Reusable empty content | Dashboard panels and My Cases |
| SummaryCard | src/pages/Dashboard.jsx | Unavailable summary metric | Dashboard |
| Panel | src/pages/Dashboard.jsx | Titled content section | Dashboard |
| Dashboard | src/pages/Dashboard.jsx | Current page | /dashboard |
| MyCases | src/pages/MyCases.jsx | Assigned cases layout, toolbar, and empty state | /cases |

Styling: warm sand sidebar, off-white canvas, white panels, slate text, restrained teal accents. Tailwind utilities handle simple alignment; src/styles.css contains component styles and responsive breakpoints. No external fonts or image services.

# Data Status

Backend Connected: NO

Database Connected: NO

API Connected: NO

Mock Data: NO

Hardcoded Case Data: NO

All backend-dependent content defaults to empty or unavailable. No fabricated records, metrics, users, timers, or success responses. Future data integrations must support loading, empty, error, and loaded states when implemented.

# Backend Integration Status

Backend Integration: NONE

# Storage Status

Object Storage: NOT CONNECTED

Database Storage: NOT CONNECTED

No browser persistence.

# AI Integration Status

AI Integration: NONE

# Security Status

## Implemented Security

None. This is a presentation-only frontend; it does not authenticate users or protect evidence. No encryption, integrity, or blockchain verification claims are shown.

## Planned Security

MFA, RBAC, ABAC, SHA-256 integrity verification, file encryption, secure sessions, key management, audit logging, and optional permissioned blockchain.

# Blockchain / Trust Layer Status

Blockchain: NOT IMPLEMENTED

Audit Ledger: NOT IMPLEMENTED

Planned: append-only hash-chained audit ledger and optional single Hyperledger Fabric permissioned network for evidence hashes, critical custody events, digitally signed actions, and cross-organization trust. Actual FIRs, CCTV, and other evidence files belong in object storage, not blockchain. Professional identity belongs in the identity/access system.

# Known Limitations

- No automated test suite is included; validation used a production build, source diagnostics, and representative browser checks.
- No backend, authentication, real case data, APIs, database, object storage, or browser persistence.
- Forms only validate temporary local state. Create, save, upload, verification, custody transfer, AI generation, and audit actions remain disabled.
- Search, filtering, sorting, notifications, profile data, and settings are disconnected.
- Full screen-reader testing and exhaustive route-by-route mobile inspection were not performed.
- Production hosting needs SPA fallback to `index.html` for direct route access.

# Recent Changes

## 2026-09-16

- Created frontend project manifests and Vite/Tailwind configuration.
- Added application shell, safe navigation placeholders, dashboard summary cards and empty states.
- Added responsive layout, accessibility basics, and prototype status messaging.
- Added mandatory project context. No backend or mock data added.
- Installed frontend dependencies and generated pnpm-lock.yaml. Production build passed (44 modules). Added setup instructions and explicit dependency script policy.
- Verified dashboard rendering and active Dashboard navigation in the browser, root redirect, all five disabled future navigation controls, and no console errors/warnings. Inspected desktop/mobile appearance, checked 390px mobile and 768px tablet widths for horizontal overflow, and verified the keyboard skip link focuses main-content.

## 2026-09-16 — My Cases frontend layout

- Added `/cases` inside the existing application shell with an assigned cases empty state.
- Activated My Cases navigation and removed its Planned label. Search and Evidence remain Planned.
- Made the shared breadcrumb and document title route-aware; active dots appear only on the active navigation item.
- Document title updates through the shared layout effect, retaining a single title element from index.html.
- Added a responsive case search/filter toolbar with an editable search field, disabled filter/sort controls, and honest disconnected-data help text.
- Reused EmptyState, Icon, and existing page/panel styles. Dashboard component, cards, and layout were preserved.
- No dependencies, mock case data, fake statistics, APIs, or backend integration added.
- Production build passed (45 modules). Browser checks verified direct `/cases` access, both navigation active states, Dashboard rendering, search retaining the empty state, disabled future controls, and no console errors/warnings. Desktop/mobile appearance inspected; 390px mobile and 768px tablet widths showed no horizontal overflow.

## 2026-09-21 — Phase 1 Case Workspace shell

- Replaced the unfinished ID-based case route with `/case-workspace` and `/case-workspace/overview`.
- Added the My Cases `Preview case workspace` link and workspace `Back to My Cases` navigation.
- Added the Overview shell with empty Case Information, Investigation Summary, and Pending Actions sections.
- Marked People, Documents, Evidence, Forensics, Timeline, Chain of Custody, AI Assistant, and Audit History as Planned.
- Preserved disconnected-data behavior: no case identifier, case records, API calls, persistence, authentication, or security claims were added.
- Production build passed after the Phase 1 implementation and styling changes.

## 2026-09-21 — Phase 2 Case record sections

- Added `/case-workspace/people`, `/case-workspace/documents`, and `/case-workspace/forensics`.
- Added accessible local People category tabs for Suspects / Accused, Victims, and Witnesses.
- Added empty document categories for FIR, Statements, Charge Sheet, Legal Documents, and Reports.
- Added an empty forensic report area with disabled management controls.
- Kept all records, uploads, personal data, laboratory data, and backend actions unavailable.
- Production build and browser route checks passed; Phase 2 was approved in chat.

## 2026-09-21 — Phase 3 Evidence and investigation history

- Added `/case-workspace/evidence`, `/case-workspace/timeline`, `/case-workspace/chain-of-custody`, and `/case-workspace/audit-history`.
- Activated the completed case workspace navigation entries while keeping AI Assistant Planned.
- Added empty evidence categories, timeline events, custody history, and audit history areas.
- Preserved honest disconnected states: no evidence records, transfers, signatures, audit entries, integrity results, encryption claims, or blockchain claims were added.
- Production build and browser route checks passed; Phase 3 was approved in chat.

## 2026-09-21 — Phases 4-7 final frontend integration

- Added global Evidence, Notifications, Profile, and Settings pages.
- Added New Case, Add Document, and Add Evidence form layouts with local required-field checks and disabled create/upload actions.
- Added AI Assistant and Evidence Passport placeholder routes with no generated answers, hashes, verification, or security claims.
- Activated completed navigation entries, added route-aware titles and breadcrumbs, and preserved the ID-free case workspace model.
- Added final architecture, route, roadmap, testing, and approval documentation for the complete frontend prototype.
- Production build and representative browser route checks passed; final manual review is available.

# Current Task Completed

Phases 1-7 frontend prototype. Implementation and production build/browser validation complete; final manual review is available. No backend or operational security acceptance is claimed.

# Next Recommended Feature

No further frontend phase is scheduled. Backend, authentication, storage, AI services, and trust-layer work remain explicitly separate future work.
