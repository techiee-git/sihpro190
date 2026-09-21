import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';

const EVIDENCE_TYPES = [
  { key: 'video',    icon: 'video',      label: 'Video / CCTV',        description: 'Video recordings and CCTV footage.' },
  { key: 'images',   icon: 'photo',      label: 'Images',              description: 'Photographic evidence from the scene and investigation.' },
  { key: 'audio',    icon: 'audio',      label: 'Audio',               description: 'Audio recordings and call data.' },
  { key: 'digital',  icon: 'hardDrive',  label: 'Digital Evidence',    description: 'Digital forensics artifacts: device data, emails, logs.' },
  { key: 'physical', icon: 'tag',        label: 'Physical Evidence',   description: 'Metadata records for physical items catalogued from the scene.' },
];

function EvidenceTypePanel({ icon, label, description }) {
  return (
    <section className="panel case-section-card evidence-type-panel" aria-label={label}>
      <div className="panel-heading">
        <div className="flex items-center gap-2.5">
          <Icon name={icon} size={18} />
          <h2>{label}</h2>
        </div>
        <p>{description}</p>
      </div>
      {/* Column headers — ready for real rows */}
      <div className="evidence-table-header">
        <span>Evidence ID</span>
        <span>Description</span>
        <span>Collected By</span>
        <span>Collected</span>
        <span>Integrity</span>
        <span aria-label="Actions" />
      </div>
      <EmptyState icon={icon} title={`No ${label} evidence available.`} description="Evidence items will appear here once records are connected." />
      <div className="panel-footnote">
        <Icon name="info" size={14} />
        <span>Evidence records will populate once connected to storage and case data. Integrity status requires backend verification.</span>
      </div>
    </section>
  );
}

export function CaseEvidence() {
  return (
    <div className="case-evidence">
      {/* Toolbar */}
      <div className="section-toolbar">
        <div className="case-search" style={{ maxWidth: 380 }}>
          <Icon name="search" size={17} />
          <input type="search" aria-label="Search evidence" placeholder="Search evidence in this case" aria-describedby="evidence-toolbar-help" />
        </div>
        <select aria-label="Filter by type" disabled>
          <option>All Types</option>
        </select>
        <select aria-label="Filter by integrity status" disabled>
          <option>All Statuses</option>
        </select>
        <button className="toolbar-action-btn" disabled aria-label="Add evidence item (unavailable)">
          <Icon name="evidence" size={16} />
          <span>Add Evidence</span>
          <span className="planned-label">Planned</span>
        </button>
      </div>
      <p id="evidence-toolbar-help" className="case-toolbar-help">Evidence management, upload, and integrity verification will be available once backend services are connected.</p>
      <Link className="preview-workspace-link" to="/case-workspace/evidence-passport">
        <Icon name="fingerprint" size={16} />
        <span>Preview evidence passport</span>
        <Icon name="arrowRight" size={15} />
      </Link>

      {/* Evidence type panels */}
      <div className="evidence-types">
        {EVIDENCE_TYPES.map(({ key, icon, label, description }) => (
          <EvidenceTypePanel key={key} icon={icon} label={label} description={description} />
        ))}
      </div>

      <div className="prototype-note" style={{ marginTop: 24 }}>
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> Evidence records, file storage, and integrity verification are not connected. No evidence data has been introduced.</p>
      </div>
    </div>
  );
}
