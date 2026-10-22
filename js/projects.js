/**
 * ====================================================================
 * PROJECTS.JS - JAN MARINELLE YAP AUDITOR DIGITAL PORTFOLIO
 * ====================================================================
 * Dynamic Project Rendering, Category Filtering, and Modal Controllers
 */

(function () {
  'use strict';

  // ------------------------------------------------------------------
  // DOM ELEMENT REFERENCES
  // ------------------------------------------------------------------
  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Project Modal Elements
  const projectModalBackdrop = document.getElementById('projectModalBackdrop');
  const projectModal = document.getElementById('projectModal');
  const projectModalCloseBtn = document.getElementById('projectModalCloseBtn');
  const projectModalContent = document.getElementById('projectModalContent');

  // Certificate Elements
  const certificatesGrid = document.getElementById('certificatesGrid');
  const certificateModalBackdrop = document.getElementById('certificateModalBackdrop');
  const certificateModal = document.getElementById('certificateModal');
  const certModalCloseBtn = document.getElementById('certModalCloseBtn');
  const certModalContent = document.getElementById('certModalContent');

  // CV Modal Elements
  const viewCvModalBtn = document.getElementById('viewCvModalBtn');
  const cvModalBackdrop = document.getElementById('cvModalBackdrop');
  const cvModalCloseBtn = document.getElementById('cvModalCloseBtn');

  let activeProjectFilter = 'all';
  let lastFocusedElement = null;

  // ------------------------------------------------------------------
  // 1. RENDER PROJECTS
  // ------------------------------------------------------------------
  function renderProjects(filter = 'all') {
    if (!projectsGrid || !PORTFOLIO_CONFIG || !PORTFOLIO_CONFIG.projects) return;

    const filteredProjects = PORTFOLIO_CONFIG.projects.filter(project => {
      if (filter === 'all') return true;
      return project.category === filter;
    });

    if (filteredProjects.length === 0) {
      projectsGrid.innerHTML = `
        <div class="projects-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
          <i class="fa-regular fa-folder-open" style="font-size: 2.5rem; color: var(--color-rose); margin-bottom: 1rem; display: block;"></i>
          <h4 style="font-family: var(--font-heading); font-size: 1.3rem;">No projects in this category yet</h4>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Check back soon as new works are added regularly.</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filteredProjects.map((project, index) => {
      const liveBtnHtml = project.liveUrl 
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` 
        : '';

      const tagsHtml = project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('');

      return `
        <article class="project-card stagger-item" data-category="${project.category}" data-id="${project.id}">
          <div class="project-thumb-wrap" data-id="${project.id}" role="button" tabindex="0" title="Click to view details and screenshots for ${project.title}">
            <img 
              src="${project.image}" 
              alt="${project.title} - ${project.categoryLabel}" 
              class="project-thumb" 
              loading="lazy"
              onerror="this.onerror=null; this.src='assets/images/about.jpg';"
            />
            <div class="project-overlay-preview">
              <i class="fa-regular fa-eye"></i>
              <span>Preview & Details</span>
            </div>
            <div class="project-badges-row">
              <span class="project-cat-badge">${project.categoryLabel}</span>
              ${project.badge ? `<span class="project-feature-badge">${project.badge}</span>` : ''}
            </div>
          </div>

          <div class="project-body">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.shortDescription}</p>

            <div class="project-tags-list">
              ${tagsHtml}
            </div>

            <div class="project-actions">
              <button type="button" class="btn btn-outline btn-xs view-project-btn" data-id="${project.id}">
                <i class="fa-regular fa-eye"></i> View Details
              </button>
              ${liveBtnHtml}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Trigger reveal transition
    requestAnimationFrame(() => {
      const cards = projectsGrid.querySelectorAll('.stagger-item');
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('revealed'), i * 80);
      });
    });

    // Attach Click Handlers for Details buttons and Thumbnails
    const clickableElements = projectsGrid.querySelectorAll('.view-project-btn, .project-thumb-wrap');
    clickableElements.forEach(el => {
      el.addEventListener('click', (e) => {
        const projId = el.getAttribute('data-id');
        openProjectModal(projId);
      });
      if (el.classList.contains('project-thumb-wrap')) {
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const projId = el.getAttribute('data-id');
            openProjectModal(projId);
          }
        });
      }
    });
  }

  // ------------------------------------------------------------------
  // 2. PROJECT CATEGORY FILTERING
  // ------------------------------------------------------------------
  function setupProjectFilters() {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        if (filter === activeProjectFilter) return;

        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeProjectFilter = filter;

        // Smooth fade-out before re-rendering
        if (projectsGrid) {
          projectsGrid.style.opacity = '0';
          projectsGrid.style.transform = 'translateY(10px)';
          projectsGrid.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

          setTimeout(() => {
            renderProjects(filter);
            projectsGrid.style.opacity = '1';
            projectsGrid.style.transform = 'translateY(0)';
          }, 260);
        }
      });
    });
  }

  // ------------------------------------------------------------------
  // 3. PROJECT DETAILS MODAL
  // ------------------------------------------------------------------
  function openProjectModal(projectId) {
    if (!projectModalBackdrop || !projectModalContent) return;

    const project = PORTFOLIO_CONFIG.projects.find(p => p.id === projectId);
    if (!project) return;

    lastFocusedElement = document.activeElement;

    const liveBtn = project.liveUrl 
      ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Application</a>` 
      : '';

    const featuresListHtml = (project.features || []).map(f => `<li>${f}</li>`).join('');
    const tagsHtml = project.technologies.map(t => `<span class="project-tag">${t}</span>`).join('');

    let galleryScreenshotsHtml = '';
    if (project.screenshots && project.screenshots.length > 1) {
      galleryScreenshotsHtml = `
        <div class="modal-thumbnails-strip" aria-label="Project screenshot switcher">
          ${project.screenshots.map((s, idx) => `
            <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-src="${s}" title="View screenshot ${idx + 1}">
              <img src="${s}" alt="${project.title} screenshot ${idx + 1}" />
            </button>
          `).join('')}
        </div>
      `;
    }

    projectModalContent.innerHTML = `
      <div class="modal-gallery-wrap">
        <img 
          src="${project.image}" 
          alt="${project.title} Preview Screenshot" 
          class="modal-gallery-img" 
          id="modalMainGalleryImg"
          onerror="this.onerror=null; this.src='assets/images/about.jpg';"
        />
      </div>
      ${galleryScreenshotsHtml}

      <div class="modal-project-cat">${project.categoryLabel} ${project.isSample ? '• (Sample Project Exploration)' : ''}</div>
      <h2 class="modal-project-title" id="modalProjectTitle">${project.title}</h2>

      <p class="modal-project-full-desc">${project.fullDescription}</p>

      <div class="modal-features-section">
        <h4 class="modal-features-title"><i class="fa-solid fa-list-check" style="color: var(--color-rose);"></i> Key Project Highlights</h4>
        <ul class="modal-features-list">
          ${featuresListHtml}
        </ul>
      </div>

      <div class="modal-tech-stack" style="margin-bottom: 1.5rem;">
        <h4 class="modal-features-title"><i class="fa-solid fa-layer-group" style="color: var(--color-gold);"></i> Technologies & Methodologies</h4>
        <div class="project-tags-list">
          ${tagsHtml}
        </div>
      </div>

      <div class="modal-project-actions">
        ${liveBtn}
        <button type="button" class="btn btn-ghost" id="modalInternalCloseBtn">
          Close Preview
        </button>
      </div>
    `;

    // Setup thumbnail click switcher if available
    const thumbBtns = projectModalContent.querySelectorAll('.modal-thumb-btn');
    const mainImg = projectModalContent.querySelector('#modalMainGalleryImg');
    thumbBtns.forEach(tBtn => {
      tBtn.addEventListener('click', () => {
        const newSrc = tBtn.getAttribute('data-src');
        if (mainImg && newSrc) {
          mainImg.style.opacity = '0.4';
          setTimeout(() => {
            mainImg.src = newSrc;
            mainImg.style.opacity = '1';
          }, 150);
          thumbBtns.forEach(b => b.classList.remove('active'));
          tBtn.classList.add('active');
        }
      });
    });

    projectModalBackdrop.classList.add('active');
    projectModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button inside modal
    if (projectModalCloseBtn) {
      projectModalCloseBtn.focus();
    }

    const internalClose = document.getElementById('modalInternalCloseBtn');
    if (internalClose) {
      internalClose.addEventListener('click', closeProjectModal);
    }
  }

  function closeProjectModal() {
    if (!projectModalBackdrop) return;
    projectModalBackdrop.classList.remove('active');
    projectModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // ------------------------------------------------------------------
  // 4. RENDER CERTIFICATES & CERTIFICATE MODAL
  // ------------------------------------------------------------------
  function renderCertificates() {
    if (!certificatesGrid || !PORTFOLIO_CONFIG || !PORTFOLIO_CONFIG.certificates) return;

    certificatesGrid.innerHTML = PORTFOLIO_CONFIG.certificates.map(cert => {
      const fileExt = cert.downloadPath.toLowerCase().endsWith('.pdf') 
        ? '.pdf' 
        : (cert.downloadPath.toLowerCase().endsWith('.png') ? '.png' : '.jpg');
      const downloadName = `Jan_Marinelle_Auditor_${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}${fileExt}`;

      return `
        <article class="cert-card stagger-item" data-id="${cert.id}">
          <div class="cert-thumb-container" data-cert-id="${cert.id}" title="Click to view credential">
            <img 
              src="${cert.image}" 
              alt="${cert.title} credential" 
              class="cert-thumb" 
              loading="lazy"
              onerror="this.onerror=null; this.src='assets/images/about.jpg';"
            />
            <div class="cert-overlay-preview">
              <i class="fa-regular fa-eye"></i>
              <span>Preview Certificate</span>
            </div>
          </div>

          <div class="cert-content">
            <h3 class="cert-title">${cert.title}</h3>
            <p class="cert-issuer">${cert.issuer}</p>

            <div class="cert-meta-row">
              <span><i class="fa-regular fa-calendar-check"></i> ${cert.dateIssued}</span>
              <span><i class="fa-solid fa-fingerprint"></i> ${cert.verificationId}</span>
            </div>

            <div class="cert-actions">
              <button type="button" class="btn btn-outline btn-xs view-cert-btn" data-cert-id="${cert.id}">
                <i class="fa-regular fa-eye"></i> View
              </button>
              <a href="${cert.downloadPath}" download="${downloadName}" target="_blank" class="btn btn-ghost btn-xs" title="Download certificate file">
                <i class="fa-solid fa-download"></i> Download
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Trigger reveal transition
    requestAnimationFrame(() => {
      const cards = certificatesGrid.querySelectorAll('.stagger-item');
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('revealed'), i * 80);
      });
    });

    // Attach click listeners for certificates
    const viewButtons = certificatesGrid.querySelectorAll('.view-cert-btn, .cert-thumb-container');
    viewButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const certId = btn.getAttribute('data-cert-id');
        openCertificateModal(certId);
      });
    });
  }

  function openCertificateModal(certId) {
    if (!certificateModalBackdrop || !certModalContent) return;

    const cert = PORTFOLIO_CONFIG.certificates.find(c => c.id === certId);
    if (!cert) return;

    lastFocusedElement = document.activeElement;

    const fileExt = cert.downloadPath.toLowerCase().endsWith('.pdf') 
      ? '.pdf' 
      : (cert.downloadPath.toLowerCase().endsWith('.png') ? '.png' : '.jpg');
    const downloadName = `Jan_Marinelle_Auditor_${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}${fileExt}`;

    const skillsPills = (cert.skillsCovered || '')
      .split(',')
      .map(s => `<span class="project-tag">${s.trim()}</span>`)
      .join('');

    certModalContent.innerHTML = `
      <div class="cert-zoom-wrap" id="certZoomContainer" title="Click to toggle 1.6x zoom">
        <img 
          src="${cert.image}" 
          alt="${cert.title} full resolution preview" 
          class="cert-modal-img" 
          id="certModalImg"
          onerror="this.onerror=null; this.src='assets/images/about.jpg';"
        />
      </div>

      <h3 class="modal-project-title" id="modalCertTitle">${cert.title}</h3>
      <p style="color: var(--color-rose); font-weight: 600; font-size: 0.98rem; margin-bottom: 0.35rem;">
        ${cert.issuer} ${cert.issuerOrg ? '&bull; ' + cert.issuerOrg : ''}
      </p>
      <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 1.1rem;">
        Verification ID: <strong>${cert.verificationId}</strong> &bull; Issued: ${cert.dateIssued} &bull; ${cert.duration || ''}
      </p>

      <div style="margin-bottom: 1.3rem; text-align: left; width: 100%; background: rgba(201, 140, 149, 0.08); padding: 1.1rem 1.3rem; border-radius: var(--radius-sm); border-left: 3px solid var(--color-rose);">
        <h4 style="font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-rose); margin-bottom: 0.4rem;">
          <i class="fa-solid fa-circle-info"></i> Certificate Description:
        </h4>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
          ${cert.description}
        </p>
      </div>

      <div style="margin-bottom: 1.5rem; text-align: left; width: 100%;">
        <h4 style="font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-gold); margin-bottom: 0.5rem;">
          <i class="fa-solid fa-layer-group"></i> Competencies & Focus Areas:
        </h4>
        <div class="project-tags-list">
          ${skillsPills}
        </div>
      </div>

      <div style="display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap;">
        <button type="button" class="btn btn-outline btn-sm" id="toggleZoomBtn">
          <i class="fa-solid fa-magnifying-glass-plus"></i> Toggle Zoom
        </button>
        <a href="${cert.downloadPath}" download="${downloadName}" target="_blank" class="btn btn-primary btn-sm">
          <i class="fa-solid fa-download"></i> Download Certificate File
        </a>
      </div>
    `;

    certificateModalBackdrop.classList.add('active');
    certificateModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Toggle zoom click
    const zoomContainer = document.getElementById('certZoomContainer');
    const toggleZoomBtn = document.getElementById('toggleZoomBtn');

    function toggleZoom() {
      if (zoomContainer) {
        zoomContainer.classList.toggle('is-zoomed');
      }
    }

    if (zoomContainer) zoomContainer.addEventListener('click', toggleZoom);
    if (toggleZoomBtn) toggleZoomBtn.addEventListener('click', toggleZoom);

    if (certModalCloseBtn) certModalCloseBtn.focus();
  }

  function closeCertificateModal() {
    if (!certificateModalBackdrop) return;
    certificateModalBackdrop.classList.remove('active');
    certificateModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // ------------------------------------------------------------------
  // 5. CV PREVIEW MODAL
  // ------------------------------------------------------------------
  function setupCvModal() {
    if (viewCvModalBtn && cvModalBackdrop) {
      viewCvModalBtn.addEventListener('click', () => {
        lastFocusedElement = document.activeElement;
        cvModalBackdrop.classList.add('active');
        cvModalBackdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (cvModalCloseBtn) cvModalCloseBtn.focus();
      });
    }

    if (cvModalCloseBtn && cvModalBackdrop) {
      cvModalCloseBtn.addEventListener('click', () => {
        cvModalBackdrop.classList.remove('active');
        cvModalBackdrop.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocusedElement) lastFocusedElement.focus();
      });
    }
  }

  // ------------------------------------------------------------------
  // 6. GLOBAL MODAL EVENT LISTENERS (ESCAPE & BACKDROP CLICK)
  // ------------------------------------------------------------------
  function setupGlobalModalListeners() {
    // Project modal
    if (projectModalCloseBtn) {
      projectModalCloseBtn.addEventListener('click', closeProjectModal);
    }
    if (projectModalBackdrop) {
      projectModalBackdrop.addEventListener('click', (e) => {
        if (e.target === projectModalBackdrop) closeProjectModal();
      });
    }

    // Certificate modal
    if (certModalCloseBtn) {
      certModalCloseBtn.addEventListener('click', closeCertificateModal);
    }
    if (certificateModalBackdrop) {
      certificateModalBackdrop.addEventListener('click', (e) => {
        if (e.target === certificateModalBackdrop) closeCertificateModal();
      });
    }

    // CV modal backdrop click
    if (cvModalBackdrop) {
      cvModalBackdrop.addEventListener('click', (e) => {
        if (e.target === cvModalBackdrop) {
          cvModalBackdrop.classList.remove('active');
          cvModalBackdrop.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
          if (lastFocusedElement) lastFocusedElement.focus();
        }
      });
    }

    // Escape key closes any active modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (projectModalBackdrop && projectModalBackdrop.classList.contains('active')) {
          closeProjectModal();
        } else if (certificateModalBackdrop && certificateModalBackdrop.classList.contains('active')) {
          closeCertificateModal();
        } else if (cvModalBackdrop && cvModalBackdrop.classList.contains('active')) {
          cvModalBackdrop.classList.remove('active');
          cvModalBackdrop.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
          if (lastFocusedElement) lastFocusedElement.focus();
        }
      }
    });
  }

  // ------------------------------------------------------------------
  // INITIALIZATION
  // ------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    setupProjectFilters();
    renderCertificates();
    setupCvModal();
    setupGlobalModalListeners();
  });

})();
