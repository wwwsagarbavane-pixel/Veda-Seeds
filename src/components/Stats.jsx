import React, { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({
    exp: '25+',
    hybrids: '100+',
    farmers: '10,000+',
    states: '4+'
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const animateValue = (target, suffix, key) => {
            let current = 0;
            const duration = 1600;
            const stepTime = 25;
            const steps = duration / stepTime;
            const increment = target / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts((prev) => ({
                ...prev,
                [key]: Math.floor(current).toLocaleString() + suffix
              }));
            }, stepTime);
          };

          animateValue(25, '+', 'exp');
          animateValue(100, '+', 'hybrids');
          animateValue(10000, '+', 'farmers');
          animateValue(4, '+', 'states');
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-bg-wrapper">
        <img src="/stats_field_bg.jpg" alt="Veda Seeds Scenic Field Landscape" className="stats-field-img" />
        <div className="stats-overlay-gradient"></div>
      </div>

      <div className="stats-container">
        {/* Floating Dark Forest Green Pill Container */}
        <div className="stats-pill-bar reveal-on-scroll">
          {/* Stat 1: 25+ Years of Experience */}
          <div className="stat-item">
            <div className="stat-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 22"></path>
                <path d="M12 8C7 8 4 12 4 16C8 16 11 13 12 8Z"></path>
                <path d="M12 14C17 14 20 18 20 22C16 22 13 19 12 14Z"></path>
              </svg>
            </div>
            <div className="stat-data">
              <span className="stat-number">{counts.exp}</span>
              <span className="stat-label">Years of<br />Experience</span>
            </div>
          </div>

          <div className="stat-divider"></div>

          {/* Stat 2: 100+ Hybrid Varieties */}
          <div className="stat-item">
            <div className="stat-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v7.31L4.69 19.31A2 2 0 0 0 6.41 22h11.18a2 2 0 0 0 1.72-2.69L14 9.31V2"></path>
                <line x1="8.5" y1="2" x2="15.5" y2="2"></line>
                <line x1="7" y1="16" x2="17" y2="16"></line>
              </svg>
            </div>
            <div className="stat-data">
              <span className="stat-number">{counts.hybrids}</span>
              <span className="stat-label">Hybrid<br />Varieties</span>
            </div>
          </div>

          <div className="stat-divider"></div>

          {/* Stat 3: 10,000+ Farmers Connected */}
          <div className="stat-item">
            <div className="stat-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="stat-data">
              <span className="stat-number">{counts.farmers}</span>
              <span className="stat-label">Farmers<br />Connected</span>
            </div>
          </div>

          <div className="stat-divider"></div>

          {/* Stat 4: 4+ States Presence */}
          <div className="stat-item">
            <div className="stat-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="stat-data">
              <span className="stat-number">{counts.states}</span>
              <span className="stat-label">States<br />Presence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
