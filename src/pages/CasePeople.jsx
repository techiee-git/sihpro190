import { useState } from 'react';
import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';

const PEOPLE_CATEGORIES = [
  { key: 'suspects', icon: 'user', title: 'Suspects / Accused', description: 'Persons accused or under investigation in this case.' },
  { key: 'victims', icon: 'user', title: 'Victims', description: 'Persons identified as victims in this case.' },
  { key: 'witnesses', icon: 'user', title: 'Witnesses', description: 'Persons who have provided or may provide testimony.' },
];

function PeopleCategory({ icon, title, description }) {
  return (
    <section className="panel case-section-card" aria-label={title}>
      <div className="panel-heading">
        <div className="flex items-center gap-2.5">
          <Icon name={icon} size={18} />
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
      <EmptyState icon={icon} title={`No ${title.toLowerCase()} records available.`} description={`${title} will be listed here once case data is connected.`} />
      <div className="panel-footnote">
        <Icon name="info" size={14} />
        <span>{title} records will populate from connected case data.</span>
      </div>
    </section>
  );
}

export function CasePeople() {
  const [selectedCategory, setSelectedCategory] = useState(PEOPLE_CATEGORIES[0].key);
  const category = PEOPLE_CATEGORIES.find(({ key }) => key === selectedCategory);
  const categoryProps = { icon: category.icon, title: category.title, description: category.description };

  return (
    <div className="case-people">
      {/* Search / filter toolbar */}
      <div className="section-toolbar">
        <div className="case-search" style={{ maxWidth: 380 }}>
          <Icon name="search" size={17} />
          <input type="search" aria-label="Search people" placeholder="Search people in this case" aria-describedby="people-toolbar-help" />
        </div>
        <select aria-label="Filter by role" disabled>
          <option>All Roles</option>
        </select>
        <button className="toolbar-action-btn" disabled aria-label="Add person (unavailable)">
          <Icon name="user" size={16} />
          <span>Add Person</span>
          <span className="planned-label">Planned</span>
        </button>
      </div>
      <p id="people-toolbar-help" className="case-toolbar-help">People search and management will be available once case data is connected.</p>

      <div className="people-tabs" role="tablist" aria-label="People categories">
        {PEOPLE_CATEGORIES.map(({ key, icon, title }) => (
          <button
            key={key}
            id={`people-tab-${key}`}
            className={`people-tab${selectedCategory === key ? ' active' : ''}`}
            role="tab"
            aria-selected={selectedCategory === key}
            aria-controls="people-category-panel"
            onClick={() => setSelectedCategory(key)}
          >
            <Icon name={icon} size={16} />
            <span>{title}</span>
          </button>
        ))}
      </div>

      <div id="people-category-panel" role="tabpanel" aria-labelledby={`people-tab-${selectedCategory}`}>
        <PeopleCategory {...categoryProps} />
      </div>

      <div className="prototype-note" style={{ marginTop: 24 }}>
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> People records are not connected. No personal data has been introduced.</p>
      </div>
    </div>
  );
}
