import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import Products from './components/Products';
import Stats from './components/Stats';
import Research from './components/Research';
import Stories from './components/Stories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Modals from './components/Modals';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [initialSeedInterest, setInitialSeedInterest] = useState('cotton');
  const [productDetail, setProductDetail] = useState(null);

  // Initialize Scroll Reveal Animations (Matches original main.js behavior)
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const triggerReveal = (el) => {
      el.classList.add('is-revealed');
    };

    const checkInitialReveals = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh - 40) {
          triggerReveal(el);
        }
      });
    };

    let observer = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerReveal(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -30px 0px'
        }
      );

      revealElements.forEach((el) => observer.observe(el));
    } else {
      revealElements.forEach((el) => triggerReveal(el));
    }

    checkInitialReveals();
    window.addEventListener('scroll', checkInitialReveals, { passive: true });

    // Failsafe timer so elements can never get stuck hidden
    const timer = setTimeout(() => {
      revealElements.forEach((el) => triggerReveal(el));
    }, 1200);

    return () => {
      window.removeEventListener('scroll', checkInitialReveals);
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleOpenEnquiry = () => {
    setInitialSeedInterest('cotton');
    setIsEnquiryOpen(true);
  };

  const handleOpenDealer = () => {
    setInitialSeedInterest('dealer');
    setIsEnquiryOpen(true);
  };

  const handleOpenProductsDrawer = () => {
    setProductDetail(null);
    setIsProductsOpen(true);
  };

  const handleOpenProductDetail = (type) => {
    setProductDetail(type);
    setIsProductsOpen(true);
  };

  const handleCloseModals = () => {
    setIsEnquiryOpen(false);
    setIsProductsOpen(false);
    setProductDetail(null);
  };

  return (
    <div className="site-wrapper">
      <Header onOpenEnquiryModal={handleOpenEnquiry} />
      <Hero onOpenDealerModal={handleOpenDealer} />
      <WhyChoose />
      <Products
        onOpenProductsDrawer={handleOpenProductsDrawer}
        onOpenProductDetail={handleOpenProductDetail}
      />
      <Stats />
      <Research />
      <Stories />
      <Newsletter />
      <Footer
        onOpenEnquiryModal={handleOpenEnquiry}
        onOpenDealerModal={handleOpenDealer}
        onOpenProductsDrawer={handleOpenProductsDrawer}
        onOpenProductDetail={handleOpenProductDetail}
      />
      <Modals
        isEnquiryOpen={isEnquiryOpen}
        isProductsOpen={isProductsOpen}
        initialSeedInterest={initialSeedInterest}
        productDetail={productDetail}
        onClose={handleCloseModals}
      />
    </div>
  );
}
