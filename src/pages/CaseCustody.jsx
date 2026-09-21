import { Icon } from '../components/Icon';

const CUSTODY_EVENT_TYPES = ['Collected', 'Transferred', 'Received', 'Verified', 'Returned'];

export function CaseCustody() {
  return (
    <div className="case-custody">
      {/* Toolbar */}
      <div className="section-toolbar">
        <div className="case-search" style={{ maxWidth: 380 }}>
          <Icon name="search" size={17} />
          <input type="search" aria-label="Search custody records" placeholder="Search by evidence ID or custodian" aria-describedby="custody-toolbar-help" />
        </div>
        <select aria-label="Filter by evidence item" disabled>
          <option>All Evidence Items</option>
        </select>
        <select aria-label="Filter by event type" disabled>
          <option>All Event Types</option>
        </select>
      </div>
      <p id="custody-toolbar-help" className="case-toolbar-help">Chain-of-custody records will be available once evidence and custody data are connected.</p>

      {/* Legend */}
      <div className="custody-legend">
        <span className="custody-legend-title">Event Types</span>
        {CUSTODY_EVENT_TYPES.map(t => (
          <span key={t} className="custody-event-type-chip">{t}</span>
        ))}
      </div>

      <section className="panel case-section-card" aria-label="Chain of Custody">
        <div className="panel-heading">
          <div className="flex items-center gap-2.5">
            <Icon name="chain" size={18} />
            <h2>Chain of Custody</h2>
          </div>
          <p>A complete, auditable record of every person who handled or had access to each evidence item.</p>
        </div>

        {/* Column headers */}
        <div className="custody-table-header">
          <span>Evidence ID</span>
          <span>Event</span>
          <span>From</span>
          <span>To</span>
          <span>Date / Time</span>
          <span>Notes</span>
          <span>Integrity</span>
        </div>

        {/* Empty state */}
        <div className="custody-empty">
          <div className="timeline-rail" aria-hidden="true" />
          <div className="timeline-empty-message">
            <div className="empty-icon">
              <Icon name="chain" size={26} />
            </div>
            <h3>No custody records available.</h3>
            <p>Chain-of-custody history will appear here once evidence custody data is connected.</p>
            <p className="custody-integrity-note">
              <Icon name="lock" size={13} />
              Integrity verification requires backend implementation. No verification status is shown in this prototype.
            </p>
          </div>
        </div>

        <div className="panel-footnote">
          <Icon name="info" size={14} />
          <span>Chain-of-custody records require connected evidence and personnel data. Integrity status requires SHA-256 backend.</span>
        </div>
      </section>

      <div className="prototype-note" style={{ marginTop: 24 }}>
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> No custody records exist. Integrity verification (SHA-256), encryption, and audit ledger are planned but not yet implemented.</p>
      </div>
    </div>
  );
}
