var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});
  
    const desencriptado = input
      .replace(/ai/g, 'a')
      .replace(/enter/g, 'e')
      .replace(/is/g, 'i')
      .replace(/poder/g, 'o')
      .replace(/est/g, 't');
  
    const outputElement = document.getElementById('output');
    outputElement.style.textAlign = 'left';
    outputElement.style.display = 'block';
  
    animarTexto(desencriptado, outputElement);
    limpiarCaja();
  
  
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