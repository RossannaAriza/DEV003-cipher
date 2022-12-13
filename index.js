import cipher from './cipher.js';

//console.log(cipher);

//se declara variabe name seleccionando el elemento con el selector class
const name = document.querySelector(".name");

//se declaran variable para hacer funcional las div en el momento que el usuario lo visualiza y se trae el elemento con el selector ID
const bloqueBienvenida = document.querySelector("#bienvenida");

const bloqueIntroduccion = document.querySelector("#introduccion");

const bloqueInstrucciones = document.querySelector("#instrucciones");

const bloqueEncriptar = document.querySelector("#encriptar");

const bloqueDecifrar = document.querySelector("#decifrar");

//se declara los botones para desplazarse en la estructura de la pagina y se le asigna las sentencias
const botonIntroduccion = document.querySelector("#continuarIntroduccion");
// se agrega un evento al elemento declarado en donde el tipo es "click" y el listener es una funcion en donde las sentencias determina como se visualizara la interfaz a partir de utilizar el boton
botonIntroduccion.addEventListener("click",function(){
  bloqueBienvenida.style.display="none";// se trae el elemento declarado y se le indica que por medio del style el display no se vera "none" o si se visualizara "block"
  bloqueIntroduccion.style.display='block';
  bloqueInstrucciones.style.display='none';
  bloqueEncriptar.style.display='none';
  bloqueDecifrar.style.display='none';
  // crear un alert a este boton que salude con el nombre ingresado trayendo la constante name
  alert("Hola "+name.value+", empecemos!!!");
});

const botonIntucciones = document.querySelector("#continuarIntrucciones");

botonIntucciones.addEventListener("click",function(){
  bloqueBienvenida.style.display="none";
  bloqueIntroduccion.style.display='none';
  bloqueInstrucciones.style.display='block';
  bloqueEncriptar.style.display='none';
  bloqueDecifrar.style.display='none';

});

const botonEncriptar = document.querySelector("#continuarEncriptar");

botonEncriptar.addEventListener("click",function(){
  bloqueBienvenida.style.display="none";
  bloqueIntroduccion.style.display='none';
  bloqueInstrucciones.style.display='none';
  bloqueEncriptar.style.display='block';
  bloqueDecifrar.style.display='none';

});

const botonDecifrar = document.querySelector("#continuarDecifrar");

botonDecifrar.addEventListener("click",function(){
  bloqueBienvenida.style.display="none";
  bloqueIntroduccion.style.display='none';
  bloqueInstrucciones.style.display='none';
  bloqueEncriptar.style.display='none';
  bloqueDecifrar.style.display='block';

});

// se agregar funcionalidades a botones de encriptar y decifrar

const cipherBtn = document.querySelector("#cipher");

cipherBtn.addEventListener("click",function(){
  const offsetEncriptarValue  = parseInt(document.querySelector("#offsetEncriptar").value);// parseInt determina que todo se valora como numero y punto value porque estamos determinando que es el atrributo value lo que requerimos
  const textoAEncriptarValue =document.querySelector("#textoAEncriptar").value;
  const textoEncriptadoElement = document.querySelector("#textoEncriptado"); //se declara el elemento donde se reflejara el resutado "texto encriptado"
  const mensajeEncriptado = cipher.encode(offsetEncriptarValue, textoAEncriptarValue); //se declara variable al resultado de la formula de encriptar para asi ya enviarla al HTML

  textoEncriptadoElement.value= mensajeEncriptado; // una vez ya declarada el texto encriptado como mensajeEncriptado se le determina que ese sera el valor en el elemento output declarado textoEncriptadoElement
});

const decipherBtn = document.querySelector("#decipher");

decipherBtn.addEventListener("click",function(){
  const offsetDecifrarValue  = parseInt(document.querySelector("#offsetDecifrar").value);
  const textoADecifrarValue =document.querySelector("#textoADecifrar").value;
  const textoDecifradoElement = document.querySelector("#textoDecifrado");
  const mensajeDecifrado = cipher.decode(offsetDecifrarValue, textoADecifrarValue);

  textoDecifradoElement.value= mensajeDecifrado;
 
});

// asignar botones de volver a inicio y atras

const volverAInicio1 = document.querySelector(".volverAInicio1");
const volverAInicio2 = document.querySelector(".volverAInicio2");
const volverAInicio3 = document.querySelector(".volverAInicio3");
const volverAInicio4 = document.querySelector(".volverAInicio4");

function volverAInicio(){
  bloqueBienvenida.style.display="block";
  bloqueIntroduccion.style.display='none';
  bloqueInstrucciones.style.display='none';
  bloqueEncriptar.style.display='none';
  bloqueDecifrar.style.display='none';
}

volverAInicio1.addEventListener("click",volverAInicio);
volverAInicio2.addEventListener("click",volverAInicio);
volverAInicio3.addEventListener("click",volverAInicio);
volverAInicio4.addEventListener("click",volverAInicio);

const volverAtras1 = document.querySelector(".volverAtras1");
const volverAtras2 = document.querySelector(".volverAtras2");

function volverAtras(){
  bloqueBienvenida.style.display="none";
  bloqueIntroduccion.style.display='none';
  bloqueInstrucciones.style.display='block';
  bloqueEncriptar.style.display='none';
  bloqueDecifrar.style.display='none';
}

volverAtras1.addEventListener("click",volverAtras);
volverAtras2.addEventListener("click",volverAtras);
