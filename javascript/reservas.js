const formReserva = document.getElementById('form-reserva');

if (formReserva) {
  formReserva.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(formReserva);
    const body = [
      `Nombre: ${formData.get('nombre')}`,
      `Email: ${formData.get('email')}`,
      `Servicio: ${formData.get('tipo_servicio')}`,
      `Fecha: ${formData.get('fecha')}`,
      `Detalles: ${formData.get('mensaje') || 'Sin detalles adicionales'}`
    ].join('\n');
    const subject = `Solicitud de ${formData.get('tipo_servicio')}`;
    const mailto = `mailto:calrosmiguelriwi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
}
