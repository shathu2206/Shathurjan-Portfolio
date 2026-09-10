// Native links and the More menu work without JavaScript. This adds dismissal
// and forwards previously shared homepage section links to their new pages.
(() => {
  const script = document.currentScript;
  const menu = document.querySelector('.nav-more');
  const panel = menu?.querySelector('.nav-menu');
  const summary = menu?.querySelector('summary');
  const header = document.querySelector('.header-shell');
  if (header?.dataset?.scrollHide === 'true') {
    const scrollPosition = () => Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight));
    let previous = scrollPosition();
    let distance = 0;
    let direction = 0;
    let queued = false;
    const reveal = () => {
      header.classList.remove('is-scrolled-away');
      previous = scrollPosition();
      distance = 0;
      direction = 0;
    };
    const update = () => {
      queued = false;
      const current = scrollPosition();
      const delta = current - previous;
      previous = current;
      if (current <= header.offsetHeight + 24 || menu?.open || header.matches(':focus-within')) {
        reveal();
        return;
      }
      if (!delta) return;
      const nextDirection = Math.sign(delta);
      distance = nextDirection === direction ? distance + Math.abs(delta) : Math.abs(delta);
      direction = nextDirection;
      // Ignore small trackpad movements and touch bounce at either page edge.
      if (distance >= 8) {
        header.classList.toggle('is-scrolled-away', direction > 0);
        distance = 0;
      }
    };
    window.addEventListener('scroll', () => {
      if (!queued) {
        queued = true;
        window.requestAnimationFrame(update);
      }
    }, {passive:true});
    window.addEventListener('resize', reveal, {passive:true});
    window.addEventListener('pageshow', reveal);
    header.addEventListener('focusin', reveal);
    menu?.addEventListener('toggle', () => { if (menu.open) reveal(); });
  }
  const fitPanel = () => {
    if (!menu?.open || !panel) return;
    const viewport = window.visualViewport;
    const bottom = viewport ? viewport.offsetTop + viewport.height : window.innerHeight;
    panel.style.setProperty('--menu-space', `${Math.max(44, bottom - panel.getBoundingClientRect().top - 12)}px`);
  };
  menu?.addEventListener('toggle', fitPanel);
  window.addEventListener('resize', fitPanel, {passive:true});
  window.addEventListener('scroll', fitPanel, {passive:true});
  window.visualViewport?.addEventListener('resize', fitPanel, {passive:true});
  window.visualViewport?.addEventListener('scroll', fitPanel, {passive:true});
  menu?.addEventListener('keydown', event => {
    if (event.target === summary && event.key === 'ArrowDown') {
      event.preventDefault();
      menu.open = true;
      fitPanel();
      panel?.querySelector('a')?.focus();
    }
  });
  menu?.addEventListener('focusout', event => {
    if (event.relatedTarget && !menu.contains(event.relatedTarget)) menu.open = false;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.open) {
      menu.open = false;
      summary?.focus();
    }
  });
  document.addEventListener('click', event => {
    if (menu?.open && !menu.contains(event.target)) menu.open = false;
  });
  if (script?.dataset.legacyRoutes && location.hash) {
    const routes = JSON.parse(script.dataset.legacyRoutes);
    const destination = routes[location.hash.slice(1)];
    if (destination) location.replace(destination);
  }
})();
