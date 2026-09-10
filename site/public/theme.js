// Runs in the head, before paint, so stored preferences apply between pages.
(() => {
  const root = document.documentElement;
  const key = 'shathurjan-portfolio-theme';
  const media = window.matchMedia('(prefers-color-scheme: light)');
  let preference = 'system';
  try { const saved = localStorage.getItem(key); if (['light', 'dark'].includes(saved)) preference = saved; } catch { /* Storage may be unavailable. */ }
  const apply = () => {
    root.dataset.theme = preference === 'system' ? (media.matches ? 'light' : 'dark') : preference;
    document.querySelectorAll('[data-theme-choice]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === preference)));
  };
  apply();
  media.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = ['light', 'dark'].includes(event.newValue) ? event.newValue : 'system';
    apply();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const picker = document.querySelector('.theme-picker');
    if (!picker) return;
    picker.hidden = false;
    apply();
    picker.querySelectorAll('[data-theme-choice]').forEach(button => button.addEventListener('click', () => {
      preference = button.dataset.themeChoice;
      try { if (preference === 'system') localStorage.removeItem(key); else localStorage.setItem(key, preference); } catch { /* Keep the current page usable. */ }
      apply();
      picker.open = false;
      picker.querySelector('summary').focus();
    }));
    document.addEventListener('click', event => { if (!picker.contains(event.target)) picker.open = false; });
    picker.addEventListener('keydown', event => { if (event.key === 'Escape') { picker.open = false; picker.querySelector('summary').focus(); } });
  });
})();
