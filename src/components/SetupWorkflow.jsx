import React, { useState } from 'react';
import { FileText, RefreshCw, Copy, Check, Sparkles, ShieldCheck } from 'lucide-react';

const SetupWorkflow = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('<script src="https://ai-assistant.com/embed.js"></script>');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="workflow-section">
      <div className="section-heading">
        <span className="section-label">
          <Sparkles size={12} style={{ marginRight: '6px' }} />
          SETUP WORKFLOW
        </span>
        <h2>
          From your knowledge base to <span>a live AI assistant in minutes</span>
        </h2>
        <p>Simple enough to launch today, powerful enough to customize completely</p>
      </div>

      <div className="workflow-grid">
        {/* Step 1 */}
        <div className="workflow-card">
          <div className="card-top-bar">
            <div className="workflow-step">01</div>
            <span className="step-tag">Step 1</span>
          </div>
          <h3>Connect your knowledge</h3>
          <p>Import your website, docs, FAQs, and product manuals in any format</p>
          
          <div className="workflow-preview">
            <div className="preview-stack">
              <div className="preview-item">
                <div className="item-info">
                  <div className="file-icon-bg pdf-bg">
                    <FileText size={15} color="#2563eb" />
                  </div>
                  <span className="file-name">API_Spec_2026.pdf</span>
                </div>
                <span className="badge-status badge-ready">Ready</span>
              </div>

              <div className="preview-item">
                <div className="item-info">
                  <div className="file-icon-bg notion-bg">
                    <RefreshCw size={15} color="#059669" className="spin-icon" />
                  </div>
                  <span className="file-name">Notion Workspace</span>
                </div>
                <span className="badge-status badge-synced">Synced</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="workflow-card featured-card">
          <div className="card-top-bar">
            <div className="workflow-step active-step">02</div>
            <span className="step-tag tag-active">Core Setup</span>
          </div>
          <h3>Customize your AI</h3>
          <p>Define tone, personality, strict guardrails, and escalation thresholds</p>
          
          <div className="workflow-preview">
            <div className="control-group">
              <div className="setting-row">
                <span>Creativity / Temp</span>
                <span className="setting-value">0.1 (Strict)</span>
              </div>
              <div className="slider-track">
                <div className="slider-fill" style={{ width: '25%' }}></div>
                <div className="slider-thumb" style={{ left: '25%' }}></div>
              </div>

              <div className="setting-row border-top-line">
                <span className="flex-center">
                  <ShieldCheck size={14} color="#2563eb" style={{ marginRight: '6px' }} />
                  Lead Handover Gate
                </span>
                <span className="toggle-badge">Enabled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="workflow-card">
          <div className="card-top-bar">
            <div className="workflow-step">03</div>
            <span className="step-tag">Deploy</span>
          </div>
          <h3>Deploy everywhere</h3>
          <p>Embed on your site with one script tag or connect native messaging channels</p>
          
          <div className="workflow-preview">
            <div className="embed-box" onClick={handleCopy}>
              <div className="code-info">
                <span className="code-tag">&lt;/&gt;</span>
                <span className="code-text">embed.html</span>
              </div>
              <button className="copy-btn" title="Copy code">
                {copied ? <Check size={15} color="#16a34a" /> : <Copy size={15} color="#64748b" />}
              </button>
            </div>
            {copied && <span className="copied-tooltip">Copied to clipboard!</span>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupWorkflow;