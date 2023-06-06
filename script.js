document.querySelector(".button-menu").addEventListener ("click", function(){
    document.querySelector (".links").
        classList.toggle("links-responsive")
});
/*Agregar un oyente de eventos al formulario para manejar el evento “submit”:*/
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

{/*Sumar una función de validación que verifique los criterios deseados:  */}
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}
