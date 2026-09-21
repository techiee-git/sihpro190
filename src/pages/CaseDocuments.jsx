import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';

const DOC_CATEGORIES = [
  { key: 'fir',        icon: 'document', title: 'First Information Report (FIR)',   description: 'The originating complaint document for this case.' },
  { key: 'statements', icon: 'document', title: 'Statements',                        description: 'Witness and victim statements collected during the investigation.' },
  { key: 'chargesheet',icon: 'document', title: 'Charge Sheet',                      description: 'Formal charges filed against accused persons.' },
  { key: 'legal',      icon: 'document', title: 'Legal Documents',                   description: 'Court orders, warrants, bail documents, and other legal filings.' },
  { key: 'reports',    icon: 'document', title: 'Reports',                            description: 'Forensic, medical, and investigative reports.' },
];

export function CaseDocuments() {
  return (
    <div className="case-documents">
      {/* Toolbar */}
      <div className="section-toolbar">
        <div className="case-search" style={{ maxWidth: 380 }}>
          <Icon name="search" size={17} />
          <input type="search" aria-label="Search documents" placeholder="Search documents in this case" aria-describedby="docs-toolbar-help" />
        </div>
        <select aria-label="Filter by type" disabled>
          <option>All Types</option>
        </select>
        <button className="toolbar-action-btn" disabled aria-label="Upload document (unavailable)">
          <Icon name="document" size={16} />
          <span>Upload Document</span>
          <span className="planned-label">Planned</span>
        </button>
      </div>
      <p id="docs-toolbar-help" className="case-toolbar-help">Document upload and management will be available once file storage is connected.</p>

      {/* Document category panels */}
      <div className="doc-categories">
        {DOC_CATEGORIES.map(({ key, icon, title, description }) => (
          <section key={key} className="panel case-section-card" aria-label={title}>
            <div className="panel-heading">
              <div className="flex items-center gap-2.5">
                <Icon name={icon} size={18} />
                <h2>{title}</h2>
              </div>
              <p>{description}</p>
            </div>
            <EmptyState icon={icon} title="No documents available." description="Documents will appear here once file storage is connected." />
            <div className="panel-footnote">
              <Icon name="info" size={14} />
              <span>Document records will be listed once connected to file storage and case data.</span>
            </div>
          </section>
        ))}
      </div>

      <div className="prototype-note" style={{ marginTop: 24 }}>
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> Document upload is not connected. No file storage has been configured.</p>
      </div>
    </div>
  );
}
