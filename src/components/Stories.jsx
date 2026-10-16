import React, { useState } from 'react';

const testimonialSets = [
  [
    {
      quote: "Veda Seeds hybrids have given us better yield and stronger plants. We are very satisfied with the performance in our fields.",
      name: "Ramesh Patil",
      role: "Farmer, Maharashtra",
      avatar: "/avatar_ramesh_hd.jpg"
    },
    {
      quote: "Good germination, strong growth and excellent yield. Veda Seeds is truly a partner for farmers like us.",
      name: "Suresh Yadav",
      role: "Farmer, Telangana",
      avatar: "/avatar_suresh_hd.jpg"
    }
  ],
  [
    {
      quote: "The drought tolerance of Veda Maize is exceptional. Even with erratic rains this season, my crop delivered record bushels.",
      name: "Devendra Patel",
      role: "Farmer, Gujarat",
      avatar: "/avatar_ramesh_hd.jpg"
    },
    {
      quote: "Pest resistance in Veda Supreme Cotton saved our pesticide expenses by 40%. The fiber quality also fetched premium market rates.",
      name: "Balwinder Singh",
      role: "Farmer, Punjab",
      avatar: "/avatar_suresh_hd.jpg"
    }
  ],
  [
    {
      quote: "Their scientific field agronomy guidance helped us optimize seed density. Our yield increased by 6 quintals per acre.",
      name: "Mallikarjun Rao",
      role: "Farmer, Andhra Pradesh",
      avatar: "/avatar_suresh_hd.jpg"
    },
    {
      quote: "Consistent seed quality across batches gives peace of mind. Veda Seeds is our trusted choice every sowing season.",
      name: "Kisan Lal Sharma",
      role: "Farmer, Rajasthan",
      avatar: "/avatar_ramesh_hd.jpg"
    }
  ]
];

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeSlide = (newIndex) => {
    if (newIndex === currentIndex || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimating(false);
    }, 250);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + testimonialSets.length) % testimonialSets.length;
    changeSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % testimonialSets.length;
    changeSlide(nextIdx);
  };

  return (
    <section className="stories-section" id="stories">
      <div className="stories-container">
        {/* Left: Heading, Testimonial Cards & Slider Controls */}
        <div className="stories-left-col reveal-on-scroll">
          <span className="section-eyebrow">FARMER STORIES</span>
          <h2 className="stories-title">
            Trusted by Farmers.<br />
            <span className="gold-highlight">Growing Together.</span>
          </h2>
          {/* Sleek Gold Accent Bar */}
          <div className="gold-accent-line"></div>
          <p className="stories-subtitle">
            Our hybrids are tested in real fields, by real farmers. Their success inspires us to keep innovating.
          </p>

          {/* 2 Testimonial Cards Side-by-Side */}
          <div
            className="testimonials-grid"
            id="testimonialsGrid"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(8px)' : 'translateY(0)',
              transition: 'all 0.25s ease'
            }}
          >
            {testimonialSets[currentIndex].map((item, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="quote-mark-icon">“</div>
                <p className="quote-text">{item.quote}</p>
                <div className="quote-author-row">
                  <img src={item.avatar} alt={item.name} className="author-avatar" />
                  <div className="author-details">
                    <div className="gold-dash"></div>
                    <h5 className="author-name">{item.name}</h5>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicator & Navigation Arrow Buttons */}
          <div className="stories-nav-row">
            <div className="stories-pagination">
              <span className="pag-bar"></span>
              {testimonialSets.map((_, idx) => (
                <span
                  key={idx}
                  className={`pag-index ${currentIndex === idx ? 'active' : ''}`}
                  id={`storyPag${idx + 1}`}
                  onClick={() => changeSlide(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  {`0${idx + 1}`}
                </span>
              ))}
            </div>
            <div className="stories-arrows">
              <button className="arrow-circle-btn prev-btn" id="storyPrevBtn" aria-label="Previous Stories" onClick={handlePrev}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button className="arrow-circle-btn next-btn" id="storyNextBtn" aria-label="Next Stories" onClick={handleNext}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Smiling Farmer with Curved Mask & Handwritten Stamp Badge */}
        <div className="stories-right-col reveal-on-scroll reveal-delay-2">
          <div className="stories-farmer-frame">
            <img src="/stories_farmer_full.jpg" alt="Smiling Indian Farmer in Cotton Field" className="stories-farmer-img" />

            {/* Delicate Golden Curve on Left Wave Edge */}
            <svg className="stories-gold-wave" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 0,0 C 40,20 10,70 60,100" fill="none" stroke="#d4a34b" strokeWidth="0.8" />
            </svg>

            {/* Circular Stamp: "Farmers Today Brighter Tomorrows." */}
            <div className="farmer-stamp-badge">
              <div className="stamp-inner">
                <span className="stamp-line">Farmers</span>
                <span className="stamp-line">Today</span>
                <span className="stamp-line stamp-gold">Brighter</span>
                <span className="stamp-line">Tomorrows.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
