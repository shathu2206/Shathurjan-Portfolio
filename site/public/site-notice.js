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
  const reopenButtons = document.querySelectorAll('[data-reopen-notice]');
  let returnFocus = null;
  const setVisible = visible => {
    notice.hidden = !visible;
    reopenButtons.forEach(button => button.setAttribute('aria-expanded', String(visible)));
  };
  setVisible(!remembered());
  reopenButtons.forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      returnFocus = button;
      setVisible(true);
      notice.focus({preventScroll: true});
    });
  });
  notice.querySelector('[data-dismiss-notice]').addEventListener('click', () => {
    for (const name of ['localStorage', 'sessionStorage']) {
      try { window[name].setItem(key, 'dismissed'); } catch { /* Dismiss even without storage. */ }
    }
    setVisible(false);
    if (returnFocus) { returnFocus.focus({preventScroll: true}); returnFocus = null; return; }
    const main = document.querySelector('main');
    if (main) { main.setAttribute('tabindex', '-1'); main.focus({preventScroll: true}); }
  });
  window.addEventListener('storage', event => {
    if (event.key === key && event.newValue === 'dismissed') setVisible(false);
  });
})();
