// script.js
const THEME_KEY = 'shakhzod_theme';
const body = document.body;

function applyTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light');
    document.querySelectorAll('.toggle-btn').forEach(b => b.textContent = '🌙');
  } else {
    body.classList.remove('light');
    document.querySelectorAll('.toggle-btn').forEach(b => b.textContent = '☀️');
  }
}

// initial: dark by default unless user prefer saved light
const saved = localStorage.getItem(THEME_KEY);
const prefersLight = saved === 'light';
applyTheme(prefersLight ? 'light' : 'dark');

function toggleTheme() {
  const isLight = body.classList.toggle('light');
  const newTheme = isLight ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, newTheme);
  applyTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  // attach to all toggle buttons (pages have 1 each)
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // ensure accessible focus outline
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') body.classList.add('show-focus');
  });
});
