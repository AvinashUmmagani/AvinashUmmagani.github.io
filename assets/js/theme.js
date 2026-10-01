(function () {
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  var preference = null;
  try { preference = localStorage.getItem('portfolio-theme'); } catch (_) {}
  if (preference !== 'light' && preference !== 'dark') preference = null;
  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    var button = document.querySelector('.theme-toggle');
    if (button) {
      var dark = theme === 'dark';
      button.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
      button.setAttribute('title', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
      button.setAttribute('aria-pressed', String(dark));
    }
  }
  apply(preference || (system.matches ? 'dark' : 'light'));
  document.addEventListener('DOMContentLoaded', function () {
    apply(preference || (system.matches ? 'dark' : 'light'));
    document.querySelector('.theme-toggle').addEventListener('click', function () {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('portfolio-theme', preference); } catch (_) {}
      apply(preference);
    });
  });
  system.addEventListener('change', function () {
    if (!preference) apply(system.matches ? 'dark' : 'light');
  });
}());
