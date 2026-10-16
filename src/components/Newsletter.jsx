import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setEmail('');
    }, 3500);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-banner reveal-on-scroll">
          {/* Background Sunset Field Peek Through Curve */}
          <div className="newsletter-bg-visual">
            <img src="/stats_field_bg.jpg" alt="Field Background" className="newsletter-bg-img" />
          </div>

          {/* Left Info Content */}
          <div className="newsletter-left">
            <div className="newsletter-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 22"></path>
                <path d="M12 8C7 8 4 12 4 16C8 16 11 13 12 8Z"></path>
                <path d="M12 14C17 14 20 18 20 22C16 22 13 19 12 14Z"></path>
              </svg>
            </div>
            <div className="newsletter-text">
              <span className="newsletter-eyebrow">STAY UPDATED</span>
              <h3 className="newsletter-title">
                Get the Latest<br />
                from <span className="gold-highlight">Veda Seeds.</span>
              </h3>
              <p className="newsletter-subtext">Product launches, farming insights and agricultural updates — straight to your inbox.</p>
            </div>
          </div>

          {/* Right Input Form */}
          <div className="newsletter-right">
            <form className="newsletter-form" id="newsletterForm" onSubmit={handleSubmit}>
              <div className="newsletter-input-pill">
                <input
                  type="email"
                  id="newsletterEmail"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-subscribe">
                  <span>Subscribe</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
              <div className="privacy-note">
                <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>We respect your privacy. No spam, ever.</span>
              </div>
              <div
                className="newsletter-success-toast"
                id="newsletterSuccess"
                style={{ display: showToast ? 'block' : 'none' }}
              >
                Thank you for subscribing to Veda Seeds updates!
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
