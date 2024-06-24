function mostrarMenu() {
    const menuOpciones = document.querySelector('.opciones-menu');
    if (menuOpciones.style.display === 'none') {
      menuOpciones.style.display = 'block'; // Mostrar el menÃº
    } else {
      menuOpciones.style.display = 'none'; // Ocultar el menÃº
    }
  }
  
  // FunciÃ³n para validar el nombre
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
  
  // FunciÃ³n para validar el apellido
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
   
    if (email.indexOf('@@') !== -1 || email.match(/@.*@/)) { /*@: Coincide con un sÃ­mbolo "@" literal.
    .*: Coincide con cualquier secuencia de caracteres (cero o mÃ¡s veces). Esto captura el contenido entre los sÃ­mbolos "@".
    @: Coincide con otro sÃ­mbolo "@" literal.*/
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
  
  // FunciÃ³n para validar el telÃ©fono
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
      if (radio.checked) { // Verifica si el radio button estÃ¡ seleccionado
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
      return false; // Evita el envÃ­o del formulario
    } else {
      return true; // El mensaje no estÃ¡ vacÃ­o, permite el envÃ­o
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
      return false; // Evita el envÃ­o del formulario
    } else {
      return true; // Se ha seleccionado una opciÃ³n vÃ¡lida, permite el envÃ­o
    }
  }
  
  
  // Función para validar y enviar el formulario
  function validaciones(evento) {
    evento.preventDefault(); // Evitar el envío predeterminado del formulario
  
    // Validar los campos del formulario
    if (!validaNombre() || !validaApellido() || !validaEmail() || !validaTelefono() || !validaTipoContactoSeleccionado() || !validaMensaje() || !validaRespuesta()) {
      return; // Si hay errores en la validación, no se envía el formulario
    }
  
    // Obtener valores de los campos del formulario
    const nombre = document.getElementById('name').value.trim();
    const apellido = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('number').value.trim();
    const tipo_contacto = validaTipoContactoSeleccionado();
    const mensaje = document.getElementById('message').value.trim();
    const tipo_respuesta = document.querySelector('.form-selectb').value;
  
    // Configurar la solicitud fetch para enviar datos al servidor
    fetch('http://localhost:5500/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre,
        apellido,
        email,
        telefono,
        tipo_contacto,
        mensaje,
        tipo_respuesta
      })
    })
    .then(response => {
      if (response.ok) {
        // Mostrar mensaje de éxito usando SweetAlert2 o similar
        Swal.fire({
          title: '¡Gracias!',
          text: 'Pronto nos pondremos en contacto con usted.',
          icon: 'success'
        });
        // Opcional: Restablecer el formulario después de enviar con éxito
        document.getElementById('formulario').reset();
      } else {
        throw new Error('Error en la solicitud');
      }
    })
    .catch(error => {
      console.error('Error al enviar formulario:', error);
      Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error al enviar el formulario. Inténtelo nuevamente más tarde.',
        icon: 'error'
      });
    });
  }
  