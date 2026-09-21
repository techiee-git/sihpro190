import { useState } from 'react';
import { Icon } from '../components/Icon';
import { EmptyState } from '../components/EmptyState';

const FILTER_TYPES = ['Cases', 'People', 'Documents', 'Evidence', 'Forensics'];

export function Search() {
  const [query, setQuery] = useState('');
  const [activeType, setActiveType] = useState('All');

  return (
    <div className="dashboard search-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">WORKSPACE SEARCH</p>
          <h1>Search</h1>
          <p className="page-subtitle">Search across cases, people, documents, and evidence.</p>
        </div>
        <div className="connection-status"><span aria-hidden="true" />Data not connected</div>
      </div>

      {/* Search input */}
      <div className="search-input-row" role="search" aria-label="Workspace search">
        <div className="search-input-wrap">
          <Icon name="search" size={20} />
          <input
            type="search"
            aria-label="Search the workspace"
            placeholder="Search cases, people, documents, evidence…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-describedby="search-help"
          />
          {query && (
            <button
              className="search-clear-btn"
              aria-label="Clear search"
              onClick={() => setQuery('')}
            >
              <Icon name="xmark" size={16} />
            </button>
          )}
        </div>
        <button className="search-submit-btn" disabled aria-label="Search (unavailable — data not connected)" aria-describedby="search-help">
          Search
        </button>
      </div>
      <p id="search-help" className="case-toolbar-help">Semantic search will be available once case data and the search backend are connected. Local filtering of live records is not available in this prototype.</p>

      {/* Type filters */}
      <div className="search-type-filters" role="group" aria-label="Filter by type">
        {['All', ...FILTER_TYPES].map(type => (
          <button
            key={type}
            className={`search-type-chip${activeType === type ? ' active' : ''}`}
            onClick={() => setActiveType(type)}
            aria-pressed={activeType === type}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Results area */}
      <section className="panel search-results-panel" aria-label="Search results" aria-live="polite">
        <div className="panel-heading">
          <div className="flex items-center gap-2.5">
            <Icon name="search" size={18} />
            <h2>Search Results</h2>
          </div>
          <p>Results across {activeType === 'All' ? 'all categories' : activeType.toLowerCase()} will appear here once connected.</p>
        </div>

        {query ? (
          <EmptyState
            icon="search"
            title="No search results to display."
            description="Search results will appear here once case data and the search backend are connected."
            spacious
          />
        ) : (
          <EmptyState
            icon="search"
            title="Enter a search query above."
            description="Search across cases, people, documents, and evidence in your workspace."
            spacious
          />
        )}

        <div className="panel-footnote">
          <Icon name="info" size={14} />
          <span>Planned: semantic search using PostgreSQL + pgvector. Search is not connected in this prototype.</span>
        </div>
      </section>

      <div className="prototype-note">
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> Search is not connected to a backend. No search queries are executed and no results are fabricated.</p>
      </div>
    </div>
  );
}
