# Route Map

## Implemented routes

| Route | Purpose | Parent layout | Navigation entry | Frontend status | Data status |
| --- | --- | --- | --- | --- | --- |
| `/dashboard` | Dashboard empty states | AppLayout | Dashboard | Implemented | Disconnected |
| `/cases` | Assigned cases empty state and preview entry point | AppLayout | My Cases | Implemented | Disconnected |
| `/case-workspace` | Redirect to the workspace overview | AppLayout / CaseWorkspace | Preview case workspace | Implemented | No case selected |
| `/case-workspace/overview` | Case workspace shell and overview empty sections | AppLayout / CaseWorkspace | Overview | Implemented | Disconnected |
| `/case-workspace/people` | Suspects / Accused, Victims, and Witnesses empty states | AppLayout / CaseWorkspace | People | Implemented | Disconnected |
| `/case-workspace/documents` | Empty document categories | AppLayout / CaseWorkspace | Documents | Implemented | Disconnected |
| `/case-workspace/forensics` | Empty forensic report area | AppLayout / CaseWorkspace | Forensics | Implemented | Disconnected |
| `/case-workspace/evidence` | Empty evidence categories | AppLayout / CaseWorkspace | Evidence | Implemented | Disconnected |
| `/case-workspace/timeline` | Empty chronological event area | AppLayout / CaseWorkspace | Timeline | Implemented | Disconnected |
| `/case-workspace/chain-of-custody` | Empty custody history | AppLayout / CaseWorkspace | Chain of Custody | Implemented | Disconnected |
| `/case-workspace/audit-history` | Empty audit history | AppLayout / CaseWorkspace | Audit History | Implemented | Disconnected |
| `/search` | Frontend-only search layout | AppLayout | Search | Implemented | Disconnected |
| `/evidence` | Global empty evidence workspace | AppLayout | Evidence | Implemented | Disconnected |
| `/notifications` | Empty notifications page | AppLayout | Notifications | Implemented | Disconnected |
| `/profile` | Generic unavailable account placeholder | AppLayout | Profile | Implemented | Disconnected |
| `/settings` | Disabled account and security settings layout | AppLayout | Settings | Implemented | Disconnected |
| `/cases/new` | New Case local validation layout | AppLayout | My Cases preview | Implemented | No save connection |
| `/case-workspace/documents/new` | Add Document local validation layout | AppLayout / CaseWorkspace | Documents preview | Implemented | No upload connection |
| `/case-workspace/evidence/new` | Add Evidence local validation layout | AppLayout / CaseWorkspace | Evidence preview | Implemented | No upload connection |
| `/case-workspace/ai-assistant` | AI placeholder | AppLayout / CaseWorkspace | AI Assistant | Implemented | AI disconnected |
| `/case-workspace/evidence-passport` | Evidence identity and verification placeholder | AppLayout / CaseWorkspace | Evidence preview | Implemented | Verification disconnected |

## Planned routes

All requested frontend routes are implemented. No route represents authentication or a protected backend resource, and no route connects to operational data.

Unmatched routes redirect safely to `/dashboard`. Production hosting must provide an SPA fallback to `index.html` for direct navigation and refreshes.
