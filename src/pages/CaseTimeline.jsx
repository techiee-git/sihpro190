import { Icon } from '../components/Icon';

export function CaseTimeline() {
  return (
    <div className="case-timeline">
      {/* Controls */}
      <div className="section-toolbar">
        <div className="case-search" style={{ maxWidth: 380 }}>
          <Icon name="search" size={17} />
          <input type="search" aria-label="Filter timeline events" placeholder="Filter events" aria-describedby="timeline-toolbar-help" />
        </div>
        <select aria-label="Filter event type" disabled>
          <option>All Event Types</option>
        </select>
        <select aria-label="Filter date range" disabled>
          <option>All Dates</option>
        </select>
      </div>
      <p id="timeline-toolbar-help" className="case-toolbar-help">Timeline events will be available once case event data is connected.</p>

      <section className="panel case-section-card" aria-label="Investigation Timeline">
        <div className="panel-heading">
          <div className="flex items-center gap-2.5">
            <Icon name="timeline" size={18} />
            <h2>Investigation Timeline</h2>
          </div>
          <p>A chronological record of events, actions, and updates in this investigation.</p>
        </div>

        {/* Timeline shell — vertical rail */}
        <div className="timeline-shell">
          <div className="timeline-empty">
            <div className="timeline-rail" aria-hidden="true" />
            <div className="timeline-empty-message">
              <div className="empty-icon">
                <Icon name="timeline" size={26} />
              </div>
              <h3>No timeline events available.</h3>
              <p>Chronological investigation events will appear here once event data is connected.</p>
            </div>
          </div>
        </div>

        <div className="panel-footnote">
          <Icon name="info" size={14} />
          <span>Timeline events will populate from connected case activity and event data.</span>
        </div>
      </section>

      <div className="prototype-note" style={{ marginTop: 24 }}>
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> No event data has been introduced. Timeline requires case event data from the backend.</p>
      </div>
    </div>
  );
}
