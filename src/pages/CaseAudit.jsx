import { Icon } from '../components/Icon';

export function CaseAudit() {
  return (
    <div className="case-audit">
      {/* Toolbar */}
      <div className="section-toolbar">
        <div className="case-search" style={{ maxWidth: 380 }}>
          <Icon name="search" size={17} />
          <input type="search" aria-label="Search audit log" placeholder="Search audit entries" aria-describedby="audit-toolbar-help" />
        </div>
        <select aria-label="Filter by action type" disabled>
          <option>All Actions</option>
        </select>
        <select aria-label="Filter by user" disabled>
          <option>All Users</option>
        </select>
        <select aria-label="Filter by date" disabled>
          <option>All Dates</option>
        </select>
      </div>
      <p id="audit-toolbar-help" className="case-toolbar-help">Audit log search and filtering will be available once audit data is connected.</p>

      <section className="panel case-section-card" aria-label="Audit History">
        <div className="panel-heading">
          <div className="flex items-center gap-2.5">
            <Icon name="history" size={18} />
            <h2>Audit History</h2>
          </div>
          <p>A chronological view of actions performed within this case, available once audit services are connected.</p>
        </div>

        {/* Column headers */}
        <div className="audit-table-header">
          <span>Timestamp</span>
          <span>User</span>
          <span>Role</span>
          <span>Action</span>
          <span>Target</span>
          <span>IP / Device</span>
          <span>Ledger</span>
        </div>

        {/* Empty state */}
        <div className="audit-empty">
          <div className="empty-icon" style={{ margin: '42px auto 18px' }}>
            <Icon name="history" size={26} />
          </div>
          <h3 style={{ textAlign: 'center', fontSize: 12, color: '#53616c', margin: '0 0 8px' }}>No audit records available.</h3>
          <p style={{ textAlign: 'center', fontSize: 11, color: '#7e8891', lineHeight: 1.8, maxWidth: 360, margin: '0 auto 42px' }}>
            All user actions within this case will be recorded here once audit logging is connected.
          </p>
          <div className="audit-integrity-note">
            <Icon name="lock" size={13} />
            <span>Append-only audit ledger and optional blockchain anchoring are planned but not yet implemented. No audit entries have been fabricated.</span>
          </div>
        </div>

        <div className="panel-footnote">
          <Icon name="info" size={14} />
          <span>Audit log requires backend logging and an identity/access system. Planned: append-only hash-chained ledger.</span>
        </div>
      </section>

      <div className="prototype-note" style={{ marginTop: 24 }}>
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> No audit data has been introduced. Audit logging, the append-only ledger, and optional blockchain anchoring are planned for a future phase.</p>
      </div>
    </div>
  );
}
