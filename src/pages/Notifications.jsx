import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';

export function Notifications() {
  return (
    <div className="dashboard global-page">
      <div className="page-heading"><div><p className="eyebrow">WORKSPACE UPDATES</p><h1>Notifications</h1><p className="page-subtitle">Updates related to your connected workspace will appear here.</p></div></div>
      <section className="panel" aria-labelledby="notifications-heading">
        <div className="panel-heading"><div className="flex items-center gap-2.5"><Icon name="history" size={19} /><h2 id="notifications-heading">Notifications</h2></div><p>No notification service is connected.</p></div>
        <EmptyState icon="history" title="No notifications available." description="Notifications will appear here once workspace services are connected." spacious />
        <div className="panel-footnote"><Icon name="info" size={14} /><span>There are no notifications or unread counts to manage.</span></div>
      </section>
    </div>
  );
}
