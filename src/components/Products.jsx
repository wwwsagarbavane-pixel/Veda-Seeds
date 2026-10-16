import React from 'react';

export default function Products({ onOpenProductsDrawer, onOpenProductDetail }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.02)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <section className="products-section" id="products">
      <div className="products-container">
        {/* Top Header Row */}
        <div className="products-header-row reveal-on-scroll">
          <div className="products-header-left">
            <span className="section-eyebrow">OUR PRODUCT RANGE</span>
            <h2 className="products-title">
              Seeds for a<br /><span className="gold-highlight">Brighter</span> Tomorrow.
            </h2>
            <p className="products-subtitle">
              High-performance hybrid seeds developed with advanced research for better yield and stronger farms.
            </p>
          </div>
          <div className="products-header-right">
            <button className="btn-outline-products" onClick={onOpenProductsDrawer}>
              <span>View All Products</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* 3 Crop Cards Grid */}
        <div className="products-grid">
          {/* Card 1: Platinum BG II Cotton */}
          <div
            className="crop-card reveal-on-scroll reveal-delay-1"
            id="cardPlatinum"
            onClick={() => onOpenProductDetail('platinum')}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="crop-img-container">
              <img src="/product_platinum_bg2.png" alt="Veda Seeds Platinum BG II Cotton Hybrid Seeds" className="crop-img" />
              <span className="crop-badge-floating">PKCH 6836 BG II</span>
            </div>
            <div className="crop-card-info">
              <div className="crop-meta-row">
                <span className="crop-num">01 — BG II HYBRID</span>
                <button
                  className="btn-compare-tag"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenProductDetail('platinum');
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" />
                  </svg>
                  <span>Compare</span>
                </button>
              </div>
              <h3 className="crop-title">VEDA SEEDS PLATINUM BG II</h3>
              <p className="crop-telugu-text">వేద ప్లాటినం బిజీ II పత్తి విత్తనాలు</p>
              <div className="crop-bottom-row">
                <p className="crop-desc">
                  Best cotton hybrid seeds with Bollgard II® technology for maximum yield and high boll retention.
                </p>
                <button className="crop-action-circle" aria-label="Explore Platinum BG II">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Dr. Chandra Gold BG II Cotton */}
          <div
            className="crop-card reveal-on-scroll reveal-delay-2"
            id="cardDrChandra"
            onClick={() => onOpenProductDetail('dr_chandra')}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="crop-img-container">
              <img src="/product_dr_chandra_bg2.png" alt="Veda Seeds Dr. Chandra Gold BG II Cotton Hybrid Seeds" className="crop-img" />
              <span className="crop-badge-floating">PKCH 2043 BG II</span>
            </div>
            <div className="crop-card-info">
              <div className="crop-meta-row">
                <span className="crop-num">02 — GOLD PLUS</span>
                <button
                  className="btn-compare-tag"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenProductDetail('dr_chandra');
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" />
                  </svg>
                  <span>Compare</span>
                </button>
              </div>
              <h3 className="crop-title">VEDA SEEDS DR.CHANDRA GOLD BG II</h3>
              <p className="crop-telugu-text">వేద డా.చంద్ర గోల్డ్ బిజీ II పత్తి విత్తనాలు</p>
              <div className="crop-bottom-row">
                <p className="crop-desc">
                  Dr. Chandra Gold BG II with superior sucking pest tolerance and robust heavy boll bearing capacity.
                </p>
                <button className="crop-action-circle" aria-label="Explore Dr. Chandra Gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Dharma Gold BG II Cotton */}
          <div
            className="crop-card reveal-on-scroll reveal-delay-3"
            id="cardDharmaGold"
            onClick={() => onOpenProductDetail('dharma_gold')}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="crop-img-container">
              <img src="/product_dharma_gold_bg2.png" alt="Veda Seeds Dharma Gold BG II Cotton Hybrid Seeds" className="crop-img" />
              <span className="crop-badge-floating">BG II PREMIER</span>
            </div>
            <div className="crop-card-info">
              <div className="crop-meta-row">
                <span className="crop-num">03 — DHARMA GOLD</span>
                <button
                  className="btn-compare-tag"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenProductDetail('dharma_gold');
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" />
                  </svg>
                  <span>Compare</span>
                </button>
              </div>
              <h3 className="crop-title">VEDA SEEDS DHARMA GOLD BG II</h3>
              <p className="crop-telugu-text">వేద ధర్మ గోల్డ్ బిజీ II పత్తి విత్తనాలు</p>
              <div className="crop-bottom-row">
                <p className="crop-desc">
                  Best cotton hybrid seeds for uniform opening, premium fiber quality and exceptional farmer returns.
                </p>
                <button className="crop-action-circle" aria-label="Explore Dharma Gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="products-pagination">
          <span className="pagination-bar"></span>
          <span className="pagination-item active">01</span>
          <span className="pagination-item">02</span>
          <span className="pagination-item">03</span>
        </div>
      </div>
    </section>
  );
}
