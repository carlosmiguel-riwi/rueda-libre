document.addEventListener('DOMContentLoaded', function () {
    // 1. Verificamos si ya existe la marca en localStorage
    if (!localStorage.getItem('modalMostrado')) {
        
        // 2. Si no existe, inicializamos y mostramos tu modal de Bootstrap
        var modalElement = document.getElementById('modal');
        if (modalElement) {
            var modal = new bootstrap.Modal(modalElement);
            modal.show();
            
            // 3. Guardamos el registro para que no vuelva a aparecer
            localStorage.setItem('modalMostrado', 'true');
        }
    }
});