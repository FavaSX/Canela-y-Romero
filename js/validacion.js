$(document).ready(function() {
    $('form').on('submit', function(event) {

        const firstName = $('#firstname').val();
        const lastName = $('#lastname').val();
        const nameRegex = /^[a-zA-Z]+$/; 
        if (firstName.length < 3 || !nameRegex.test(firstName) || lastName.length < 3 || !nameRegex.test(lastName)) {
            alert('El nombre y el apellido deben tener al menos 3 letras.');
            return;
        }

        // Validación del teléfono
        const phone = $('#phone').val();
        if (phone.length !== 9 || isNaN(phone)) {
            alert('El teléfono debe tener 9 números.');
            return;
        }

        // Validación del tipo
        const type = $('#type').val();
        if (type === '--Sin Seleccionar--') {
            alert('Por favor selecciona un tipo.');
            return;
        }
        const email = $('#email').val();
        const emailRegex = /[a-zA-Z]/; 
        if (!emailRegex.test(email)) {
            alert('El correo electrónico debe contener al menos una letra.');
            return;
        }

        // Validación del mensaje
        const message = $('#message').val();
        if ($.trim(message) === '') {
            alert('Por favor escribe un mensaje.');
            return;
        }
        this.submit();
    });
});
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#inputPassword');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});