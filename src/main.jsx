import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { MyCases } from './pages/MyCases';
import { CaseWorkspace } from './pages/CaseWorkspace';
import { CaseOverview } from './pages/CaseOverview';
import { CasePeople } from './pages/CasePeople';
import { CaseDocuments } from './pages/CaseDocuments';
import { CaseForensics } from './pages/CaseForensics';
import { CaseEvidence } from './pages/CaseEvidence';
import { CaseTimeline } from './pages/CaseTimeline';
import { CaseCustody } from './pages/CaseCustody';
import { CaseAudit } from './pages/CaseAudit';
import { CaseAI } from './pages/CaseAI';
import { EvidencePassport } from './pages/EvidencePassport';
import { GlobalEvidence } from './pages/GlobalEvidence';
import { Notifications } from './pages/Notifications';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { NewCase } from './pages/NewCase';
import { DocumentNew } from './pages/DocumentNew';
import { EvidenceNew } from './pages/EvidenceNew';
import { Search } from './pages/Search';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cases" element={<MyCases />} />
          <Route path="/cases/new" element={<NewCase />} />
          <Route path="/search" element={<Search />} />
          <Route path="/evidence" element={<GlobalEvidence />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          {/* Case workspace preview — connected sections remain frontend-only */}
          <Route path="/case-workspace" element={<CaseWorkspace />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview"  element={<CaseOverview />} />
            <Route path="people" element={<CasePeople />} />
            <Route path="documents" element={<CaseDocuments />} />
            <Route path="documents/new" element={<DocumentNew />} />
            <Route path="forensics" element={<CaseForensics />} />
            <Route path="evidence" element={<CaseEvidence />} />
            <Route path="evidence/new" element={<EvidenceNew />} />
            <Route path="evidence-passport" element={<EvidencePassport />} />
            <Route path="timeline" element={<CaseTimeline />} />
            <Route path="chain-of-custody" element={<CaseCustody />} />
            <Route path="ai-assistant" element={<CaseAI />} />
            <Route path="audit-history" element={<CaseAudit />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
