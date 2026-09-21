import { Icon } from '../components/Icon';

export function CaseAI() {
  return (
    <div className="case-ai">
      {/* Unavailability notice */}
      <div className="ai-unavailable-notice">
        <div className="ai-notice-icon">
          <Icon name="sparkle" size={26} />
        </div>
        <div>
          <h2>AI Case Assistant</h2>
          <p>AI case assistance will be available once AI services and authorized case data are connected.</p>
          <div className="ai-capabilities-list">
            {[
              'Case Brief generation',
              'Case Q&A',
              'Timeline analysis assistance',
              'Entity and relationship insights',
              'Pending-action summaries',
              'Smart case handover support',
            ].map(cap => (
              <span key={cap} className="ai-capability-chip">
                <Icon name="sparkle" size={12} />
                {cap}
              </span>
            ))}
          </div>
          <p className="ai-notice-footnote">
            <Icon name="lock" size={13} />
            AI must use only authorized case sources. AI must not modify original evidence or make determinations of guilt.
          </p>
        </div>
      </div>

      {/* Conversation shell — visually ready but non-functional */}
      <div className="ai-conversation-shell">
        <div className="ai-conversation-area">
          <div className="ai-empty-conversation">
            <Icon name="sparkle" size={30} />
            <p>No conversation yet. AI services are not connected in this prototype.</p>
          </div>
        </div>
        <div className="ai-input-row">
          <div className="ai-input-field">
            <input
              type="text"
              placeholder="Ask a question about this case…"
              aria-label="AI case assistant input (unavailable)"
              disabled
              aria-describedby="ai-input-help"
            />
          </div>
          <button className="ai-send-btn" disabled aria-label="Send (unavailable)">
            <Icon name="arrowRight" size={18} />
          </button>
        </div>
        <p id="ai-input-help" className="case-toolbar-help" style={{ marginTop: 8 }}>
          AI case assistance is not connected. No AI responses will be generated in this prototype.
        </p>
      </div>

      <div className="prototype-note" style={{ marginTop: 24 }}>
        <Icon name="info" size={17} />
        <p><strong>Frontend prototype.</strong> AI services are not connected. No AI responses, generated text, or simulated answers have been introduced. Planned: OCR, NLP, embeddings, RAG/LLM using authorized case data.</p>
      </div>
    </div>
  );
}
