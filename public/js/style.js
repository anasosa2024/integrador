function mostrarMenu() {
  const menuOpciones = document.querySelector('.opciones-menu');
  if (menuOpciones.style.display === 'none') {
    menuOpciones.style.display = 'block'; // Mostrar el menú
  } else {
    menuOpciones.style.display = 'none'; // Ocultar el menú
  }
}

// Función para validar el nombre
function validaNombre() {
  const nombreInput = document.getElementById('name'); // Obtiene el elemento input
  const nombre = nombreInput.value.trim(); // Accede al valor y elimina espacios

  if (nombre === '' || nombre === null) {
    Swal.fire({
      text: "Debe completar el Nombre",
      icon: "warning"
    });
    nombreInput.focus(); // Coloca el cursor en el campo
    return false;
  } else {
    return true;
  }
}

// Función para validar el apellido
function validaApellido() {
  const apellidoInput = document.getElementById('lastname');
  const apellido = apellidoInput.value.trim();

  if (apellido === '' || apellido === null) {
    Swal.fire({
      text: "Debe completar el Apellido",
      icon: "warning"
    });
    apellidoInput.focus();
    return false;
  } else {
    return true;
  }
}

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

// Función para validar el teléfono
function validaTelefono() {
  const telefonoInput = document.getElementById('number');
  const telefono = telefonoInput.value.trim();

  if (telefono === '' || telefono === null) {
    Swal.fire({
      text: "Debe completar el Teléfono",
      icon: "warning"
    });
    telefonoInput.focus();
    return false;
  } else {
    return true;
  }
}


function validaTipoContactoSeleccionado() {
  const radios = document.querySelectorAll('input[name="type_contact"]'); // Busca todos los radio buttons con el nombre "type_contact"
  for (const radio of radios) {
    if (radio.checked) { // Verifica si el radio button está seleccionado
      const etiqueta = document.querySelector(`label[for="${radio.id}"]`); // Buscar la etiqueta correspondiente
      return etiqueta.textContent; // Devolver el texto de la etiqueta
    }
  }
}



function validaMensaje() {
  const mensajeInput = document.getElementById('message'); // Obtiene el elemento textarea
  const mensaje = mensajeInput.value.trim(); // Accede al valor y elimina espacios

  if (mensaje === '' || mensaje === null) {
    Swal.fire({
      text: "Debe completar el Mensaje",
      icon: "warning"
    });
    mensajeInput.focus(); // Pone el cursor en el campo
    return false; // Evita el envío del formulario
  } else {
    return true; // El mensaje no está vacío, permite el envío
  }
}

function validaRespuesta() {
  const contactoSelect = document.querySelector('.form-selectb');
  const contactoSeleccionado = contactoSelect.value;
  if (contactoSeleccionado === 'Seleccione cómo prefiere que lo contactemos:') {
    Swal.fire({
      text: "Debe seleccionar cómo prefiere que lo contactemos (Email o Whatsapp)",
      icon: "warning"
    });
    contactoSelect.focus(); // Pone el cursor en el select
    return false; // Evita el envío del formulario
  } else {
    return true; // Se ha seleccionado una opción válida, permite el envío
  }
}


// Función para validar y enviar el formulario
function validaciones() {

  const nombreInput = document.getElementById('name'); // Obtiene el elemento input
  const nombre = nombreInput.value.trim(); // Accede al valor y elimina espacios
  const apellidoInput = document.getElementById('lastname');
  const apellido = apellidoInput.value.trim();
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();
  const telefonoInput = document.getElementById('number');
  const telefono = telefonoInput.value.trim();
  const elegido = validaTipoContactoSeleccionado();
  const mensajeInput = document.getElementById('message'); // Obtiene el elemento textarea
  const mensaje = mensajeInput.value.trim(); // Accede al valor y elimina espacios
  const contactoSelect = document.querySelector('.form-selectb');
  const contactoSeleccionado = contactoSelect.value;


  if (validaNombre() && validaApellido() && validaEmail() && validaTelefono() && validaTipoContactoSeleccionado() && validaMensaje() && validaRespuesta()) {
    // Todos los campos están llenos, se procede con el envío del formulario
    guardarDatos(nombre + " " + apellido, email, telefono, elegido, mensaje, contactoSeleccionado);
    Swal.fire({
      title: "¡Gracias!",
      text: "Pronto nos pondremos en contacto con Ud.",
      icon: "success"
    });
    formulario.reset(); // Limpia el formulario después del envío
  } else {
    return false; // Si hay un error de validación, evita el envío del formulario
  }
}

// Función para guardar los datos del formulario
function guardarDatos(nombreYApellido, email, telefono, elegido, mensaje, contactoSeleccionado) {
  const datos = [
    nombreYApellido,
    email,
    telefono,
    elegido,
    mensaje,
    contactoSeleccionado,
  ];
  console.log(datos); // Imprime los datos en la consola
}
// Detector de eventos para el botón de envío del formulario
//el código se ejecuta dentro de la función window.onload, la cual se dispara una vez que la página ha terminado de cargarse
window.onload = function() {
const botonEnviar = document.getElementById('enviar');
botonEnviar.addEventListener('click', (evento) => {
  evento.preventDefault(); // Evita el envío predeterminado del formulario
});
};






