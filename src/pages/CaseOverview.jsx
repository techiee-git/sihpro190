import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';

function MetaField({ label, children }) {
  return (
    <div className="meta-field">
      <span className="meta-label">{label}</span>
      <span className="meta-value">{children || '—'}</span>
    </div>
  );
}

function SectionCard({ icon, title, description, children, footnote }) {
  return (
    <section className="panel case-section-card" aria-label={title}>
      <div className="panel-heading">
        <div className="flex items-center gap-2.5">
          <Icon name={icon} size={18} />
          <h2>{title}</h2>
        </div>
        {description && <p>{description}</p>}
      </div>
      {children}
      {footnote && (
        <div className="panel-footnote">
          <Icon name="info" size={14} />
          <span>{footnote}</span>
        </div>
      )}
    </section>
  );
}

export function CaseOverview() {
  return (
    <div className="case-overview">
      <SectionCard icon="flag" title="Case Information" description="Core identifiers and status for this investigation." footnote="Case metadata will populate once a real case record is connected.">
        <div className="meta-grid">
          <MetaField label="Case ID" />
          <MetaField label="FIR Number" />
          <MetaField label="Case Type" />
          <MetaField label="Status" />
          <MetaField label="Registered Date" />
          <MetaField label="Jurisdiction" />
          <MetaField label="Investigating Officer" />
          <MetaField label="Assigned Unit" />
        </div>
      </SectionCard>

      <div className="overview-grid">
        <SectionCard icon="document" title="Investigation Summary" description="A connected summary of the investigation." footnote="No case selected. A summary is unavailable.">
          <EmptyState icon="document" title="No case selected." description="Investigation summary will appear here once a case is connected." />
        </SectionCard>
        <SectionCard icon="checklist" title="Pending Actions" description="Items that require attention in this case." footnote="Actions will appear once task data is connected.">
          <EmptyState icon="checklist" title="No pending actions." description="Actions requiring attention will appear here once connected." />
        </SectionCard>
      </div>

      <div className="prototype-note">
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> All sections show empty states. No case data has been connected.</p>
      </div>
    </div>
  );
}
