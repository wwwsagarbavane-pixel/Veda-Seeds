import React from 'react';

export default function Research() {
  return (
    <section className="research-section" id="research">
      <div className="research-container">
        {/* Left: Text & CTA */}
        <div className="research-text-col reveal-on-scroll">
          <span className="section-eyebrow">RESEARCH & INNOVATION</span>
          <h2 className="research-title">
            Innovating<br />
            Seeds for<br />
            a <span className="gold-highlight">Brighter</span><br />
            Tomorrow.
          </h2>
          <p className="research-description">
            At Veda Seeds, research drives everything we do. We continuously develop high-performing hybrids to meet real field challenges and future agricultural needs.
          </p>
          <a href="#products" className="btn-primary" id="btnOurResearch">
            <span>Our Research</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Center: Chevron Framed Seedling Sprout Image */}
        <div className="research-visual-col reveal-on-scroll reveal-delay-2">
          <div className="seedling-chevron-wrap">
            <img src="/cotton_seedling_hd.jpg" alt="Thriving Green Cotton Seedling under Golden Sunlight" className="seedling-img" />
            {/* Delicate Golden Accent Curve */}
            <svg className="seedling-accent-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 32,0 Q 0,45 28,100" fill="none" stroke="#d4a34b" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Right: 3 Feature Pill Cards */}
        <div className="research-features-col reveal-on-scroll reveal-delay-3">
          {/* Card 1: Advanced Breeding */}
          <div className="research-pill-card">
            <div className="research-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 22"></path>
                <path d="M12 8C7 8 4 12 4 16C8 16 11 13 12 8Z"></path>
                <path d="M12 14C17 14 20 18 20 22C16 22 13 19 12 14Z"></path>
              </svg>
            </div>
            <div className="research-card-content">
              <h4>Advanced Breeding</h4>
              <p>Developing high-yield, climate-resilient hybrids through scientific research.</p>
            </div>
          </div>

          {/* Card 2: Field Testing */}
          <div className="research-pill-card">
            <div className="research-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v7.31L4.69 19.31A2 2 0 0 0 6.41 22h11.18a2 2 0 0 0 1.72-2.69L14 9.31V2"></path>
                <line x1="8.5" y1="2" x2="15.5" y2="2"></line>
              </svg>
            </div>
            <div className="research-card-content">
              <h4>Field Testing</h4>
              <p>Rigorous multi-location trials for consistent performance.</p>
            </div>
          </div>

          {/* Card 3: Farmer-Centric Solutions */}
          <div className="research-pill-card">
            <div className="research-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z"></path>
                <path d="M9 18l3 3 3-3"></path>
                <line x1="12" y1="15" x2="12" y2="21"></line>
              </svg>
            </div>
            <div className="research-card-content">
              <h4>Farmer-Centric Solutions</h4>
              <p>Real field insights to solve tomorrow's challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
