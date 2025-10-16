// Se espera a que todo el contenido del DOM esté cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', (event) => {

    const loginForm = document.getElementById('loginForm');
    const registerButton = document.getElementById('registerButton');

    // Manejar el envío del formulario de inicio de sesión
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        const email = document.getElementById('email').value;
        console.log(`Intento de inicio de sesión con el correo: ${email}`);
        // Aquí se añadiría la lógica para conectar con el backend en el futuro
    });

    // Manejar el clic en el botón de registro
    registerButton.addEventListener('click', function() {
        console.log('Botón "Regístrate aquí" presionado. Redirigiendo a la página de registro...');
        // En el futuro, aquí se podría redirigir al usuario:
        // window.location.href = '/ruta-a-la-pagina-de-registro.html';
    });
    
});