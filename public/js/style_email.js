// Función para validar el email
function validaEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const arrobaInput = email.indexOf('@');
    const patronEmail = email.toLowerCase().slice(-4);
   
    if (email.indexOf('@@') !== -1 || email.match(/@.*@/)) { /*@: Coincide con un símbolo "@" literal.
    .*: Coincide con cualquier secuencia de caracteres (cero o más veces). Esto captura el contenido entre los símbolos "@".
    @: Coincide con otro símbolo "@" literal.*/
        Swal.fire({
          text: "El email no puede contener caracteres duplicados '@'.",
          icon: "warning"
        });
        emailInput.focus();
        return false;
  } else if (email.includes(' ')){
    Swal.fire({
        text: "El email no puede tener espacios.",
        icon: "warning"
      });
      emailInput.focus();
      return false;
  } else if (email === '') {
      Swal.fire({
        text: "Debe completar el Email",
        icon: "warning"
      });
      emailInput.focus();
      return false;
    } else if (arrobaInput === -1 || arrobaInput === 0) {
      Swal.fire({
        text: "El email debe contener un @",
        icon: "warning"
      });
      emailInput.focus();
      return false;
    } else if (patronEmail !== ".com") {
      Swal.fire({
        text: "El email debe terminar en .com",
        icon: "warning"
      });
      emailInput.focus();
      return false;
    } else {
      return true;
    }
  }

  function validaciones() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
  
    if (validaEmail()){
      // Todos los campos están llenos, se procede con el envío del formulario
      guardarDatos(email);
      Swal.fire({
        title: "¡Listo!",
        text: "Revisa tu casilla de correo.",
        icon: "success",
        iconColor: '#7B68EE',
        confirmButtonText: '<a href="index.html">OK</a>',
        confirmButtonColor: '#7FFFD4'
      });
      formulario.reset(); // Limpia el formulario después del envío
    } else {
      return false; // Si hay un error de validación, evita el envío del formulario
    }
  }
  
  // Función para guardar los datos del formulario
  function guardarDatos(email) {
    const datos = [
      email,
    ];
    console.log(datos); // Imprime los datos en la consola
  }
  
  
  // Detector de eventos para el botón de envío del formulario
  const botonEnviar = formulario.querySelector('button[type="submit"]');
  botonEnviar.addEventListener('click', (evento) => {
  evento.preventDefault(); // Evita el envío predeterminado del formulario
});

function irAInicio() {
  window.location.href = "index.html";
} 