/* ==========================================================================
   PORTFOLIO SCRIPT
   Priyansh Namdeo — Photographer & Videographer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================================
     THEME TOGGLE
     ========================================================================= */
  const themeToggle = document.getElementById('themeToggle');
  const body        = document.body;

  function applyTheme(theme) {
    body.classList.remove('theme-dark', 'theme-light');
    body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
    localStorage.setItem('portfolio-theme', theme);
  }

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }

  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.contains('theme-light');
    applyTheme(isLight ? 'dark' : 'light');
    // Brief pulse on toggle
    if (window.anime) {
      anime({ targets: themeToggle, scale: [1, 1.22, 1], duration: 400, easing: 'easeOutBack' });
    }
  });

  /* =========================================================================
     NAVBAR — scroll glass + active links + hamburger
     ========================================================================= */
  const navbar       = document.getElementById('navbar');
  const navLogo      = document.getElementById('navLogo');
  const navLinks     = document.getElementById('navLinks');
  const navHamburger = document.getElementById('navHamburger');
  const navAnchors   = navLinks.querySelectorAll('a[data-nav]');
  const panels       = Array.from(document.querySelectorAll('.panel'));

  // Scroll glass effect
  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // Hamburger toggle
  navHamburger.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('menu-open');
    navLinks.classList.toggle('open', isOpen);
    navHamburger.setAttribute('aria-expanded', String(isOpen));
    // Prevent body scroll when menu open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu when link clicked
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      navbar.classList.remove('menu-open');
      navLinks.classList.remove('open');
      navHamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Active link based on section in view
  function setActiveNavLink(sectionId) {
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.dataset.nav === sectionId);
    });
  }

  /* =========================================================================
     DOT NAV
     ========================================================================= */
  const dots          = Array.from(document.querySelectorAll('.dot'));
  const dotNav        = document.getElementById('dotNav');
  const scrollCue     = document.getElementById('scrollCue');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = document.getElementById(dot.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  if (scrollCue) {
    scrollCue.addEventListener('click', () => {
      document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
    });
    scrollCue.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* =========================================================================
     INTERSECTION OBSERVER — panel tracking
     ========================================================================= */
  const ioThreshold = window.innerWidth < 768 ? 0.12 : 0.25;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx     = panels.indexOf(entry.target);
        const section = entry.target.id;

        // Update dot nav
        dots.forEach(d => d.classList.remove('active'));
        if (dots[idx]) dots[idx].classList.add('active');

        // Update nav links
        setActiveNavLink(section);

        // Trigger section entrance animations
        triggerSectionAnimation(section);
      }
    });
  }, { threshold: ioThreshold });

  panels.forEach(p => io.observe(p));

  /* =========================================================================
     SECTION ENTRANCE ANIMATIONS — anime.js
     ========================================================================= */
  const animatedSections = new Set(); // track which sections have animated

  function triggerSectionAnimation(sectionId) {
    if (!window.anime || animatedSections.has(sectionId)) return;
    animatedSections.add(sectionId);

    if (sectionId === 'work') {
      // Work header entrance
      anime({
        targets: '#workHeader',
        opacity: [0, 1],
        translateY: [28, 0],
        duration: 800,
        easing: 'easeOutExpo',
      });
      // Tab buttons stagger
      anime({
        targets: '.tab-btn',
        opacity: [0, 1],
        translateY: [16, 0],
        delay: anime.stagger(80, { start: 300 }),
        duration: 600,
        easing: 'easeOutExpo',
      });
      // Work character slide in from left
      anime({
        targets: '#workCharacter',
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 1000,
        delay: 200,
        easing: 'easeOutExpo',
      });
    }

    if (sectionId === 'thanks') {
      anime({
        targets: '#thanksContent',
        opacity: [0, 1],
        translateX: [-32, 0],
        duration: 900,
        easing: 'easeOutExpo',
      });
      anime({
        targets: '#thanksCharCol',
        opacity: [0, 1],
        translateX: [40, 0],
        duration: 900,
        delay: 180,
        easing: 'easeOutExpo',
      });
      // Social links stagger
      anime({
        targets: '.social-link',
        opacity: [0, 1],
        translateY: [14, 0],
        delay: anime.stagger(90, { start: 500 }),
        duration: 600,
        easing: 'easeOutBack',
      });
    }
  }



  /* =========================================================================
     HERO ENTRANCE ANIMATION — anime.js timeline
     ========================================================================= */
  if (window.anime) {
    const heroTl = anime.timeline({ easing: 'easeOutExpo' });

    // 1. Navbar elements slide down
    heroTl.add({
      targets: navLogo,
      opacity: [0, 1],
      translateY: [-12, 0],
      duration: 700,
    });

    heroTl.add({
      targets: navLinks,
      opacity: [0, 1],
      translateY: [-12, 0],
      duration: 700,
    }, '-=600');

    heroTl.add({
      targets: themeToggle,
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 500,
    }, '-=600');

    // 2. Name lines slide up, staggered
    heroTl.add({
      targets: '.hero-name-line',
      opacity: [0, 1],
      translateY: [36, 0],
      delay: anime.stagger(140),
      duration: 1000,
    }, '-=400');

    // 3. Hero character rises up
    heroTl.add({
      targets: '#heroCharacter',
      opacity: [0, 1],
      translateY: [44, 0],
      duration: 1100,
    }, '-=700');

    // 4. Accent line scales in
    heroTl.add({
      targets: '#heroAccent',
      scaleX: [0, 1],
      duration: 600,
      easing: 'easeOutQuart',
    }, '-=600');

    // 5. Left panel (about text) fades in from left
    heroTl.add({
      targets: '#heroLeft',
      opacity: [0, 1],
      translateX: [-24, 0],
      duration: 800,
    }, '-=600');

    // 6. Scroll cue fades in last
    heroTl.add({
      targets: '#scrollCue',
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 600,
    }, '-=300');

    // 7. Dot nav
    heroTl.add({
      targets: '#dotNav',
      opacity: [0, 1],
      translateX: [12, 0],
      duration: 600,
    }, '-=500');

    // ---- Ribbon draw-in: single continuous path behind the character ----
    const ribbonEl = document.getElementById('ribbonPath');
    if (ribbonEl) {
      const pathLen = ribbonEl.getTotalLength ? ribbonEl.getTotalLength() : 2200;
      ribbonEl.style.strokeDasharray  = pathLen;
      ribbonEl.style.strokeDashoffset = pathLen;

      anime({
        targets: '#ribbonPath',
        strokeDashoffset: [pathLen, 0],
        duration: 2200,
        delay: 700,
        easing: 'easeInOutQuart',
      });
    }


    // ---- Sparkle stars: stagger in, then idle pulse loop ----
    anime({
      targets: '.sparkle',
      opacity: [0, 1],
      scale:   [0.3, 1],
      delay: anime.stagger(160, { start: 1000 }),
      duration: 700,
      easing: 'easeOutBack',
    });

    // Continuous gentle rotate/scale pulse on sparkles
    anime({
      targets: '.sparkle',
      rotate:  { value: '+=20', easing: 'easeInOutSine' },
      scale:   [1, 1.18, 1],
      duration: 2800,
      delay:   anime.stagger(400, { start: 2200 }),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
    });

    // ---- Lens flares: subtle fade in after ribbon ----
    anime({
      targets: ['.lens-flare--1', '.lens-flare--2'],
      opacity: [0, 1],
      translateX: [-20, 0],
      delay: anime.stagger(200, { start: 1600 }),
      duration: 900,
      easing: 'easeOutCubic',
    });
    anime({
      targets: '.lens-flare--dot',
      opacity: [0, 0.7],
      scale:   [0.5, 1],
      delay: 2000,
      duration: 600,
      easing: 'easeOutBack',
    });

  } /* end if (window.anime) — hero animations */



  /* =========================================================================
     TABS
     ========================================================================= */
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b  => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const panel = document.getElementById('tab-' + btn.dataset.tab);
      panel.classList.add('active');

      // Animate masonry items in
      if (window.anime) {
        anime({
          targets: panel.querySelectorAll('.masonry-item'),
          opacity: [0, 1],
          translateY: [18, 0],
          scale: [0.96, 1],
          delay: anime.stagger(30),
          duration: 480,
          easing: 'easeOutQuad',
        });
      }
    });
  });

  /* =========================================================================
     SUB-TABS — Creations (by category)
     ========================================================================= */
  let activeCreationCategory = 'photography';
  const subtabBtns = document.querySelectorAll('#tab-creations .subtab-btn');

  subtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      subtabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCreationCategory = btn.dataset.subtab;
      renderCreations();
    });
  });

  /* =========================================================================
     GALLERY RENDERING — PINTEREST & FOLDER HIERARCHY
     ========================================================================= */
  function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    const y = parts[0];
    const m = parts[1];
    const d = parts[2];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    if (d && m) {
      return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`;
    }
    return m ? `${months[parseInt(m, 10) - 1]} ${y}` : y;
  }

  function createMasonryItem(item, list = null) {
    const div = document.createElement('div');
    div.className = 'masonry-item pinterest-card';
    div.setAttribute('tabindex', '0');
    div.setAttribute('role', 'button');
    div.setAttribute('aria-label', `Open ${item.title}`);

    // Category tag pill
    const tag = document.createElement('div');
    tag.className = 'card-tag';
    const subLabel = item.subcategory ? item.subcategory.toUpperCase() : item.category.toUpperCase();
    tag.textContent = subLabel;
    div.appendChild(tag);

    if (item.type === 'video') {
      const vidWrap = document.createElement('div');
      vidWrap.className = 'media-wrap video-wrap';

      const vid = document.createElement('video');
      vid.src = item.src;
      vid.muted = true;
      vid.preload = 'metadata';
      vid.setAttribute('controlsList', 'nodownload noplaybackrate');
      vid.setAttribute('disablePictureInPicture', 'true');
      vidWrap.appendChild(vid);

      const badge = document.createElement('div');
      badge.className = 'play-badge';
      badge.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
      vidWrap.appendChild(badge);

      div.appendChild(vidWrap);
    } else {
      const imgWrap = document.createElement('div');
      imgWrap.className = 'media-wrap img-wrap';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;
      img.loading = 'lazy';
      img.setAttribute('draggable', 'false');
      imgWrap.appendChild(img);

      div.appendChild(imgWrap);
    }

    const overlay = document.createElement('div');
    overlay.className = 'item-overlay';
    overlay.innerHTML = `
      <div class="item-title">${item.title}</div>
      <div class="item-date">${formatDate(item.date)}</div>
    `;
    div.appendChild(overlay);

    div.addEventListener('click', () => openLightbox(item, list));
    div.addEventListener('keypress', (e) => { if (e.key === 'Enter') openLightbox(item, list); });

    return div;
  }

  function renderEmpty(container, msg) {
    container.innerHTML = `<div class="empty-note">${msg}</div>`;
  }

  function animateNewItems(container) {
    if (!window.anime) return;
    anime({
      targets: container.querySelectorAll('.masonry-item'),
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.96, 1],
      delay: anime.stagger(30),
      duration: 450,
      easing: 'easeOutQuad',
    });
  }

  function renderFeatured() {
    const container = document.getElementById('masonry-featured');
    if (!container) return;
    container.innerHTML = '';
    // Show top 3 featured items on the main showcase slide
    const items = GALLERY_ITEMS.filter(i => i.featured).slice(0, 3);
    if (!items.length) return renderEmpty(container, 'No featured pieces selected yet.');
    items.forEach(item => container.appendChild(createMasonryItem(item, items)));
    animateNewItems(container);
  }

  // Active folder state
  let currentFolder = 'photography';
  let currentSubfolder = 'all';

  function updateFolderCounts() {
    const photoCount = GALLERY_ITEMS.filter(i => i.category === 'photography').length;
    const videoCount = GALLERY_ITEMS.filter(i => i.category === 'video').length;
    const photoBadge = document.getElementById('badge-photography');
    const videoBadge = document.getElementById('badge-video');
    if (photoBadge) photoBadge.textContent = photoCount;
    if (videoBadge) videoBadge.textContent = videoCount;
  }

  function renderSubfolderPills() {
    const subfolderNavRow = document.getElementById('subfolderNavRow');
    if (!subfolderNavRow) return;
    subfolderNavRow.innerHTML = '';

    const folderDef = GALLERY_FOLDERS.find(f => f.id === currentFolder);
    if (!folderDef) return;

    folderDef.subfolders.forEach(sub => {
      const btn = document.createElement('button');
      btn.className = 'subtab-btn' + (sub.id === currentSubfolder ? ' active' : '');
      
      // Calculate count for this subfolder
      let count = 0;
      if (sub.id === 'all') {
        count = GALLERY_ITEMS.filter(i => i.category === currentFolder).length;
      } else {
        count = GALLERY_ITEMS.filter(i => i.category === currentFolder && i.subcategory === sub.id).length;
      }

      btn.innerHTML = `<span>${sub.title}</span><span class="sub-count">(${count})</span>`;
      btn.addEventListener('click', () => {
        currentSubfolder = sub.id;
        renderSubfolderPills();
        renderCollectionsGrid();
      });
      subfolderNavRow.appendChild(btn);
    });
  }

  function updateBreadcrumb(itemCount) {
    const crumbFolder = document.getElementById('crumbFolder');
    const crumbSub = document.getElementById('crumbSub');
    const crumbCount = document.getElementById('crumbCount');
    const folderDef = GALLERY_FOLDERS.find(f => f.id === currentFolder);
    const subDef = folderDef ? folderDef.subfolders.find(s => s.id === currentSubfolder) : null;

    if (crumbFolder && folderDef) crumbFolder.textContent = folderDef.title;
    if (crumbSub && subDef) crumbSub.textContent = subDef.title;
    if (crumbCount) crumbCount.textContent = `— Showing 3 of ${itemCount} items`;
  }

  function renderCollectionsGrid() {
    const container = document.getElementById('masonry-collections');
    if (!container) return;
    container.innerHTML = '';

    let items = GALLERY_ITEMS.filter(i => i.category === currentFolder);
    if (currentSubfolder !== 'all') {
      items = items.filter(i => i.subcategory === currentSubfolder);
    }

    const totalCount = items.length;
    updateBreadcrumb(totalCount);

    if (!items.length) {
      renderEmpty(container, 'No items found in this collection.');
      return;
    }

    // Limit to exactly 3 items so it fits cleanly in the 3-column grid without scrolling
    const previewItems = items.slice(0, 3);
    previewItems.forEach(item => container.appendChild(createMasonryItem(item, previewItems)));
    animateNewItems(container);
  }

  // Bind Main Category / Folder Buttons
  const folderBtns = document.querySelectorAll('.folder-btn');
  folderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      folderBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFolder = btn.dataset.folder;
      currentSubfolder = 'all'; // Reset to all on folder switch
      renderSubfolderPills();
      renderCollectionsGrid();
    });
  });

  // Initial gallery loads
  updateFolderCounts();
  renderFeatured();
  renderSubfolderPills();
  renderCollectionsGrid();

  /* =========================================================================
     LIGHTBOX
     ========================================================================= */
  const lightbox        = document.getElementById('lightbox');
  const lightboxInner   = document.getElementById('lightboxInner');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose   = document.getElementById('lightboxClose');
  const lightboxPrev    = document.getElementById('lightboxPrev');
  const lightboxNext    = document.getElementById('lightboxNext');

  let currentLightboxList = [];
  let currentLightboxIndex = 0;

  function renderLightboxContent(item) {
    lightboxInner.innerHTML = '';
    if (item.type === 'video') {
      const vid     = document.createElement('video');
      vid.src       = item.src;
      vid.controls  = true;
      vid.autoplay  = true;
      vid.loop      = false;
      // Remove download option from video controls
      vid.setAttribute('controlsList', 'nodownload noplaybackrate');
      vid.setAttribute('disablePictureInPicture', 'true');
      lightboxInner.appendChild(vid);
    } else {
      const img = document.createElement('img');
      img.src   = item.src;
      img.alt   = item.title;
      img.setAttribute('draggable', 'false');
      lightboxInner.appendChild(img);
    }
    lightboxCaption.innerHTML = `
      <div class="cap-title">${item.title}</div>
      <div class="cap-date">${formatDate(item.date)}</div>
    `;
  }

  function openLightbox(item, list = null) {
    if (list && list.length) {
      currentLightboxList = list;
    } else {
      currentLightboxList = GALLERY_ITEMS;
    }
    currentLightboxIndex = currentLightboxList.findIndex(i => i.src === item.src);
    if (currentLightboxIndex === -1) currentLightboxIndex = 0;

    renderLightboxContent(currentLightboxList[currentLightboxIndex]);

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Animate lightbox content in
    if (window.anime) {
      anime({
        targets: lightboxInner,
        opacity: [0, 1],
        scale: [0.92, 1],
        duration: 420,
        easing: 'easeOutExpo',
      });
      anime({
        targets: lightboxCaption,
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 400,
        delay: 200,
        easing: 'easeOutQuad',
      });
    }

    // Focus the close button for accessibility
    setTimeout(() => lightboxClose.focus(), 50);
  }

  function stepLightbox(direction) {
    if (!currentLightboxList.length) return;
    currentLightboxIndex = (currentLightboxIndex + direction + currentLightboxList.length) % currentLightboxList.length;
    const item = currentLightboxList[currentLightboxIndex];
    
    renderLightboxContent(item);

    if (window.anime) {
      anime({
        targets: lightboxInner,
        opacity: [0.5, 1],
        scale: [0.97, 1],
        duration: 300,
        easing: 'easeOutQuad',
      });
    }
  }

  function closeLightbox() {
    if (window.anime) {
      anime({
        targets: lightboxInner,
        opacity: [1, 0],
        scale: [1, 0.92],
        duration: 280,
        easing: 'easeInQuad',
        complete: () => {
          lightbox.classList.remove('open');
          lightboxInner.innerHTML = '';
          document.body.style.overflow = '';
        },
      });
    } else {
      lightbox.classList.remove('open');
      lightboxInner.innerHTML = '';
      document.body.style.overflow = '';
    }
  }

  if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); stepLightbox(-1); });
  if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); stepLightbox(1); });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  /* =========================================================================
     MASONRY ITEM HOVER — subtle anime.js glow pulse on hover
     ========================================================================= */
  // Delegated via CSS :hover for performance — anime handles click feedback
  document.addEventListener('click', (e) => {
    const item = e.target.closest('.masonry-item');
    if (!item || !window.anime) return;
    anime({
      targets: item,
      scale: [1, 0.97, 1],
      duration: 260,
      easing: 'easeOutQuad',
    });
  });

  /* =========================================================================
     SCROLL-BASED PARALLAX & FADES
     ========================================================================= */
  const heroChar = document.getElementById('heroCharacter');
  const workChar = document.getElementById('workCharacter');
  const workSection = document.getElementById('work');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroSection = document.getElementById('hero');
    const heroHeight  = heroSection ? heroSection.offsetHeight : 800;

    // Scroll cue fade out on scroll
    if (scrollCue) {
      if (scrollY > 50) {
        scrollCue.style.opacity = '0';
        scrollCue.style.pointerEvents = 'none';
      } else {
        scrollCue.style.opacity = '1';
        scrollCue.style.pointerEvents = 'auto';
      }
    }

    // Hero character parallax
    if (scrollY < heroHeight && heroChar) {
      const progress = scrollY / heroHeight;
      heroChar.style.transform = `translateY(${progress * 30}px)`;
    }

    // Work character scroll fade and subtle parallax
    if (workChar && workSection) {
      const rect = workSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When work section enters viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate scroll progress within the work section (0 when top enters, 1 when scrolled past)
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
        
        // Dynamic bottom fade that deepens as you scroll through the section
        const fadeStop = 85 - progress * 15; // from 85% down to 70%
        workChar.style.maskImage = `linear-gradient(to bottom, black 0%, black ${fadeStop}%, rgba(0,0,0,0.6) ${fadeStop + 8}%, transparent 98%)`;
        workChar.style.webkitMaskImage = `linear-gradient(to bottom, black 0%, black ${fadeStop}%, rgba(0,0,0,0.6) ${fadeStop + 8}%, transparent 98%)`;
        workChar.style.transform = `translateY(${progress * 25}px)`;
      }
    }
  }, { passive: true });

}); /* end DOMContentLoaded */
