import React from 'react';

function Hero({ onSignUpClick }) {
  return (
    <section className="hero">
      <div className="hero-glow"></div>

      <div className="container hero-container">

        <div className="hero-content">

          <h1>
            Build smarter
            <br />
            <span>Work faster </span>
          </h1>

          <p>
            Transform your workflow with powerful AI tools.
            Automate repetitive tasks, understand your data,
            and help your team focus on what matters.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={onSignUpClick}>
              Start Building Free
            </button>

            <button className="secondary-btn">
              See How It Works              
            </button>
          </div>

          <div className="hero-note">
            <span>✓</span> No credit card required
            <span>✓</span> Free forever plan
          </div>

        </div>

        <div className="hero-visual">

          <div className="floating-card card-one">
            <span className="mini-icon">✦</span>
            AI Analysis
            <strong>+84%</strong>
          </div>

          <div className="dashboard-preview">

            <div className="preview-header">
              <div>
                <small>Overview</small>
                <h3>AI Workspace</h3>
              </div>
            </div>

            <div className="stats-row">

              <div className="stat-card">
                <span>Total Tasks</span>
                <strong>2,481</strong>
                <small>↑ 12.4%</small>
              </div>

              <div className="stat-card">
                <span>Automated</span>
                <strong>1,892</strong>
                <small>↑ 28.7%</small>
              </div>

            </div>

            <div className="chart-card">
              <div className="chart-title">
                <span>Productivity</span>
                <strong>87.4%</strong>
              </div>

              <div className="fake-chart">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
                <div className="bar bar-5"></div>
                <div className="bar bar-6"></div>
                <div className="bar bar-7"></div>
              </div>
            </div>

          </div>

          <div className="floating-card card-two">
            <span className="green-dot"></span>
            Workflow completed
            <strong>2m ago</strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;