/**
 * ====================================================================
 * MAIN.JS - JAN MARINELLE YAP AUDITOR DIGITAL PORTFOLIO
 * ====================================================================
 * Core Functionality: Theme Switching, Navigation, Skills Rendering,
 * Timeline, Education, Contact Validation, and Toast Notifications
 */

(function () {
  'use strict';

  // ------------------------------------------------------------------
  // 1. THEME TOGGLE CONTROLLER (PERSISTENT VIA LOCALSTORAGE)
  // ------------------------------------------------------------------
  function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');
    const htmlEl = document.documentElement;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    // Retrieve saved preference or check system preference
    const savedTheme = localStorage.getItem('jmya_portfolio_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    function toggleTheme() {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggleBtn) {
      mobileThemeToggleBtn.addEventListener('click', toggleTheme);
    }

    function setTheme(theme) {
      htmlEl.setAttribute('data-theme', theme);
      localStorage.setItem('jmya_portfolio_theme', theme);

      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', theme === 'dark' ? '#19161B' : '#FFFAF7');
      }

      const isDark = theme === 'dark';
      const desktopIcon = document.getElementById('themeToggleIcon');
      const mobileIcon = document.getElementById('mobileThemeToggleIcon');

      // Update the single icon dynamically: Sun in dark mode, Moon in light mode
      if (desktopIcon) {
        desktopIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
      if (mobileIcon) {
        mobileIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }

      const label = isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme';
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-checked', isDark ? 'true' : 'false');
        themeToggleBtn.setAttribute('title', label);
        themeToggleBtn.setAttribute('aria-label', label);
      }
      if (mobileThemeToggleBtn) {
        mobileThemeToggleBtn.setAttribute('aria-checked', isDark ? 'true' : 'false');
        mobileThemeToggleBtn.setAttribute('title', label);
        mobileThemeToggleBtn.setAttribute('aria-label', label);
      }
    }
  }

  // ------------------------------------------------------------------
  // 2. STICKY NAVBAR & ACTIVE LINK TRACKING
  // ------------------------------------------------------------------
  function initNavigation() {
    const header = document.getElementById('siteHeader');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-links .mobile-link');
    const sections = document.querySelectorAll('section[id]');

    function handleScroll() {
      const scrollY = window.scrollY;

      // Sticky glassmorphism header
      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Active Section Highlighting
      let currentSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ------------------------------------------------------------------
  // 3. MOBILE MENU DRAWER
  // ------------------------------------------------------------------
  function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileNavMenu');
    const mobileBackdrop = document.getElementById('mobileNavBackdrop');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
      if (!mobileDrawer || !hamburgerBtn) return;
      mobileDrawer.classList.add('active');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      hamburgerBtn.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      if (!mobileDrawer || !hamburgerBtn) return;
      mobileDrawer.classList.remove('active');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', () => {
        if (mobileDrawer.classList.contains('active')) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // ------------------------------------------------------------------
  // 4. RENDER SKILLS & TABS
  // ------------------------------------------------------------------
  function renderSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    const tabButtons = document.querySelectorAll('.skill-tab-btn');

    if (!skillsContainer || !PORTFOLIO_CONFIG || !PORTFOLIO_CONFIG.skills) return;

    const technicalSkills = PORTFOLIO_CONFIG.skills.technical || [];
    const professionalSkills = PORTFOLIO_CONFIG.skills.professional || [];

    let currentSkillTab = 'all';

    function displaySkills(filter) {
      let skillList = [];
      if (filter === 'all') {
        skillList = [
          ...technicalSkills.map(s => ({ ...s, type: 'Technical' })),
          ...professionalSkills.map(s => ({ ...s, type: 'Professional' }))
        ];
      } else if (filter === 'technical') {
        skillList = technicalSkills.map(s => ({ ...s, type: 'Technical' }));
      } else if (filter === 'professional') {
        skillList = professionalSkills.map(s => ({ ...s, type: 'Professional' }));
      }

      skillsContainer.innerHTML = skillList.map(skill => {
        return `
          <div class="skill-card stagger-item revealed" data-category="${skill.type.toLowerCase()}">
            <div class="skill-card-top">
              <div class="skill-icon-wrap">
                <i class="${skill.icon}" aria-hidden="true"></i>
              </div>
              <span class="skill-level-badge">${skill.level}</span>
            </div>

            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-desc">${skill.description}</p>
          </div>
        `;
      }).join('');
    }

    // Initial render
    displaySkills('all');

    // Tab buttons event listeners
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        if (tab === currentSkillTab) return;

        tabButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        currentSkillTab = tab;

        // Smooth transition
        skillsContainer.style.opacity = '0.3';
        skillsContainer.style.transform = 'translateY(6px)';
        setTimeout(() => {
          displaySkills(tab);
          skillsContainer.style.opacity = '1';
          skillsContainer.style.transform = 'translateY(0)';
        }, 160);
      });
    });
  }

  // ------------------------------------------------------------------
  // 5. RENDER EXPERIENCE TIMELINE (EXECUTIVE ROADMAP ARRANGEMENT)
  // ------------------------------------------------------------------
  function renderExperience() {
    const experienceList = document.getElementById('experienceList');
    if (!experienceList || !PORTFOLIO_CONFIG || !PORTFOLIO_CONFIG.experience) return;

    experienceList.innerHTML = PORTFOLIO_CONFIG.experience.map((exp, index) => {
      const milestoneNum = String(index + 1).padStart(2, '0');
      const respHtml = (exp.responsibilities || []).map(r => `<li>${r}</li>`).join('');
      const achieveHtml = (exp.achievements || []).map(a => `<li>${a}</li>`).join('');
      const techHtml = (exp.technologies || []).map(t => `<span class="tech-tag">${t}</span>`).join('');

      return `
        <div class="timeline-item stagger-item revealed" data-id="${exp.id}">
          <div class="timeline-milestone-node" aria-hidden="true">${milestoneNum}</div>
          <article class="timeline-card tilt-card" data-tilt>
            <div class="timeline-header-row">
              <div class="timeline-title-group">
                <h3 class="timeline-role">${exp.role}</h3>
                <div class="timeline-org">
                  <i class="fa-solid fa-building" aria-hidden="true"></i>
                  <span>${exp.company} &bull; ${exp.location}</span>
                </div>
              </div>
              <div class="timeline-badge-group">
                <span class="timeline-date-chip"><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${exp.period}</span>
                <span class="timeline-status-pill">Milestone ${milestoneNum}</span>
              </div>
            </div>

            <p class="timeline-overview">${exp.description}</p>

            <div class="timeline-dual-grid">
              <div class="timeline-column">
                <h4 class="timeline-column-title"><i class="fa-solid fa-list-check" aria-hidden="true"></i> Core Responsibilities</h4>
                <ul class="timeline-exec-list">
                  ${respHtml}
                </ul>
              </div>
              <div class="timeline-column">
                <h4 class="timeline-column-title"><i class="fa-solid fa-trophy" aria-hidden="true"></i> Key Accomplishments</h4>
                <ul class="timeline-exec-list timeline-achievements-list">
                  ${achieveHtml}
                </ul>
              </div>
            </div>

            <div class="timeline-footer-row">
              <div class="timeline-tech-tags">
                ${techHtml}
              </div>
              ${exp.isSample ? `
                <div class="timeline-sample-badge">
                  <i class="fa-solid fa-circle-info" aria-hidden="true"></i> Clearly Marked Sample Experience Placeholder
                </div>
              ` : ''}
            </div>
          </article>
        </div>
      `;
    }).join('');
  }

  // ------------------------------------------------------------------
  // 6. RENDER EDUCATION
  // ------------------------------------------------------------------
  function renderEducation() {
    const educationGrid = document.getElementById('educationGrid');
    if (!educationGrid || !PORTFOLIO_CONFIG || !PORTFOLIO_CONFIG.education) return;

    educationGrid.innerHTML = PORTFOLIO_CONFIG.education.map(edu => {
      const achievementsHtml = edu.achievements.map(a => `<li>${a}</li>`).join('');
      const courseworkHtml = edu.coursework.map(c => `<span class="course-pill">${c}</span>`).join('');

      return `
        <article class="education-card stagger-item">
          <div class="education-icon-box">
            <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
          </div>

          <span class="education-period-badge">${edu.period}</span>
          <h3 class="education-degree">${edu.degree}</h3>
          <p class="education-school">${edu.institution}</p>

          <div class="education-status-tag">
            <span class="education-status-dot"></span>
            <span>${edu.status}</span>
          </div>

          <h4 class="education-section-subhead">Key Achievements & Activities</h4>
          <ul class="education-honors-list">
            ${achievementsHtml}
          </ul>

          <h4 class="education-section-subhead" style="margin-top: 1rem;">Relevant Coursework</h4>
          <div class="coursework-pills">
            ${courseworkHtml}
          </div>
        </article>
      `;
    }).join('');

    requestAnimationFrame(() => {
      const cards = educationGrid.querySelectorAll('.stagger-item');
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('revealed'), i * 80);
      });
    });
  }

  // ------------------------------------------------------------------
  // 7. CONTACT FORM VALIDATION & CLIENT-SIDE MAILTO WORKFLOW
  // ------------------------------------------------------------------
  function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const sendFormBtn = document.getElementById('sendFormBtn');
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const copyMessageContentBtn = document.getElementById('copyMessageContentBtn');
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('senderSubject');
    const messageInput = document.getElementById('senderMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField(input, errorEl, validator, errorMsg) {
      const value = input.value.trim();
      const isValid = validator(value);
      if (!isValid) {
        input.classList.add('is-invalid');
        errorEl.textContent = errorMsg;
      } else {
        input.classList.remove('is-invalid');
        errorEl.textContent = '';
      }
      return isValid;
    }

    // Real-time validation on input
    if (nameInput) {
      nameInput.addEventListener('input', () => {
        validateField(nameInput, nameError, val => val.length >= 2, 'Please enter your full name (at least 2 characters).');
      });
    }

    if (emailInput) {
      emailInput.addEventListener('input', () => {
        validateField(emailInput, emailError, val => emailRegex.test(val), 'Please enter a valid email address.');
      });
    }

    if (subjectInput) {
      subjectInput.addEventListener('input', () => {
        validateField(subjectInput, subjectError, val => val.length >= 3, 'Please provide a subject line (at least 3 characters).');
      });
    }

    if (messageInput) {
      messageInput.addEventListener('input', () => {
        validateField(messageInput, messageError, val => val.length >= 10, 'Please write a message of at least 10 characters.');
      });
    }

    function buildEmailPayload(nameVal, emailVal, subjectVal, messageVal) {
      const recipient = (PORTFOLIO_CONFIG && PORTFOLIO_CONFIG.personal && PORTFOLIO_CONFIG.personal.details && PORTFOLIO_CONFIG.personal.details.email) || 'janmarinellea@gmail.com';
      const cleanName = nameVal || 'Visitor';
      const cleanEmail = emailVal || 'Not provided';
      const cleanSubject = subjectVal || 'General Inquiry';
      const cleanMessage = messageVal || '';
      const emailBody = `Hello Jan Marinelle,\n\nYou have received a new inquiry from your personal digital portfolio:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n\n---\nDirect Portfolio Message to ${recipient}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(`[Portfolio Inquiry] ${cleanSubject}`)}&body=${encodeURIComponent(emailBody)}`;
      const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${cleanSubject}`)}&body=${encodeURIComponent(emailBody)}`;
      return { recipient, emailBody, gmailUrl, mailtoUrl, cleanName, cleanEmail, cleanSubject, cleanMessage };
    }

    // Form submit handler - sends directly to janmarinellea@gmail.com
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameValid = validateField(nameInput, nameError, val => val.length >= 2, 'Please enter your full name.');
        const isEmailValid = validateField(emailInput, emailError, val => emailRegex.test(val), 'Please enter a valid email address.');
        const isSubjectValid = validateField(subjectInput, subjectError, val => val.length >= 3, 'Please provide a subject line.');
        const isMessageValid = validateField(messageInput, messageError, val => val.length >= 10, 'Please enter your message (min 10 characters).');

        if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
          showToast('Please fix the errors in the form before sending.', 'error', 'fa-solid fa-circle-exclamation');
          return;
        }

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        const payload = buildEmailPayload(name, email, subject, message);

        // Always copy message content to user's clipboard for safety
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(payload.emailBody).catch(() => {});
        }

        // Check if environment is running locally (file:// protocol) or on a live web server (http/https)
        const isLocalFile = window.location.protocol === 'file:' || !window.location.protocol.startsWith('http');

        if (isLocalFile) {
          // In local file mode, external AJAX forms are blocked by browser CORS/origin policies.
          // Launch direct Gmail web composer in a new tab.
          window.open(payload.gmailUrl, '_blank');
          showToast(
            `Opening Gmail to send directly to ${payload.recipient}! (Details copied to clipboard)`,
            'success',
            'fa-solid fa-paper-plane'
          );
          contactForm.reset();
          return;
        }

        // On live web server, attempt FormSubmit API with strict success checking & instant fallback
        let originalBtnHtml = '';
        if (sendFormBtn) {
          originalBtnHtml = sendFormBtn.innerHTML;
          sendFormBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>`;
          sendFormBtn.disabled = true;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        formData.append('_subject', `[Portfolio Message] ${subject} from ${name}`);
        formData.append('_captcha', 'false');
        formData.append('_template', 'table');

        fetch(`https://formsubmit.co/ajax/${encodeURIComponent(payload.recipient)}`, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Server status ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          // Only treat as success if FormSubmit confirmed success: true
          if (data && (data.success === true || data.success === 'true')) {
            showToast(
              `Thank you, ${name}! Your message was successfully sent to ${payload.recipient}.`,
              'success',
              'fa-solid fa-paper-plane'
            );
            contactForm.reset();
          } else {
            // FormSubmit requires 1-time activation or returned false -> launch Gmail directly
            window.open(payload.gmailUrl, '_blank');
            showToast(
              `Opening Gmail to send directly to ${payload.recipient}!`,
              'info',
              'fa-solid fa-envelope'
            );
            contactForm.reset();
          }
        })
        .catch(err => {
          // Network fallback -> launch Gmail
          window.open(payload.gmailUrl, '_blank');
          showToast(
            `Opening Gmail to send directly to ${payload.recipient}!`,
            'info',
            'fa-solid fa-envelope'
          );
          contactForm.reset();
        })
        .finally(() => {
          if (sendFormBtn) {
            sendFormBtn.innerHTML = originalBtnHtml;
            sendFormBtn.disabled = false;
          }
        });
      });
    }

    // Copy Email directly
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const email = PORTFOLIO_CONFIG.personal.details.email || 'jan.auditor@example.com';
        copyToClipboard(email, 'Email address copied to clipboard!');
      });
    }

    // Copy Message Content to clipboard button
    if (copyMessageContentBtn) {
      copyMessageContentBtn.addEventListener('click', () => {
        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const subject = subjectInput ? subjectInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';

        if (!message) {
          showToast('Please type a message first to copy.', 'info', 'fa-regular fa-comment');
          return;
        }

        const formatted = `Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nSubject: ${subject || 'General Inquiry'}\n\nMessage:\n${message}`;
        copyToClipboard(formatted, 'Form message copied to clipboard!');
      });
    }

    function copyToClipboard(text, successToastMsg) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(successToastMsg, 'success', 'fa-solid fa-check');
        }).catch(() => {
          fallbackCopyText(text, successToastMsg);
        });
      } else {
        fallbackCopyText(text, successToastMsg);
      }
    }

    function fallbackCopyText(text, successToastMsg) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showToast(successToastMsg, 'success', 'fa-solid fa-check');
      } catch (err) {
        showToast('Unable to copy automatically.', 'error', 'fa-solid fa-triangle-exclamation');
      }
      document.body.removeChild(textarea);
    }
  }

  // ------------------------------------------------------------------
  // 8. TOAST NOTIFICATION UTILITY
  // ------------------------------------------------------------------
  window.showToast = function (message, type = 'info', iconClass = 'fa-solid fa-circle-info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');

    toast.innerHTML = `
      <i class="${iconClass} toast-icon" aria-hidden="true"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };

  // ------------------------------------------------------------------
  // 9. DYNAMIC COPYRIGHT YEAR
  // ------------------------------------------------------------------
  function updateCopyrightYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // ------------------------------------------------------------------
  // INITIALIZATION ON DOM READY
  // ------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initMobileMenu();
    renderSkills();
    renderExperience();
    renderEducation();
    initContactForm();
    updateCopyrightYear();
  });

})();
