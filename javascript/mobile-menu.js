const menuToggle = document.querySelector('[data-mobile-menu-toggle]');
const mobileMenu = document.getElementById('site-mobile-menu');
const mobileMenuClose = document.querySelector('[data-mobile-menu-close]');
const mobileMenuBackdrop = document.getElementById('site-mobile-menu-backdrop');

if (menuToggle && mobileMenu && mobileMenuClose && mobileMenuBackdrop) {
  const desktopViewport = window.matchMedia('(min-width: 768px)');

  function closeMenu(restoreFocus) {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.inert = true;
    mobileMenuBackdrop.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-menu-open');

    if (restoreFocus && !desktopViewport.matches) {
      menuToggle.focus();
    }
  }

  function openMenu() {
    mobileMenu.inert = false;
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenu.classList.add('is-open');
    mobileMenuBackdrop.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-menu-open');
    mobileMenuClose.focus();
  }

  function trapFocus(event) {
    if (event.key === 'Escape') {
      closeMenu(true);
      return;
    }

    if (event.key !== 'Tab' || menuToggle.getAttribute('aria-expanded') !== 'true') {
      return;
    }

    const focusableElements = mobileMenu.querySelectorAll('a[href], button:not([disabled])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  menuToggle.addEventListener('click', function () {
    if (menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  mobileMenuClose.addEventListener('click', function () {
    closeMenu(true);
  });

  mobileMenuBackdrop.addEventListener('click', function () {
    closeMenu(true);
  });

  document.addEventListener('keydown', trapFocus);

  desktopViewport.addEventListener('change', function (event) {
    closeMenu(false);
    mobileMenu.inert = !event.matches;
    mobileMenu.setAttribute('aria-hidden', String(!event.matches));
  });

  mobileMenu.inert = desktopViewport.matches ? false : true;
  mobileMenu.setAttribute('aria-hidden', String(!desktopViewport.matches));
}
