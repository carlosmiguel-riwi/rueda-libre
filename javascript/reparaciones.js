const menuToggle = document.getElementById('menu-reparaciones-toggle');
const menuDrawer = document.getElementById('menu-reparaciones-drawer');
const menuBackdrop = document.getElementById('menu-reparaciones-backdrop');
const menuClose = document.getElementById('menu-reparaciones-close');

if (menuToggle && menuDrawer && menuBackdrop && menuClose) {
  const desktopViewport = window.matchMedia('(min-width: 768px)');

  function closeMenu(restoreFocus) {
    menuDrawer.classList.add('translate-x-full');
    menuDrawer.setAttribute('aria-hidden', 'true');
    menuDrawer.inert = true;
    menuBackdrop.classList.add('pointer-events-none', 'opacity-0');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');

    if (restoreFocus && !desktopViewport.matches) {
      menuToggle.focus();
    }
  }

  function openMenu() {
    menuDrawer.inert = false;
    menuDrawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('overflow-hidden');

    requestAnimationFrame(function () {
      menuDrawer.classList.remove('translate-x-full');
      menuBackdrop.classList.remove('pointer-events-none', 'opacity-0');
    });

    menuClose.focus();
  }

  menuToggle.addEventListener('click', function () {
    if (menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  menuClose.addEventListener('click', function () {
    closeMenu(true);
  });

  menuBackdrop.addEventListener('click', function () {
    closeMenu(true);
  });

  menuDrawer.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu(true);
      return;
    }

    if (event.key === 'Tab') {
      const focusableElements = menuDrawer.querySelectorAll('a[href], button:not([disabled])');
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
  });

  desktopViewport.addEventListener('change', function (event) {
    if (event.matches) {
      closeMenu(false);
    }
  });
}
