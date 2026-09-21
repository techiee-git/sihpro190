import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';

export function MyCases() {
  return (
    <div className="dashboard my-cases-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">CASE WORKSPACE</p>
          <h1>My Cases</h1>
          <p className="page-subtitle">Cases assigned to you will appear here.</p>
        </div>
        <div className="connection-status"><span aria-hidden="true" />Data not connected</div>
      </div>

      <div className="case-toolbar" role="group" aria-label="Case search and filters" aria-describedby="case-toolbar-help">
        <div className="case-search">
          <Icon name="search" size={18} />
          <input type="search" aria-label="Search cases" placeholder="Search cases" aria-describedby="case-toolbar-help" />
        </div>
        <select aria-label="Filter cases" disabled><option>All Cases</option></select>
        <select aria-label="Sort cases" disabled><option>Recently Updated</option></select>
      </div>
      <p id="case-toolbar-help" className="case-toolbar-help">Search, filtering, and sorting will be available once case data is connected.</p>

      <Link className="preview-workspace-link" to="/case-workspace">
        <Icon name="folder" size={17} />
        <span>Preview case workspace</span>
        <Icon name="arrowRight" size={16} />
      </Link>
      <Link className="preview-workspace-link secondary-preview-link" to="/cases/new">
        <Icon name="document" size={17} />
        <span>Preview new case form</span>
        <Icon name="arrowRight" size={16} />
      </Link>

      <section className="panel case-list-panel" aria-labelledby="case-list-heading">
        <div className="panel-heading">
          <div className="flex items-center gap-2.5"><Icon name="folder" size={19} /><h2 id="case-list-heading">My Cases</h2></div>
          <p>Your assigned investigations, in one place.</p>
        </div>
        <EmptyState icon="folder" title="No assigned cases available" description="Your assigned cases will appear here once case data is connected." />
        <div className="panel-footnote"><Icon name="info" size={15} /><span>Case information is not connected in this prototype.</span></div>
      </section>
    </div>
  );
}
