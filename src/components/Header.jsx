import React, { useState, useEffect, useRef } from 'react';

const languages = [
  { code: 'EN', label: 'English (EN)' },
  { code: 'HI', label: 'हिन्दी (HI)' },
  { code: 'TE', label: 'తెలుగు (TE)' },
  { code: 'GU', label: 'ગુજરાતી (GU)' },
  { code: 'MR', label: 'मరాఠీ (MR)' }
];

export default function Header({ onOpenEnquiryModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langDropdownRef = useRef(null);

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'products', 'why-choose', 'research', 'contact'].includes(hash)) {
        setActiveNav(hash);
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      if (window.scrollY < 150) {
        setActiveNav('home');
        return;
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 120) {
        setActiveNav('contact');
        return;
      }

      const sectionIds = ['contact', 'research', 'products', 'why-choose', 'home'];
      const scrollPos = window.pageYOffset + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveNav(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavClick = (id) => {
    setActiveNav(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="header-inner">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" id="brandLogo" onClick={() => handleNavClick('home')}>
          <img src="/veda_logo.png" alt="Veda Seeds Emblem" className="brand-logo-img" />
          <div className="logo-text">
            <span className="logo-title">VEDA SEEDS</span>
            <span className="logo-subtitle">SEED SCIENCES</span>
          </div>
        </a>

        {/* Main Navigation Links */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a
            href="#home"
            className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}
            id="navHome"
            onClick={() => handleNavClick('home')}
          >
            <span>Home</span>
            {activeNav === 'home' && <span className="nav-active-bar"></span>}
          </a>
          <a
            href="#why-choose"
            className={`nav-link ${activeNav === 'why-choose' ? 'active' : ''}`}
            id="navAbout"
            onClick={() => handleNavClick('why-choose')}
          >
            <span>About Us</span>
            {activeNav === 'why-choose' && <span className="nav-active-bar"></span>}
          </a>
          <a
            href="#products"
            className={`nav-link ${activeNav === 'products' ? 'active' : ''}`}
            id="navProducts"
            onClick={() => handleNavClick('products')}
          >
            <span>Products</span>
            {activeNav === 'products' && <span className="nav-active-bar"></span>}
          </a>
          <a
            href="#research"
            className={`nav-link ${activeNav === 'research' ? 'active' : ''}`}
            id="navResearch"
            onClick={() => handleNavClick('research')}
          >
            <span>Research</span>
            {activeNav === 'research' && <span className="nav-active-bar"></span>}
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`}
            id="navContact"
            onClick={() => handleNavClick('contact')}
          >
            <span>Contact</span>
            {activeNav === 'contact' && <span className="nav-active-bar"></span>}
          </a>
        </nav>

        {/* Header Actions: Business Enquiry & Language Selector */}
        <div className="header-actions">
          <button className="btn-enquiry" id="btnEnquiry" onClick={onOpenEnquiryModal}>
            <span>Business Enquiry</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Language Dropdown */}
          <div className="language-dropdown" id="langDropdown" ref={langDropdownRef}>
            <button
              className="lang-trigger"
              id="langTrigger"
              aria-label="Select Language"
              onClick={(e) => {
                e.stopPropagation();
                setIsLangOpen(!isLangOpen);
              }}
            >
              <svg className="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span className="current-lang" id="currentLangText">{selectedLang}</span>
              <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`lang-menu ${isLangOpen ? 'open' : ''}`} id="langMenu">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`lang-option ${selectedLang === lang.code ? 'active' : ''}`}
                  data-lang={lang.code}
                  onClick={() => {
                    setSelectedLang(lang.code);
                    setIsLangOpen(false);
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            id="mobileMenuToggle"
            aria-label="Toggle Navigation"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
