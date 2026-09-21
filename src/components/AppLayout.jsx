import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Icon } from './Icon';

const SECTION_LABELS = {
  'chain-of-custody': 'Chain of Custody',
  'audit-history': 'Audit History',
  'evidence-passport': 'Evidence Passport',
  'ai-assistant': 'AI Assistant',
};

function sectionLabel(value) {
  return SECTION_LABELS[value] || value.replaceAll('-', ' ').replace(/\b\w/g, character => character.toUpperCase());
}

function PlannedNav({ icon, children }) {
  return (
    <button className="nav-item planned" disabled title={`${children} is not implemented yet`}>
      <Icon name={icon} />
      <span>{children}</span>
      <span className="planned-label">Planned</span>
    </button>
  );
}

function useBreadcrumb(pathname) {
  // /case-workspace/overview → Workspace / My Cases / Case Workspace
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'case-workspace') {
    if (parts[1] === 'documents' && parts[2] === 'new') return [{ label: 'My Cases', to: '/cases' }, { label: 'Case Workspace' }, { label: 'Documents' }, { label: 'Add Document' }];
    if (parts[1] === 'evidence' && parts[2] === 'new') return [{ label: 'My Cases', to: '/cases' }, { label: 'Case Workspace' }, { label: 'Evidence' }, { label: 'Add Evidence' }];
    const section = parts[1] && parts[1] !== 'overview' ? sectionLabel(parts[1]) : null;
    return [
      { label: 'My Cases', to: '/cases' },
      { label: 'Case Workspace' },
      ...(section ? [{ label: section }] : []),
    ];
  }
  if (parts[0] === 'cases') return parts[1] === 'new'
    ? [{ label: 'My Cases', to: '/cases' }, { label: 'New Case' }]
    : [{ label: 'My Cases' }];
  if (parts[0] === 'search') return [{ label: 'Search' }];
  if (parts[0] === 'evidence') return [{ label: 'Evidence' }];
  if (parts[0] === 'notifications') return [{ label: 'Notifications' }];
  if (parts[0] === 'profile') return [{ label: 'Profile' }];
  if (parts[0] === 'settings') return [{ label: 'Settings' }];
  return [{ label: 'Dashboard' }];
}

function usePageTitle(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'case-workspace') {
    if (parts[1] === 'documents' && parts[2] === 'new') return 'Add Document | Case Workspace';
    if (parts[1] === 'evidence' && parts[2] === 'new') return 'Add Evidence | Case Workspace';
    const section = parts[1] && parts[1] !== 'overview' ? sectionLabel(parts[1]) : 'Overview';
    return `${section} | Case Workspace`;
  }
  if (parts[0] === 'cases') return parts[1] === 'new' ? 'New Case | Case Workspace' : 'My Cases | Case Workspace';
  if (parts[0] === 'search') return 'Search | Case Workspace';
  if (parts[0] === 'evidence') return 'Evidence | Case Workspace';
  if (parts[0] === 'notifications') return 'Notifications | Case Workspace';
  if (parts[0] === 'profile') return 'Profile | Case Workspace';
  if (parts[0] === 'settings') return 'Settings | Case Workspace';
  return 'Dashboard | Case Workspace';
}

export function AppLayout() {
  const { pathname } = useLocation();
  const crumbs = useBreadcrumb(pathname);
  const title = usePageTitle(pathname);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="app-layout">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><Icon name="shield" size={26} /></div>
          <div>
            <span className="brand-title">Case Workspace</span>
            <span className="brand-subtitle">CASE &amp; EVIDENCE MANAGEMENT</span>
          </div>
        </div>

        <div className="sidebar-main">
          <p className="nav-caption">WORKSPACE</p>
          <nav aria-label="Main navigation">
            <NavLink className="nav-item" to="/dashboard">
              <Icon name="dashboard" /><span>Dashboard</span><span className="active-dot" />
            </NavLink>
            <NavLink className="nav-item" to="/cases" end>
              <Icon name="folder" /><span>My Cases</span><span className="active-dot" />
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
              to="/search"
            >
              <Icon name="search" /><span>Search</span><span className="active-dot" />
            </NavLink>
            <NavLink className="nav-item" to="/evidence">
              <Icon name="evidence" /><span>Evidence</span><span className="active-dot" />
            </NavLink>
            <NavLink className="nav-item" to="/notifications">
              <Icon name="history" /><span>Notifications</span><span className="active-dot" />
            </NavLink>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="workspace-note">
            <Icon name="shield" size={23} />
            <p>One workspace.<br /><strong>A clearer case picture.</strong></p>
            <span>A foundation for connected investigations.</span>
          </div>
          <nav className="account-nav" aria-label="Account navigation">
            <NavLink className="nav-item" to="/profile"><Icon name="user" /><span>Profile</span><span className="active-dot" /></NavLink>
            <NavLink className="nav-item" to="/settings"><Icon name="settings" /><span>Settings</span><span className="active-dot" /></NavLink>
          </nav>
          <div className="sidebar-footer">FRONTEND PROTOTYPE <span>SIH PROJECT</span></div>
        </div>
      </aside>

      <div className="main-column">
        <header className="top-header">
          <div className="breadcrumb">
            <span>Workspace</span>
            {crumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-3.5">
                <span aria-hidden="true">/</span>
                {crumb.to
                  ? <NavLink to={crumb.to} className="breadcrumb-link">{crumb.label}</NavLink>
                  : <strong>{crumb.label}</strong>
                }
              </span>
            ))}
          </div>
          <span className="prototype-badge">UI prototype</span>
        </header>

        <main id="main-content" tabIndex={-1}><Outlet /></main>

        <footer className="main-footer">
          <span>Secure Digital Case &amp; Evidence Management System</span>
          <span>Built around the investigation.</span>
        </footer>
      </div>
    </div>
  );
}
