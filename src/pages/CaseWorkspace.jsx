import { NavLink, Outlet, Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

const CASE_TABS = [
  { to: 'overview', icon: 'dashboard', label: 'Overview' },
  { to: 'people', icon: 'people', label: 'People' },
  { to: 'documents', icon: 'document', label: 'Documents' },
  { to: 'evidence', icon: 'evidence', label: 'Evidence' },
  { to: 'forensics', icon: 'microscope', label: 'Forensics' },
  { to: 'timeline', icon: 'timeline', label: 'Timeline' },
  { to: 'chain-of-custody', icon: 'chain', label: 'Chain of Custody' },
  { to: 'ai-assistant', icon: 'sparkle', label: 'AI Assistant' },
  { to: 'audit-history', icon: 'history', label: 'Audit History' },
];

export function CaseWorkspace() {
  return (
    <div className="case-workspace">
      <div className="case-workspace-header">
        <div className="case-workspace-meta">
          <p className="eyebrow">CASE WORKSPACE</p>
          <h1 className="case-workspace-title">
            <Icon name="folder" size={22} />
            <span>Case Workspace</span>
          </h1>
          <p className="page-subtitle">No case selected. Case information is unavailable until a connected case is selected.</p>
        </div>
        <div className="case-workspace-badges">
          <span className="connection-status"><span aria-hidden="true" />Data not connected</span>
        </div>
      </div>

      <nav className="case-tabs" aria-label="Case sections">
        {CASE_TABS.map(({ to, icon, label }) => to ? (
          <NavLink key={label} to={to} end className={({ isActive }) => `case-tab${isActive ? ' active' : ''}`}>
            <Icon name={icon} size={16} />
            <span>{label}</span>
          </NavLink>
        ) : (
          <span key={label} className="case-tab planned-tab" aria-label={`${label}, planned`}>
            <Icon name={icon} size={16} />
            <span>{label}</span>
            <span className="planned-label">Planned</span>
          </span>
        ))}
      </nav>

      <Link className="back-to-cases" to="/cases">
        <Icon name="chevronLeft" size={16} />
        <span>Back to My Cases</span>
      </Link>

      <div className="case-section-content">
        <Outlet />
      </div>
    </div>
  );
}
