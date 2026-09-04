(() => {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (systemDark ? 'dark' : 'light');
  root.dataset.theme = initial;

  const updateLabel = () => {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = root.dataset.theme === 'dark' ? '☀' : '☾';
      btn.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Use light theme' : 'Use dark theme');
    });
  };
  updateLabel();

  document.addEventListener('click', e => {
    const btn = e.target.closest('.theme-toggle');
    if (!btn) return;
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', root.dataset.theme);
    updateLabel();
  });
})();
