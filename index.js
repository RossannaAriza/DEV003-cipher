import cipher from './cipher.js';

//console.log(cipher);

const name = document.querySelector(".name");

//se declaran variable para hacer funcional las div en el momento que el usuario lo visualiza
const bloqueBienvenida = document.querySelector("#bienvenida");

const bloqueIntroduccion = document.querySelector("#introduccion");

const bloqueInstrucciones = document.querySelector("#instrucciones");

const bloqueEncriptar = document.querySelector("#encriptar");

const bloqueDecifrar = document.querySelector("#decifrar");

//se declara los botones para desplazarse en la estructura de la pagina y se le asigna las sentencias
const botonIntroduccion = document.querySelector("#continuarIntroduccion");

botonIntroduccion.addEventListener("click",function(){
  bloqueBienvenida.style.display="none";
  bloqueIntroduccion.style.display='block';
  bloqueInstrucciones.style.display='none';
  bloqueEncriptar.style.display='none';
  bloqueDecifrar.style.display='none';
  // crear un alert a este boton que salude con el nombre ingresado
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

const cipherBtn = document.querySelector("#cipher");

cipherBtn.addEventListener("click",function(){
  const offsetEncriptarValue  = parseInt(document.querySelector("#offsetEncriptar").value);
  const textoAEncriptarValue =document.querySelector("#textoAEncriptar").value;
  const textoEncriptadoElement = document.querySelector("#textoEncriptado");
  const mensajeEncriptado = cipher.encode(offsetEncriptarValue, textoAEncriptarValue.toUpperCase());

  textoEncriptadoElement.value= mensajeEncriptado;
});

const decipherBtn = document.querySelector("#decipher");

decipherBtn.addEventListener("click",function(){
  const offsetDecifrarValue  = parseInt(document.querySelector("#offsetDecifrar").value);
  const textoADecifrarValue =document.querySelector("#textoADecifrar").value;
  const textoDecifradoElement = document.querySelector("#textoDecifrado");
  const mensajeDecifrado = cipher.decode(offsetDecifrarValue, textoADecifrarValue.toUpperCase());

  textoDecifradoElement.value= mensajeDecifrado;
 
});

// asignar botones de volver a inicio

//const botonVolverInicio = document.getElementById("volverAInicio");

//botonVolverInicio.addEventListener("click",function(){
//bloqueBienvenida.style.display="block";
//bloqueIntroduccion.style.display='none';
//bloqueInstrucciones.style.display='none';
//bloqueEncriptar.style.display='none';
//bloqueDecifrar.style.display='none';
//});
