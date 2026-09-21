import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';

export function CaseForensics() {
  return (
    <div className="case-forensics">
      <div className="section-toolbar">
        <div className="case-search" style={{ maxWidth: 380 }}>
          <Icon name="search" size={17} />
          <input type="search" aria-label="Search forensic reports" placeholder="Search forensic reports" aria-describedby="forensics-toolbar-help" />
        </div>
        <select aria-label="Filter by report type" disabled>
          <option>All Report Types</option>
        </select>
        <button className="toolbar-action-btn" disabled aria-label="Add forensic report (unavailable)">
          <Icon name="microscope" size={16} />
          <span>Add Report</span>
          <span className="planned-label">Planned</span>
        </button>
      </div>
      <p id="forensics-toolbar-help" className="case-toolbar-help">Forensic report management will be available once laboratory and file storage integrations are connected.</p>

      <section className="panel case-section-card" aria-label="Forensic Reports">
        <div className="panel-heading">
          <div className="flex items-center gap-2.5">
            <Icon name="microscope" size={18} />
            <h2>Forensic Reports</h2>
          </div>
          <p>Laboratory analysis, autopsy, toxicology, digital forensics, and scene examination reports.</p>
        </div>
        {/* Column headers */}
        <div className="evidence-table-header">
          <span>Report ID</span>
          <span>Report Type</span>
          <span>Submitted By</span>
          <span>Date</span>
          <span>Status</span>
          <span aria-label="Actions" />
        </div>
        <EmptyState icon="microscope" title="No forensic reports available." description="Forensic reports will appear here once laboratory integrations are connected." spacious />
        <div className="panel-footnote">
          <Icon name="info" size={14} />
          <span>Forensic data will populate once laboratory and document systems are connected.</span>
        </div>
      </section>

      <div className="prototype-note" style={{ marginTop: 24 }}>
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> Forensic report storage and laboratory integration are not connected.</p>
      </div>
    </div>
  );
}
