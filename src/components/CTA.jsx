import React, { useState } from 'react';

function CTA({ onSignUpClick }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignUpClick) {
      onSignUpClick();
    }
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrapper">
          <h2>
            Start selling with ChatBot.com. Free <br />
            trial. Setup in minutes.
          </h2>

          <form onSubmit={handleSubmit} className="cta-form">
            <input
              type="email"
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="cta-submit-btn">
              Sign up free
            </button>
          </form>

          <div className="cta-features">
            <span>✓ Free 14-day trial</span>
            <span>✓ No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;