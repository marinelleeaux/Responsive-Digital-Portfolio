/**
 * ====================================================================
 * ANIMATIONS.JS - JAN MARINELLE YAP AUDITOR DIGITAL PORTFOLIO
 * ====================================================================
 * Preloader, Typewriter, GSAP & ScrollTrigger, Cursor Physics, 3D Tilt,
 * Magnetic Buttons, Counters, and Scroll Progress Indicators
 */

(function () {
  'use strict';

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ------------------------------------------------------------------
  // 1. PRELOADER ANIMATION
  // ------------------------------------------------------------------
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('preloaderProgressBar');
    const counter = document.getElementById('preloaderCounter');

    if (!preloader) return;

    if (prefersReducedMotion) {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.remove(), 500);
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 4;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        if (progressBar) progressBar.style.width = '100%';
        if (counter) counter.textContent = '100%';

        setTimeout(() => {
          preloader.classList.add('fade-out');
          document.body.classList.add('loaded');
          // Trigger initial hero reveal
          triggerHeroReveal();
          setTimeout(() => preloader.remove(), 900);
        }, 400);
      } else {
        if (progressBar) progressBar.style.width = progress + '%';
        if (counter) counter.textContent = progress + '%';
      }
    }, 45);
  }

  function triggerHeroReveal() {
    const revealElements = document.querySelectorAll('.hero-section .reveal-fade, .hero-section .reveal-title');
    revealElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('revealed');
      }, index * 120);
    });
  }

  // ------------------------------------------------------------------
  // 2. HERO SUBTITLE ROTATING TYPEWRITER
  // ------------------------------------------------------------------
  function initTypewriter() {
    const typedTextEl = document.getElementById('typedSubtitle');
    if (!typedTextEl) return;

    const titles = (PORTFOLIO_CONFIG && PORTFOLIO_CONFIG.personal && PORTFOLIO_CONFIG.personal.rotatingTitles) 
      ? PORTFOLIO_CONFIG.personal.rotatingTitles 
      : [
          "UI/UX Designer",
          "System Developer"
        ];

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function typeLoop() {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        typedTextEl.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typedTextEl.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 85;
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        // Pause at full word
        typingSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 450;
      }

      setTimeout(typeLoop, typingSpeed);
    }

    typeLoop();
  }

  // ------------------------------------------------------------------
  // 3. CUSTOM CURSOR PHYSICS (DESKTOP)
  // ------------------------------------------------------------------
  function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const follower = document.getElementById('cursorFollower');

    if (!cursor || !follower || prefersReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function renderCursor() {
      // Direct positioning for center dot
      cursorX += (mouseX - cursorX) * 0.45;
      cursorY += (mouseY - cursorY) * 0.45;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      // Smooth trailing interpolation for follower ring
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Expand cursor on interactive targets
    const interactiveSelectors = 'a, button, input, textarea, [data-tilt], .cert-thumb-container, .social-pill, .social-btn';
    
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  // ------------------------------------------------------------------
  // 4. INTERACTIVE 3D TILT EFFECT
  // ------------------------------------------------------------------
  function init3DTilt() {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const rotateX = -deltaY * 8; // Max 8 deg
        const rotateY = deltaX * 8;

        el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        el.style.transition = 'transform 0.5s ease-out';
      });

      el.addEventListener('mouseenter', () => {
        el.style.transition = 'none';
      });
    });
  }

  // ------------------------------------------------------------------
  // 5. MAGNETIC BUTTONS (DESKTOP)
  // ------------------------------------------------------------------
  function initMagneticButtons() {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate3d(${x * 0.24}px, ${y * 0.24}px, 0)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
        btn.style.transition = 'transform 0.4s ease-out';
      });

      btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'none';
      });
    });
  }

  // ------------------------------------------------------------------
  // 6. SCROLL PROGRESS BAR & BACK TO TOP PROGRESS
  // ------------------------------------------------------------------
  function initScrollTracking() {
    const progressBar = document.getElementById('scrollProgressBar');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const progressCircle = document.getElementById('scrollProgressCircle');

    const circumference = 2 * Math.PI * 20; // 125.66

    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) : 0;

      // Update top bar
      if (progressBar) {
        progressBar.style.width = (scrollPercent * 100) + '%';
      }

      // Update back-to-top circular offset
      if (progressCircle) {
        const offset = circumference - (scrollPercent * circumference);
        progressCircle.style.strokeDashoffset = offset;
      }

      // Toggle back to top button visibility
      if (backToTopBtn) {
        if (scrollTop > 400) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // ------------------------------------------------------------------
  // 7. ANIMATED STAT COUNTERS
  // ------------------------------------------------------------------
  function initCounters() {
    const counterContainer = document.getElementById('aboutCountersContainer');
    if (!counterContainer || !PORTFOLIO_CONFIG || !PORTFOLIO_CONFIG.personal.counters || PORTFOLIO_CONFIG.personal.counters.length === 0) return;

    // Render counter elements
    counterContainer.innerHTML = PORTFOLIO_CONFIG.personal.counters.map(item => `
      <div class="counter-card stagger-item">
        <span class="counter-number" data-target="${item.value}" data-decimal="${item.decimal ? 'true' : 'false'}" data-suffix="${item.suffix}">0${item.suffix}</span>
        <span class="counter-label">${item.label}</span>
      </div>
    `).join('');

    // IntersectionObserver to start counting
    const counterElements = counterContainer.querySelectorAll('.counter-number');
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          counterElements.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const isDecimal = counter.getAttribute('data-decimal') === 'true';
            const suffix = counter.getAttribute('data-suffix') || '';

            let current = 0;
            const duration = 1600; // ms
            const startTime = performance.now();

            function updateCount(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // EaseOutQuad
              const easeProgress = 1 - (1 - progress) * (1 - progress);

              current = easeProgress * target;

              if (isDecimal) {
                counter.textContent = current.toFixed(1) + suffix;
              } else {
                counter.textContent = Math.floor(current) + suffix;
              }

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                if (isDecimal) {
                  counter.textContent = target.toFixed(1) + suffix;
                } else {
                  counter.textContent = target + suffix;
                }
              }
            }

            requestAnimationFrame(updateCount);
          });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(counterContainer);
  }

  // ------------------------------------------------------------------
  // 8. SCROLL REVEALS (GSAP SCROLLTRIGGER WITH OBSERVER FALLBACK)
  // ------------------------------------------------------------------
  function initScrollReveals() {
    // If GSAP and ScrollTrigger are loaded via CDN
    if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
      try {
        window.gsap.registerPlugin(window.ScrollTrigger);

        // Section titles reveal
        document.querySelectorAll('.section-title').forEach(title => {
          window.gsap.from(title, {
            scrollTrigger: {
              trigger: title,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            y: 35,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out'
          });
        });

        // Section dividers
        document.querySelectorAll('.section-divider').forEach(divider => {
          window.gsap.from(divider, {
            scrollTrigger: {
              trigger: divider,
              start: 'top 85%'
            },
            scaleX: 0,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
          });
        });
      } catch (err) {
        console.warn('GSAP initialization notice:', err);
      }
    }

    // High-performance IntersectionObserver for all reveal and stagger elements
    const revealElements = document.querySelectorAll('.reveal-fade, .reveal-title, .stagger-item, .section-title');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // ------------------------------------------------------------------
  // 9. BUTTON RIPPLE EFFECT
  // ------------------------------------------------------------------
  function initButtonRipples() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn');
      if (!btn) return;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      btn.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 650);
    });
  }

  // ------------------------------------------------------------------
  // 10. ABOUT ME ID CARD WITH LACE SCROLL ANIMATION
  // ------------------------------------------------------------------
  function initAboutIdScrollAnimation() {
    const aboutSection = document.getElementById('about');
    const idStage = document.getElementById('aboutIdStage');
    if (!aboutSection || !idStage) return;

    if (prefersReducedMotion) return;

    let ticking = false;

    function updateIdPosition() {
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only animate when the About Me section is visible in the viewport
      if (rect.bottom > 60 && rect.top < windowHeight - 60) {
        // As user scrolls down past the section start, advance progress
        const startThreshold = windowHeight * 0.45;
        const travelRange = Math.max(250, rect.height * 0.65);
        const scrolled = startThreshold - rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / travelRange));

        // Movement: goes down as user scrolls down in About Me only
        const maxDown = window.innerWidth <= 768 ? 45 : 75;
        const translateY = progress * maxDown;

        // Subtle realistic pendulum physics sway
        const swayAngle = Math.sin(progress * Math.PI) * 1.8;

        idStage.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) rotate(${swayAngle.toFixed(2)}deg)`;
      } else if (rect.top >= windowHeight - 60) {
        // Above the About section - reset to top initial position
        idStage.style.transform = 'translate3d(0, 0px, 0) rotate(0deg)';
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateIdPosition);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateIdPosition();
  }

  // ------------------------------------------------------------------
  // INITIALIZATION ON DOM READY
  // ------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initTypewriter();
    initCustomCursor();
    init3DTilt();
    initMagneticButtons();
    initScrollTracking();
    initCounters();
    initScrollReveals();
    initButtonRipples();
    initAboutIdScrollAnimation();
  });

})();
