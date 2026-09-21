import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';

export function GlobalEvidence() {
  return (
    <div className="dashboard global-page">
      <div className="page-heading">
        <div><p className="eyebrow">WORKSPACE EVIDENCE</p><h1>Evidence</h1><p className="page-subtitle">Evidence across connected investigations will appear here.</p></div>
        <div className="connection-status"><span aria-hidden="true" />Data not connected</div>
      </div>
      <section className="panel" aria-labelledby="global-evidence-heading">
        <div className="panel-heading"><div className="flex items-center gap-2.5"><Icon name="evidence" size={19} /><h2 id="global-evidence-heading">Evidence Workspace</h2></div><p>Review evidence only after case and storage services are connected.</p></div>
        <EmptyState icon="evidence" title="No evidence available." description="Evidence from connected cases will appear here. No evidence records are available in this prototype." spacious />
        <div className="panel-footnote"><Icon name="info" size={14} /><span>Global evidence search and management are not connected.</span></div>
      </section>
      <div className="prototype-note"><Icon name="info" size={17} /><p><strong>Frontend prototype.</strong> No evidence is associated with a real case or stored locally.</p></div>
    </div>
  );
}
