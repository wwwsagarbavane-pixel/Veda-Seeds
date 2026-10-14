/**
 * VEDA SEEDS - SEED SCIENCES
 * Interactive Landing Page Functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Dropdown Toggle
  const langDropdown = document.getElementById('langDropdown');
  const langTrigger = document.getElementById('langTrigger');
  const langMenu = document.getElementById('langMenu');
  const currentLangText = document.getElementById('currentLangText');
  const langOptions = document.querySelectorAll('.lang-option');

  if (langTrigger && langMenu) {
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target)) {
        langMenu.classList.remove('open');
      }
    });

    langOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        langOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        const lang = opt.getAttribute('data-lang');
        if (currentLangText) currentLangText.textContent = lang;
        langMenu.classList.remove('open');
      });
    });
  }

  // 1b. Mobile Hamburger Toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  }

  // 2. Active Nav Link on Scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    const siteHeader = document.getElementById('siteHeader');
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href.substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // 3. Testimonials Carousel / Navigation
  const storyPag1 = document.getElementById('storyPag1');
  const storyPag2 = document.getElementById('storyPag2');
  const storyPag3 = document.getElementById('storyPag3');
  const storyPrevBtn = document.getElementById('storyPrevBtn');
  const storyNextBtn = document.getElementById('storyNextBtn');
  const testimonialsGrid = document.getElementById('testimonialsGrid');

  const testimonialSets = [
    [
      {
        quote: "Veda Seeds hybrids have given us better yield and stronger plants. We are very satisfied with the performance in our fields.",
        name: "Ramesh Patil",
        role: "Farmer, Maharashtra",
        avatar: "avatar_ramesh_hd.jpg"
      },
      {
        quote: "Good germination, strong growth and excellent yield. Veda Seeds is truly a partner for farmers like us.",
        name: "Suresh Yadav",
        role: "Farmer, Telangana",
        avatar: "avatar_suresh_hd.jpg"
      }
    ],
    [
      {
        quote: "The drought tolerance of Veda Maize is exceptional. Even with erratic rains this season, my crop delivered record bushels.",
        name: "Devendra Patel",
        role: "Farmer, Gujarat",
        avatar: "avatar_ramesh_hd.jpg"
      },
      {
        quote: "Pest resistance in Veda Supreme Cotton saved our pesticide expenses by 40%. The fiber quality also fetched premium market rates.",
        name: "Balwinder Singh",
        role: "Farmer, Punjab",
        avatar: "avatar_suresh_hd.jpg"
      }
    ],
    [
      {
        quote: "Their scientific field agronomy guidance helped us optimize seed density. Our yield increased by 6 quintals per acre.",
        name: "Mallikarjun Rao",
        role: "Farmer, Andhra Pradesh",
        avatar: "avatar_suresh_hd.jpg"
      },
      {
        quote: "Consistent seed quality across batches gives peace of mind. Veda Seeds is our trusted choice every sowing season.",
        name: "Kisan Lal Sharma",
        role: "Farmer, Rajasthan",
        avatar: "avatar_ramesh_hd.jpg"
      }
    ]
  ];

  let currentStoryIndex = 0;

  function renderTestimonials(idx) {
    currentStoryIndex = idx;
    const pagItems = [storyPag1, storyPag2, storyPag3];
    pagItems.forEach((p, i) => {
      if (p) {
        if (i === idx) p.classList.add('active');
        else p.classList.remove('active');
      }
    });

    if (testimonialsGrid) {
      testimonialsGrid.style.opacity = '0';
      testimonialsGrid.style.transform = 'translateY(8px)';
      testimonialsGrid.style.transition = 'all 0.25s ease';

      setTimeout(() => {
        const pair = testimonialSets[idx];
        testimonialsGrid.innerHTML = pair.map(item => `
          <div class="testimonial-card">
            <div class="quote-mark-icon">“</div>
            <p class="quote-text">${item.quote}</p>
            <div class="quote-author-row">
              <img src="${item.avatar}" alt="${item.name}" class="author-avatar">
              <div class="author-details">
                <div class="gold-dash"></div>
                <h5 class="author-name">${item.name}</h5>
                <span class="author-role">${item.role}</span>
              </div>
            </div>
          </div>
        `).join('');

        testimonialsGrid.style.opacity = '1';
        testimonialsGrid.style.transform = 'translateY(0)';
      }, 250);
    }
  }

  if (storyPag1) storyPag1.addEventListener('click', () => renderTestimonials(0));
  if (storyPag2) storyPag2.addEventListener('click', () => renderTestimonials(1));
  if (storyPag3) storyPag3.addEventListener('click', () => renderTestimonials(2));

  if (storyPrevBtn) {
    storyPrevBtn.addEventListener('click', () => {
      const nextIdx = (currentStoryIndex - 1 + testimonialSets.length) % testimonialSets.length;
      renderTestimonials(nextIdx);
    });
  }

  if (storyNextBtn) {
    storyNextBtn.addEventListener('click', () => {
      const nextIdx = (currentStoryIndex + 1) % testimonialSets.length;
      renderTestimonials(nextIdx);
    });
  }

  // 4. Scroll Reveal Animations (Intersection Observer with Immediate Check & Fallback)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const triggerReveal = (el) => {
    el.classList.add('is-revealed');
  };

  const checkInitialReveals = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh - 40) {
        triggerReveal(el);
      }
    });
  };

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerReveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => triggerReveal(el));
  }

  // Initial and scroll check
  checkInitialReveals();
  window.addEventListener('scroll', checkInitialReveals, { passive: true });
  // Failsafe timer so elements can never get stuck hidden
  setTimeout(() => {
    revealElements.forEach(el => triggerReveal(el));
  }, 1200);

  // 5. 3D Card Interactive Mouse Move & Glare Animation
  const cropCards = document.querySelectorAll('.crop-card');
  cropCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
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
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // Hero Image Subtle Mouse Parallax (Only on Desktop with Hover Support)
  const heroSection = document.querySelector('.hero-section');
  const heroFarmerImg = document.getElementById('heroFarmerImg');
  if (heroSection && heroFarmerImg) {
    heroSection.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 992) return;
      const rect = heroSection.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      heroFarmerImg.style.transform = `translate(${normX * -12}px, ${normY * -8}px)`;
    });
    heroSection.addEventListener('mouseleave', () => {
      if (window.innerWidth > 992) {
        heroFarmerImg.style.transform = '';
      }
    });
  }

  // 6. Animated Stats Counter on Viewport Enter
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  const countUp = (el, target, suffix) => {
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
      el.textContent = Math.floor(current).toLocaleString() + suffix;
    }, stepTime);
  };

  const statsSection = document.querySelector('.stats-section');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsCounted) {
        statsCounted = true;
        statNumbers.forEach(stat => {
          const raw = stat.textContent.trim();
          if (raw.includes('25+')) countUp(stat, 25, '+');
          else if (raw.includes('100+')) countUp(stat, 100, '+');
          else if (raw.includes('10,000+')) countUp(stat, 10000, '+');
          else if (raw.includes('4+')) countUp(stat, 4, '+');
        });
      }
    }, { threshold: 0.25 });
    statsObserver.observe(statsSection);
  }
});

// Modal Global Functions
window.openEnquiryModal = function() {
  const modal = document.getElementById('enquiryModal');
  if (modal) modal.classList.add('open');
};

window.openDealerModal = function() {
  const modal = document.getElementById('enquiryModal');
  if (modal) {
    const interest = document.getElementById('cropInterest');
    if (interest) interest.value = 'dealer';
    modal.classList.add('open');
  }
};

window.openProductsDrawer = function() {
  const modal = document.getElementById('productsModal');
  if (modal) modal.classList.add('open');
};

window.openProductDetail = function(type) {
  const modal = document.getElementById('productsModal');
  const title = document.getElementById('drawerTitle');
  const sub = document.getElementById('drawerSubtitle');
  if (modal) {
    if (type === 'platinum' || type === 'cotton') {
      if (title) title.textContent = 'Veda Seeds Platinum BG II Cotton Hybrid';
      if (sub) sub.textContent = 'PKCH 6836 BG II • Bollgard II® Technology. High boll retention, superior fiber length, and built-in bollworm protection.';
    } else if (type === 'dr_chandra' || type === 'maize') {
      if (title) title.textContent = 'Veda Seeds Dr. Chandra Gold BG II Cotton Hybrid';
      if (sub) sub.textContent = 'PKCH 2043 BG II • Sucking pest tolerance, heavy boll bearing, and premium farmer profitability.';
    } else if (type === 'dharma_gold' || type === 'sorghum') {
      if (title) title.textContent = 'Veda Seeds Dharma Gold BG II Cotton Hybrid';
      if (sub) sub.textContent = 'Premier hybrid variety for diverse soils, uniform boll bursting, and superior ginning outturn.';
    }
    modal.classList.add('open');
  }
};

window.closeModals = function() {
  const modals = document.querySelectorAll('.modal-backdrop');
  modals.forEach(m => m.classList.remove('open'));
};

window.submitEnquiry = function() {
  const msg = document.getElementById('formSuccessMsg');
  const form = document.getElementById('enquiryForm');
  if (msg) {
    msg.style.display = 'block';
    setTimeout(() => {
      window.closeModals();
      msg.style.display = 'none';
      if (form) form.reset();
    }, 2200);
  }
};

window.submitNewsletter = function() {
  const toast = document.getElementById('newsletterSuccess');
  const form = document.getElementById('newsletterForm');
  if (toast) {
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
      if (form) form.reset();
    }, 3500);
  }
};
