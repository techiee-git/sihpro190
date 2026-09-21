import { Icon } from '../components/Icon';

function SettingRow({ title, description }) {
  return <div className="setting-row"><div><h2>{title}</h2><p>{description}</p></div><button className="toolbar-action-btn" disabled>Unavailable</button></div>;
}

export function Settings() {
  return (
    <div className="dashboard global-page">
      <div className="page-heading"><div><p className="eyebrow">ACCOUNT PREFERENCES</p><h1>Settings</h1><p className="page-subtitle">Presentation preferences are shown for future connection.</p></div></div>
      <section className="panel settings-panel" aria-labelledby="settings-heading">
        <div className="panel-heading"><div className="flex items-center gap-2.5"><Icon name="settings" size={19} /><h2 id="settings-heading">Settings</h2></div><p>Backend-dependent controls remain unavailable.</p></div>
        <div className="settings-list">
          <SettingRow title="Account and security" description="Authentication, MFA, permissions, and sessions are not connected." />
          <SettingRow title="Notifications" description="Notification delivery preferences are unavailable without a connected account." />
          <SettingRow title="Data and storage" description="Storage, encryption, and retention controls are not operational in this prototype." />
        </div>
        <div className="panel-footnote"><Icon name="info" size={14} /><span>No security or account setting can be changed from this frontend.</span></div>
      </section>
    </div>
  );
}
