import { Icon } from './Icon';

export function EmptyState({ icon, title, description, spacious = false }) {
  return <div className={`empty-state ${spacious ? 'spacious' : ''}`}><div className="empty-icon"><Icon name={icon} size={27} /></div><h3>{title}</h3><p>{description}</p></div>;
}
