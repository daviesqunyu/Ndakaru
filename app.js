/* Ndakaru static site behavior (no frameworks) */
(function () {
  const d = document;

  // Year in footer
  const fy = d.getElementById('footerYear');
  if (fy) fy.textContent = String(new Date().getFullYear());

  // Scroll progress
  const scrollProgress = d.getElementById('scrollProgress');
  function updateScrollProgress() {
    if (!scrollProgress) return;
    const st = window.pageYOffset || d.documentElement.scrollTop;
    const sh = d.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = (sh > 0 ? (st / sh) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('load', updateScrollProgress);

  // Sticky nav background after scroll (or always on non-hero pages)
  const mainNav = d.getElementById('mainNav');
  function updateNav() {
    if (!mainNav) return;
    const hasHero = d.body.classList.contains('has-hero');
    const scrolled = (window.pageYOffset || d.documentElement.scrollTop) > 80;
    mainNav.classList.toggle('scrolled', !hasHero || scrolled);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  window.addEventListener('load', updateNav);

  // Mobile nav overlay
  const navToggle = d.getElementById('navToggle');
  const navOverlay = d.getElementById('navOverlay');
  const navClose = d.getElementById('navClose');
  if (navToggle && navOverlay) {
    navToggle.addEventListener('click', () => navOverlay.classList.add('open'));
    if (navClose) navClose.addEventListener('click', () => navOverlay.classList.remove('open'));
    navOverlay.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => navOverlay.classList.remove('open')));
  }

  // Active nav link per page
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  d.querySelectorAll('a[data-nav]').forEach((a) => {
    const target = (a.getAttribute('href') || '').split('#')[0].split('/').pop().toLowerCase();
    if (!target) return;
    const isActive = (path === target) || (path === '' && target === 'index.html');
    a.classList.toggle('active', isActive);
  });

  // Reveal on scroll
  const reveals = d.querySelectorAll('.reveal');
  if (typeof IntersectionObserver !== 'undefined') {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
    reveals.forEach((el) => ro.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // Back to top
  const backToTop = d.getElementById('backToTop');
  function updateBackToTop() {
    if (!backToTop) return;
    backToTop.classList.toggle('show', (window.pageYOffset || d.documentElement.scrollTop) > 700);
  }
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    window.addEventListener('load', updateBackToTop);
  }

  // Lazy loading defaults
  d.querySelectorAll('img').forEach((img) => {
    if (!img.getAttribute('loading')) img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });

  // Hero counters (home only)
  const hero = d.getElementById('hero');
  const heroStats = d.querySelectorAll('.hero-stat-number[data-count]');
  let countersAnimated = false;
  function animateCounters() {
    if (!hero || countersAnimated || heroStats.length === 0) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = hero.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      countersAnimated = true;
      heroStats.forEach((el) => {
        const target = parseInt(el.getAttribute('data-count') || '0', 10) || 0;
        const step = target / 40;
        let current = 0;
        const t = window.setInterval(() => {
          current += step;
          if (current >= target) { el.textContent = String(target); window.clearInterval(t); }
          else { el.textContent = String(Math.floor(current)); }
        }, 40);
      });
    }
  }
  window.addEventListener('scroll', animateCounters, { passive: true });
  window.addEventListener('load', animateCounters);

  // Gallery filters (gallery page)
  const filterButtons = d.querySelectorAll('.gallery-filters button[data-filter]');
  const galleryItems = d.querySelectorAll('.gallery-item[data-category]');
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter') || 'All';
        galleryItems.forEach((item) => {
          const cat = item.getAttribute('data-category') || '';
          const show = filter === 'All' || (cat && cat.indexOf(filter) !== -1);
          item.classList.toggle('hide', !show);
        });
      });
    });
  }

  // Lightbox (gallery page only if loaded)
  // eslint-disable-next-line no-undef
  if (typeof GLightbox !== 'undefined') {
    // eslint-disable-next-line no-undef
    GLightbox({ selector: '.glightbox', touchNavigation: true });
  }

  // Collapsible story details (impact page)
  d.querySelectorAll('[data-collapsible="story"]').forEach((card) => {
    const btn = card.querySelector('.story-toggle');
    const more = card.querySelector('.story-more');
    if (!btn || !more) return;
    btn.addEventListener('click', () => {
      const open = !more.hasAttribute('hidden');
      if (open) {
        more.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Read full story';
      } else {
        more.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Hide details';
      }
    });
  });

  // Package tabs (support page)
  function showPackageTab(tabName) {
    d.querySelectorAll('.package-tab-content').forEach((c) => c.classList.remove('active'));
    d.querySelectorAll('.package-tab').forEach((t) => t.classList.remove('active'));
    const content = d.getElementById(tabName);
    if (content) content.classList.add('active');
    const btn = d.querySelector(`.package-tab[data-tab="${tabName}"]`);
    if (btn) btn.classList.add('active');
  }
  // expose for inline handlers if present
  // @ts-ignore
  window.showPackageTab = function (_event, tabName) { showPackageTab(tabName); };

  d.querySelectorAll('.package-tab[data-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (tab) showPackageTab(tab);
    });
  });

  // PWA: register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
})();

