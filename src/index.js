import cipher from './cipher.js';

console.log(cipher);

function continuar(){
    PosActual = 0;
    
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("introduccion").style.display="block";
    document.getElementById("instrucciones").style.display="none";
    document.getElementById("encriptar").style.display="none";
    document.getElementById("decifrar").style.display="none";
    
    }

