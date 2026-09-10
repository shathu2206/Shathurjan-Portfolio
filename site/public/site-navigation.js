// Native links and the More menu work without JavaScript. This adds dismissal
// and forwards previously shared homepage section links to their new pages.
(() => {
  const script = document.currentScript;
  const menu = document.querySelector('.nav-more');
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
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
