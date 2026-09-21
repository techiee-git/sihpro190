import { Icon } from '../components/Icon';
import { EmptyState } from '../components/EmptyState';

function SummaryCard({ icon, title, description }) {
  return <article className="summary-card"><div className="flex items-center justify-between gap-3"><h2>{title}</h2><span className="summary-icon"><Icon name={icon} /></span></div><p className="summary-value" aria-label="Data unavailable">—</p><p className="summary-description">{description}</p></article>;
}

function Panel({ title, icon, description, children, className = '' }) {
  return <section className={`panel ${className}`} aria-label={title}><div className="panel-heading"><div className="flex items-center gap-2.5"><Icon name={icon} size={19} /><h2>{title}</h2></div><p>{description}</p></div>{children}</section>;
}

export function Dashboard() {
  return (
    <div className="dashboard">
      <div className="page-heading"><div><p className="eyebrow">YOUR WORKSPACE AT A GLANCE</p><h1>Dashboard</h1><p className="page-subtitle">Secure investigation workspace</p></div><div className="connection-status"><span aria-hidden="true" />Data not connected</div></div>
      <div className="summary-grid">
        <SummaryCard title="Active Cases" icon="folder" description="Cases assigned to you" />
        <SummaryCard title="Evidence Items" icon="evidence" description="Evidence across your cases" />
        <SummaryCard title="Pending Actions" icon="checklist" description="Items requiring your attention" />
      </div>
      <div className="dashboard-panels">
        <Panel title="My Cases" icon="folder" description="Your assigned investigations, in one place." className="cases-panel"><EmptyState icon="folder" title="No assigned cases available." description="Your assigned cases will appear here once case data is connected." spacious /><div className="panel-footnote"><Icon name="info" size={15} /><span>Case information is not connected in this prototype.</span></div></Panel>
        <Panel title="Pending Actions" icon="checklist" description="Keep track of what needs attention."><EmptyState icon="checklist" title="No pending actions available." description="Actions will appear here once case data is connected." /></Panel>
        <Panel title="Recent Activity" icon="clock" description="Updates from your investigation workspace." className="activity-panel"><EmptyState icon="clock" title="No recent activity available." description="Case activity will appear here once activity data is connected." /></Panel>
      </div>
      <div className="prototype-note"><Icon name="info" size={18} /><p><strong>A foundation for your investigation workspace.</strong> This frontend prototype is not connected to live data or security services.</p></div>
    </div>
  );
}
