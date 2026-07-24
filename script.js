// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navLinks.style.display = isOpen ? 'flex' : 'none';
      if (isOpen) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.alignItems = 'flex-start';
        navLinks.style.position = 'fixed';
        navLinks.style.top = '64px';
        navLinks.style.right = '5%';
        navLinks.style.left = '5%';
        navLinks.style.background = 'var(--char-2)';
        navLinks.style.border = '1px solid var(--ember)';
        navLinks.style.padding = '24px';
        navLinks.style.gap = '18px';
        navLinks.style.zIndex = '200';
        const list = navLinks.querySelector('ul');
        if (list) {
          list.style.flexDirection = 'column';
          list.style.gap = '18px';
        }
      }
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Mark active nav link based on current page
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links nav a, .nav-links > a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
});
