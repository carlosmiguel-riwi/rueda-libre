const menuReparacionesToggle = document.getElementById('menu-reparaciones-toggle');
const menuReparaciones = document.getElementById('menu-reparaciones');

if (menuReparacionesToggle && menuReparaciones) {
  menuReparacionesToggle.addEventListener('click', function () {
    const expanded = menuReparacionesToggle.getAttribute('aria-expanded') === 'true';
    menuReparacionesToggle.setAttribute('aria-expanded', String(!expanded));
    menuReparaciones.classList.toggle('hidden', expanded);
  });
}
