# Architecture

## Current frontend structure

- `src/main.jsx` defines React Router routes inside the shared `AppLayout`.
- `src/components/AppLayout.jsx` owns the sidebar, header, breadcrumbs, document title, main outlet, footer, and skip link.
- `src/components/EmptyState.jsx` and `src/components/Icon.jsx` provide shared presentation primitives.
- `src/pages/MyCases.jsx` provides the disconnected assigned-cases view and the workspace preview entry point.
- `src/pages/CaseWorkspace.jsx` owns the reusable case workspace shell and section navigation.
- `src/pages/CaseOverview.jsx` owns the Phase 1 empty overview sections.
- Case section pages own disconnected People, Documents, Forensics, Evidence, Timeline, Chain of Custody, Audit History, AI, and Evidence Passport views.
- Global pages own Search, Evidence, Notifications, Profile, and Settings layouts.
- Form pages use temporary React state for local field checks and local file metadata only.
- `src/styles.css` contains the existing responsive visual language and workspace styling.

## Route relationship

`AppLayout` renders the application shell. The `/case-workspace` route renders `CaseWorkspace`, which redirects its index to `/case-workspace/overview` and renders `CaseOverview` through the nested outlet. No case identifier is placed in the URL.

## State and data boundaries

The current prototype has no backend, API, database, object storage, authentication, or browser persistence. All backend-dependent pages display empty and unavailable states. Forms use temporary React state only; local file inputs expose the selected filename and size without reading, hashing, encrypting, previewing, uploading, or persisting file contents.

## Planned future architecture

PLANNED only: FastAPI APIs, PostgreSQL structured metadata, MinIO/S3 file storage, SHA-256 integrity fingerprints, encryption, MFA, RBAC/ABAC, secure session and key management, OCR, embeddings, pgvector, RAG/LLM, an append-only hash-chained audit ledger, an optional single Hyperledger Fabric trust network, and Docker/Compose.

Hashing is not encryption. Evidence files belong in object storage, not on a blockchain. Professional identities belong in the identity and access system. AI must respect authorization, never modify original evidence, and never determine guilt or innocence.
