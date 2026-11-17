const formReserva = document.getElementById('form-reserva');

if (formReserva) {
  formReserva.noValidate = true;

  formReserva.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!formReserva.checkValidity()) {
      alert('Verifica nuevamente la información.');
      return;
    }

    alert('¡Felicidades! Recibirás una respuesta pronto.');
  });
}
