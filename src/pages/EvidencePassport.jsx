import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';

export function EvidencePassport() {
  return <div className="case-evidence-passport"><section className="panel" aria-labelledby="passport-heading"><div className="panel-heading"><div className="flex items-center gap-2.5"><Icon name="fingerprint" size={19} /><h2 id="passport-heading">Evidence Passport</h2></div><p>Identity and verification details for a selected evidence item.</p></div><EmptyState icon="fingerprint" title="No evidence selected." description="Select a connected evidence item to view its metadata. No evidence is selected in this prototype." spacious /><div className="passport-metadata"><span>Evidence identity</span><strong>—</strong><span>Hash available</span><strong>—</strong><span>Custody data</span><strong>—</strong></div><div className="panel-footnote"><Icon name="info" size={14} /><span>Verification is not connected. This placeholder does not establish integrity, encryption, signatures, or trust.</span></div></section><button className="toolbar-action-btn" disabled><Icon name="fingerprint" size={16} />Verification unavailable</button></div>;
}
