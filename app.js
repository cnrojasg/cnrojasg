// Filtro de caracteres
document.getElementById('input').addEventListener('input', function (event) {
    this.value = this.value.replace(/[^a-z0-9.,¡!()¿?{}<>'-;:\s]/g, ''); // Permite letras minúsculas, números y puntuación específica
  });
  
  // Función para encriptar texto
  function encriptarTexto() {
    const input = document.getElementById('input').value;
  
    if (input.trim() === '') {
      mostrarMensajeVacio();
      return;
    }
  
    const encriptado = input
      .replace(/e/g, 'enter')
      .replace(/i/g, 'is')
      .replace(/o/g, 'poder')
      .replace(/a/g, 'ai')
      .replace(/u/g, 'est');
  
    const outputElement = document.getElementById('output');
    outputElement.style.textAlign = 'left';
    outputElement.style.display = 'block';
  
    animarTexto(encriptado, outputElement);
    limpiarCaja();
  }
  
  // Función para desencriptar texto
  function desencriptarTexto() {
    const input = document.getElementById('input').value;
  
    if (input.trim() === '') {
      mostrarMensajeVacio();
      return;
    }
  
    const desencriptado = input
      .replace(/ai/g, 'a')
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  
    const outputElement = document.getElementById('output');
    outputElement.style.textAlign = 'left';
    outputElement.style.display = 'block';
  
    animarTexto(desencriptado, outputElement);
    limpiarCaja();
  }
  
  // Variables para manejar la animación y su cancelación
  let animacionEnCurso = false;
  let animacionCancelada = false;
  
  // Función para mostrar un mensaje cuando no hay texto en la entrada
  function mostrarMensajeVacio() {
    document.getElementById(
      'output'
    ).innerHTML = `<strong>¡Ningún mensaje fue encontrado!</strong><br>Ingresa el texto que deseas encriptar o desencriptar.`;
    document.getElementById('output').style.display = 'flex';
    document.getElementById('output').style.flexDirection = 'column';
    document.getElementById('output').style.justifyContent = 'center';
    document.getElementById('output').style.textAlign = 'center';
    document.querySelector('.grid__output__area-botones--boton').style.display =
      'none';
  }
  
  // Función para animar el texto
  function animarTexto(texto, elemento) {
    let indice = 0;
    const botonCopiarCancelar = document.querySelector(
      '.grid__output__area-botones--boton'
    );
  
    function mostrarCaracter() {
      if (indice < texto.length && !animacionCancelada) {
        elemento.innerHTML += texto.charAt(indice);
        indice++;
        setTimeout(mostrarCaracter, 20); // Velocidad de la animación en ms
      } else {
        animacionEnCurso = false; // Animación completa
        animacionCancelada = false; // Reiniciar la bandera de cancelación
        habilitarBotones();
        botonCopiarCancelar.textContent = 'Copiar'; // Cambiar el texto del botón a "Copiar"
      }
    }
  
    elemento.innerHTML = ''; // Limpiar el elemento antes de comenzar la animación
    animacionEnCurso = true; // Iniciar animación
    animacionCancelada = false; // Reiniciar la bandera de cancelación
    deshabilitarBotones();
  
    // Mostrar el botón y cambiar el texto a "Cancelar"
    botonCopiarCancelar.style.display = 'block';
    botonCopiarCancelar.textContent = 'Cancelar';
  
    mostrarCaracter();
  }
  
  // Función para deshabilitar los botones
  function deshabilitarBotones() {
    document.getElementById('botonEncriptar').disabled = true;
    document.getElementById('botonDesencriptar').disabled = true;
  }
  
  // Función para habilitar los botones
  function habilitarBotones() {
    document.getElementById('botonEncriptar').disabled = false;
    document.getElementById('botonDesencriptar').disabled = false;
  }
  
  // Funcionalidad del botón Copiar o Cancelar
  function botonCopiar() {
    const botonCopiarCancelar = document.querySelector(
      '.main__output__button-area--button'
    );
  
    if (animacionEnCurso) {
      animacionCancelada = true;
      animacionEnCurso = false; // Detener la animación
      botonCopiarCancelar.textContent = 'Copiar'; // Cambiar el texto del botón a "Copiar"
      habilitarBotones(); // Rehabilitar los botones
    } else {
      const elementoOutput = document.getElementById('output');
      const textoCopiable =
        elementoOutput.textContent || elementoOutput.innerText;
      navigator.clipboard.writeText(textoCopiable);
    }
  }
  
  // Función para animar texto predeterminado en el placeholder
  const textoPredeterminado = 'Ingresa aquí el texto...';
  const input = document.getElementById('input');
  let indiceActual = 0;
  
  function animacionPlaceholder() {
    if (indiceActual < textoPredeterminado.length) {
      input.setAttribute(
        'placeholder',
        input.getAttribute('placeholder') + textoPredeterminado[indiceActual]
      );
      indiceActual++;
      setTimeout(animacionPlaceholder, 80); // Velocidad de la animación en ms
    }
  }
  
  // Delay para iniciar la animación en ms
  setTimeout(animacionPlaceholder, 500);
  
  // Función para limpiar la caja de texto
  function limpiarCaja() {
    document.getElementById('input').value = '';
  }
  
  document.getElementById('input').addEventListener('input', function () {
    const textarea = document.getElementById('input');
    const div = document.querySelector('.grid__input__alerta');
  
    if (window.innerWidth <= 576) { // Check if the screen width is within the mobile range
        if (textarea.value.trim() === "") {
            div.style.display = 'flex'; // Show the div when the text area is empty
        } else {
            div.style.display = 'none'; // Hide the div when there's text in the text area
        }
    } else {
        div.style.display = 'flex'; // On larger screens, always show the div
    }
  });
