# sihpro190
# 🔐 Secure Digital Case & Evidence Management System

> **Smart India Hackathon 2026 — Problem Statement 190**
> An investigator-focused digital workspace for organizing cases, people, documents, forensic reports, evidence, timelines, and investigation history.

**Repository:** [techiee-git/sihpro190](https://github.com/techiee-git/sihpro190)

---

## 📌 Overview

The **Secure Digital Case & Evidence Management System** is a frontend prototype designed around a case-centric investigation workflow.

The platform provides a unified workspace where authorized investigation professionals can eventually manage and navigate:

* 📁 Cases
* 👥 People involved in a case
* 📄 Documents
* 🔬 Forensic reports
* 🧾 Evidence
* 🔗 Chain of custody
* 🕒 Investigation timeline
* 📋 Audit history
* 🤖 AI-assisted investigation
* 🛡️ Evidence verification and provenance

The current release focuses on establishing the **frontend information architecture, navigation, responsive UI, case workspace structure, and interaction patterns** before connecting the system to backend services and persistent data.

> **Current status:** Frontend prototype complete. Backend, database, authentication, persistence, and production evidence-processing capabilities are not yet connected.

## Problem

Investigation workflows often involve information distributed across multiple systems, files, people, reports, and evidence records.

This project aims to provide a centralized, structured workspace that can eventually help authorized users:

1. Organize investigation cases.
2. Access case-related information from one workspace.
3. Track people, documents, evidence, and forensic information.
4. Maintain a chronological investigation history.
5. Provide traceability for evidence and actions.
6. Support secure, role-aware access to sensitive information.
7. Introduce AI-assisted investigation capabilities without altering original evidence.


## ✨ Current Features

### 🖥️ Application Shell

* Persistent sidebar navigation
* Top header
* Breadcrumb navigation
* Route-aware document titles
* Footer
* Responsive layouts
* Keyboard skip link
* Focus styling and semantic landmarks

### 📊 Dashboard

The dashboard currently provides the structure for:

* Case statistics
* Pending actions
* Recent activity
* Investigation overview

Backend-dependent values are intentionally represented as unavailable rather than fabricated.

### 📁 My Cases

The My Cases workspace currently includes:

* Assigned-case layout
* Search input
* Case navigation
* Empty-state handling
* Case workspace preview entry point

The search interface currently accepts text locally but does not perform a backend search.

### 🗂️ Case Workspace

A reusable case workspace has been implemented with sections for:

* Overview
* People
* Documents
* Forensics
* Evidence
* Timeline
* Chain of Custody
* Audit History
* AI Assistant
* Evidence Passport

The workspace intentionally does not fabricate a case identifier in the URL.

### 👥 People

The People section is structured for future management of:

* Suspects / Accused
* Victims
* Witnesses

### 📄 Documents

The document workspace provides the frontend structure for future document management.

### 🔬 Forensics

A dedicated forensic-report workspace is included for future integration of forensic records and reports.

### 🧾 Evidence

The Evidence workspace provides structured categories and empty states for future evidence management.

### 🕒 Timeline

A chronological investigation-history interface is included for future event data.

### 🔗 Chain of Custody

A dedicated Chain of Custody section is included for future evidence custody tracking.

### 📋 Audit History

The application includes an audit-history section designed for future traceability of actions performed within the system.

### 🤖 AI Assistant

An AI Assistant route and interface placeholder are included for future intelligent investigation assistance.

### 🛡️ Evidence Passport

An Evidence Passport interface is included as a future foundation for evidence identity, provenance, integrity, and verification workflows.

                         ┌──────────────────────┐
                         │      User / Role     │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │     AppLayout        │
                         │ Sidebar + Header     │
                         │ Breadcrumbs + Footer │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
        ┌───────────┐         ┌────────────┐       ┌────────────┐
        │ Dashboard │         │  My Cases  │       │   Search   │
        └───────────┘         └─────┬──────┘       └────────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Case Workspace    │
                         └──────────┬───────────┘
                                    │
       ┌────────────┬──────────────┼──────────────┬────────────┐
       ▼            ▼              ▼              ▼            ▼
    People      Documents      Forensics       Evidence     Timeline
       │            │              │              │            │
       └────────────┴──────────────┼──────────────┴────────────┘
                                    │
                          ┌─────────┴─────────┐
                          ▼                   ▼
                   Chain of Custody      Audit History
                          │
                          ├── AI Assistant
                          │
                          └── Evidence Passport

### Frontend

* **React**
* **React DOM**
* **React Router DOM**
* **JavaScript / JSX**
* **CSS**
* **Tailwind CSS**
* **Vite**
* **Inline SVG icons**

The current `package.json` defines React 19, React Router DOM 7, Vite 7, and Tailwind CSS 4 dependencies.

### Development

* Node.js
* npm / pnpm
* Git
* GitHub
* Vite development server

---

## 📂 Project Structure

```text
sihpro190/
│
├── src/
│   ├── components/
│   │   ├── AppLayout.jsx
│   │   ├── EmptyState.jsx
│   │   └── Icon.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── MyCases.jsx
│   │   ├── Search.jsx
│   │   ├── Notifications.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   │
│   │   ├── CaseWorkspace.jsx
│   │   ├── CaseOverview.jsx
│   │   ├── CasePeople.jsx
│   │   ├── CaseDocuments.jsx
│   │   ├── CaseForensics.jsx
│   │   ├── CaseEvidence.jsx
│   │   ├── CaseTimeline.jsx
│   │   ├── CaseCustody.jsx
│   │   ├── CaseAudit.jsx
│   │   ├── CaseAI.jsx
│   │   └── EvidencePassport.jsx
│   │
│   ├── main.jsx
│   └── styles.css
│
├── ARCHITECTURE.md
├── APPROVALS.md
├── CONTEXT.md
├── ROADMAP.md
├── ROUTES.md
├── TESTING.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── package-lock.json
├── vite.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

Install:

* **Node.js 18+**
* npm or pnpm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/techiee-git/sihpro190.git
cd sihpro190
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

### 3. Start the development server

Using npm:

```bash
npm run dev
```

Or:

```bash
pnpm dev
```

The Vite server runs on:

```text
http://127.0.0.1:5173
```

### 4. Build for production

```bash
npm run build
```

Or:

```bash
pnpm build
```

### 5. Preview the production build

```bash
npm run preview
```

The available scripts are defined in `package.json`.

---

## 🧪 Testing & Validation

The current prototype has been tested through a production build and representative browser route checks.

Validated areas include:

* Production Vite build
* Case workspace navigation
* Dashboard
* My Cases
* People
* Documents
* Forensics
* Evidence
* Timeline
* Chain of Custody
* Audit History
* AI Assistant placeholder
* Evidence Passport
* New Case local validation
* Responsive 390px viewport
* Browser navigation
* Console error checks

The documented production build passed, and the route checks reported no unexpected console errors after the React warning fix.

Run:

```bash
npm run build
```

for a production-build verification.

---

## 🔐 Security & Privacy Direction

Because this system is intended for sensitive investigation information, security is treated as a core architectural concern.

### Planned security capabilities

* 🔑 Authentication
* 🧑‍💼 Role-Based Access Control (RBAC)
* 🛡️ Attribute-Based Access Control (ABAC)
* 🔐 Multi-Factor Authentication (MFA)
* 🔒 Secure session management
* 🗝️ Key management
* 🔏 Encryption
* 🔎 Evidence integrity verification
* 📋 Append-only audit logging
* 🧾 Evidence provenance
* ☁️ Secure object storage

These capabilities are **planned architecture, not currently implemented functionality**.

---

## 🧠 Planned Intelligent Capabilities

Future versions are intended to introduce AI-assisted functionality such as:

* Investigation assistance
* Case information retrieval
* Evidence-related intelligence
* OCR
* Document embeddings
* Semantic search
* RAG-based investigation assistance
* LLM integration
* Evidence analysis support

### AI safety principle

AI must operate within authorization boundaries and must **not modify original evidence or determine guilt or innocence**.

AI should assist investigators with information organization and retrieval rather than replace professional judgment.

---

## 🗄️ Planned Backend Architecture

The future backend is expected to introduce:

```text
                    React Frontend
                          │
                          ▼
                    FastAPI REST API
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
        PostgreSQL    MinIO / S3     Identity
        Metadata      Evidence       & Access
                         Storage
             │            │
             └──────┬─────┘
                    │
          ┌─────────┴──────────┐
          ▼                    ▼
     Integrity Layer       AI Layer
     SHA-256 / Audit       OCR / RAG
     Hash Chain            Embeddings
                           LLM
```

Planned technologies include FastAPI, PostgreSQL, MinIO/S3, SHA-256 integrity fingerprints, encryption, MFA, RBAC/ABAC, OCR, embeddings, pgvector, RAG/LLM, an append-only hash-chained audit ledger, and optionally Hyperledger Fabric.

---

## 🛣️ Roadmap

### Phase 1 — Frontend Foundation

* [x] Application shell
* [x] Navigation
* [x] Dashboard
* [x] My Cases
* [x] Case Workspace
* [x] Responsive UI

### Phase 2 — Investigation Workspace

* [x] People
* [x] Documents
* [x] Forensics
* [x] Evidence
* [x] Timeline
* [x] Chain of Custody
* [x] Audit History

### Phase 3 — Backend

* [ ] FastAPI service
* [ ] PostgreSQL
* [ ] REST APIs
* [ ] Authentication
* [ ] Authorization
* [ ] Persistent case records

### Phase 4 — Secure Evidence

* [ ] Object storage
* [ ] Evidence upload
* [ ] Evidence metadata
* [ ] SHA-256 integrity fingerprints
* [ ] Encryption
* [ ] Evidence provenance
* [ ] Chain-of-custody persistence

### Phase 5 — Security

* [ ] MFA
* [ ] RBAC
* [ ] ABAC
* [ ] Secure sessions
* [ ] Key management
* [ ] Append-only audit ledger

### Phase 6 — Intelligence

* [ ] OCR
* [ ] Document embeddings
* [ ] pgvector
* [ ] Semantic search
* [ ] RAG
* [ ] AI investigation assistant

### Phase 7 — Deployment

* [ ] Docker
* [ ] Docker Compose
* [ ] Production deployment
* [ ] CI/CD
* [ ] Monitoring
* [ ] Security testing

---

## ⚠️ Current Prototype Limitations

This repository is currently a **frontend prototype**.

The following are **not connected yet**:

* Backend
* Database
* API
* Authentication
* Authorization
* Persistent case records
* Real evidence storage
* File encryption
* Evidence hashing
* Chain-of-custody persistence
* Audit ledger
* OCR
* RAG
* LLM
* AI-generated investigation results

The UI intentionally displays empty/unavailable states instead of using fabricated investigation records or metrics.

---

## 📚 Project Documentation

| Document                               | Purpose                                                      |
| -------------------------------------- | ------------------------------------------------------------ |
| [`ARCHITECTURE.md`](./ARCHITECTURE.md) | Current and planned architecture                             |
| [`CONTEXT.md`](./CONTEXT.md)           | Project context, features, stack, and development boundaries |
| [`ROUTES.md`](./ROUTES.md)             | Complete route map                                           |
| [`ROADMAP.md`](./ROADMAP.md)           | Development roadmap                                          |
| [`TESTING.md`](./TESTING.md)           | Testing and validation record                                |
| [`APPROVALS.md`](./APPROVALS.md)       | Project approvals and decisions                              |

---

## 👥 Project Status

**Project:** Secure Digital Case & Evidence Management System
**Hackathon:** Smart India Hackathon 2026
**Problem Statement:** 190
**Repository:** `techiee-git/sihpro190`
**Current Stage:** Frontend Investigation Workspace Prototype

---

## 📄 License

This project is currently developed as a Smart India Hackathon prototype.

License terms can be added as the project moves toward public/open-source distribution.
