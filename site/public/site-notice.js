// Acknowledgement is shared by all pages. A new CMS version can show a new notice.
(() => {
  const notice = document.querySelector('[data-site-notice]');
  if (!notice) return;
  const key = 'shathurjan-portfolio-notice:' + notice.dataset.noticeVersion;
  const remembered = () => {
    for (const name of ['localStorage', 'sessionStorage']) {
      try { if (window[name].getItem(key) === 'dismissed') return true; } catch { /* Private/restricted storage. */ }
    }
    return false;
  };
  if (remembered()) return;
  notice.hidden = false;
  notice.querySelector('[data-dismiss-notice]').addEventListener('click', () => {
    for (const name of ['localStorage', 'sessionStorage']) {
      try { window[name].setItem(key, 'dismissed'); } catch { /* Dismiss even without storage. */ }
    }
    notice.hidden = true;
    const main = document.querySelector('main');
    if (main) { main.setAttribute('tabindex', '-1'); main.focus({preventScroll: true}); }
  });
  window.addEventListener('storage', event => {
    if (event.key === key && event.newValue === 'dismissed') notice.hidden = true;
  });
})();
