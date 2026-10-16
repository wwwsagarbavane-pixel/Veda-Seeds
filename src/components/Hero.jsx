import React, { useRef } from 'react';

export default function Hero({ onOpenDealerModal }) {
  const farmerImgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 992 || !farmerImgRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    farmerImgRef.current.style.transform = `translate(${normX * -12}px, ${normY * -8}px)`;
  };

  const handleMouseLeave = () => {
    if (farmerImgRef.current) {
      farmerImgRef.current.style.transform = '';
    }
  };

  return (
    <section
      className="hero-section"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Direct Visual Graphic Layers */}
      <div className="hero-visual-bg">
        <img
          src="/hero_graphic.png"
          alt="Veda Seeds Farmer in Cotton Fields"
          className="hero-graphic-layer"
          id="heroFarmerImg"
          ref={farmerImgRef}
        />
      </div>

      {/* Left Side Typography & Calls to Action */}
      <div className="hero-content-container">
        <div className="hero-eyebrow">
          <span>SCIENCE</span>
          <span className="eyebrow-dot">×</span>
          <span>FARMERS</span>
          <span className="eyebrow-dot">×</span>
          <span>A SUSTAINABLE FUTURE</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">Better Seeds,</span>
          <span className="title-line">
            <span className="gold-highlight">Brighter</span> Tomorrows
          </span>
        </h1>

        {/* Sleek Gold Accent Bar */}
        <div className="gold-accent-line"></div>

        <p className="hero-description">
          At Veda Seeds, we develop high-performance hybrid seeds with advanced research for a more prosperous agricultural future.
        </p>

        <div className="hero-actions">
          <a href="#products" className="btn-primary" id="btnExploreProducts">
            <span>Explore Products</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <button className="btn-outline" id="btnBecomeDealer" onClick={onOpenDealerModal}>
            <span>Become a Dealer</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
