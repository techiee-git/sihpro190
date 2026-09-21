import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';

export function Profile() {
  return (
    <div className="dashboard global-page">
      <div className="page-heading"><div><p className="eyebrow">ACCOUNT</p><h1>Profile</h1><p className="page-subtitle">Account information will appear once identity services are connected.</p></div></div>
      <section className="panel" aria-labelledby="profile-heading">
        <div className="panel-heading"><div className="flex items-center gap-2.5"><Icon name="user" size={19} /><h2 id="profile-heading">Account Information</h2></div><p>Professional identity details are unavailable in this prototype.</p></div>
        <EmptyState icon="user" title="Account information is not connected." description="Name, badge number, department, role, email, and avatar are unavailable." spacious />
        <div className="panel-footnote"><Icon name="info" size={14} /><span>No profile information is saved or displayed.</span></div>
      </section>
    </div>
  );
}
