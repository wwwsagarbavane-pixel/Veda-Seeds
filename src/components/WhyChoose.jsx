import React from 'react';

export default function WhyChoose() {
  return (
    <section className="why-choose-section" id="why-choose">
      <div className="why-choose-grid">
        {/* Left Column: Blooming Cotton Boll with Curved Frame & Rooted In Science Badge */}
        <div className="why-visual-col reveal-on-scroll">
          <div className="why-image-wrapper">
            <img src="/card_cotton_hd.png" alt="Blooming Cotton Flower" className="why-cotton-img" />
            {/* Curved overlay stroke */}
            <svg className="why-curve-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 0,0 C 45,0 95,30 85,100 L 0,100 Z" fill="none" stroke="#d4a34b" strokeWidth="0.8" />
            </svg>
            {/* Rooted In Science Overlay Badge */}
            <div className="rooted-badge">
              <div className="rooted-badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L12 22"></path>
                  <path d="M12 8C7 8 4 12 4 16C8 16 11 13 12 8Z"></path>
                  <path d="M12 14C17 14 20 18 20 22C16 22 13 19 12 14Z"></path>
                </svg>
              </div>
              <div className="rooted-badge-text">
                <span>ROOTED</span>
                <span>IN SCIENCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Heading, Brief & 4 Pillar Features */}
        <div className="why-content-col">
          {/* Top Row: Eyebrow + Headline & Side Summary */}
          <div className="why-header-row reveal-on-scroll">
            <div className="why-header-left">
              <span className="section-eyebrow">WHY CHOOSE VEDA SEEDS</span>
              <h2 className="why-title">
                Science Today<br />
                for <span className="gold-highlight">Better Harvests</span><br />
                Tomorrow.
              </h2>
            </div>
            <div className="why-header-right">
              <p className="why-summary-text">
                We combine advanced research with real field experience to develop high-performance hybrid seeds for farmers.
              </p>
              <a href="#research" className="btn-outline-sm">
                <span>Know More</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* 4 Pillars Row with Thin Vertical Dividers */}
          <div className="pillars-row">
            {/* Pillar 1: Research Driven */}
            <div className="pillar-card reveal-on-scroll reveal-delay-1">
              <div className="pillar-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L12 22"></path>
                  <path d="M12 8C7 8 4 12 4 16C8 16 11 13 12 8Z"></path>
                  <path d="M12 14C17 14 20 18 20 22C16 22 13 19 12 14Z"></path>
                </svg>
              </div>
              <h4 className="pillar-title">Research Driven</h4>
              <p className="pillar-desc">Continuous innovation for stronger hybrids.</p>
            </div>

            {/* Pillar 2: Farmer Focused */}
            <div className="pillar-card reveal-on-scroll reveal-delay-2">
              <div className="pillar-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z"></path>
                  <path d="M9 18l3 3 3-3"></path>
                  <line x1="12" y1="15" x2="12" y2="21"></line>
                </svg>
              </div>
              <h4 className="pillar-title">Farmer Focused</h4>
              <p className="pillar-desc">Solutions designed for real field needs.</p>
            </div>

            {/* Pillar 3: Quality Assured */}
            <div className="pillar-card reveal-on-scroll reveal-delay-3">
              <div className="pillar-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <h4 className="pillar-title">Quality Assured</h4>
              <p className="pillar-desc">Rigorous testing for reliable performance.</p>
            </div>

            {/* Pillar 4: Sustainable Future */}
            <div className="pillar-card reveal-on-scroll reveal-delay-4">
              <div className="pillar-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a10 10 0 0 1 7.07 17.07L12 12"></path>
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"></path>
                </svg>
              </div>
              <h4 className="pillar-title">Sustainable Future</h4>
              <p className="pillar-desc">Better seeds for healthier tomorrow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
