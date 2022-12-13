const cipher = {
  encode: function (offsetEncriptarValue,textoAEncriptarValue) {
    if (typeof offsetEncriptarValue !== "number" || typeof textoAEncriptarValue !== "string") {
      throw new TypeError("Tipos de datos no validos", "cipher.js", 3);
    }
    let mensajeResultado = ""; //se crea una variable mensajeResultado y se establece como un string
    for (let i = 0; i < textoAEncriptarValue.length; i++) { //se usa el loop for para recorrer el array en donde se establece el indix "i" comienza desde o y llega a la ultima posicion del array name array.length y para recorrerlo de uno en uno i++
      let char = textoAEncriptarValue[i];
      const code = textoAEncriptarValue.charCodeAt(i);//se utiliza el método que devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + offsetEncriptarValue) % 26) + 65); //se agrega mayusculas, se utiliza el método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + offsetEncriptarValue) % 26) + 97); // se agrega minusculas, el objeto String se utiliza para representar y manipular una secuencia de caracteres.
      }

      mensajeResultado = mensajeResultado + char;
    }
    return mensajeResultado;
  },


  decode: function (offsetDecifrarValue,textoADecifrarValue){
    if (typeof offsetDecifrarValue !== "number" || typeof textoADecifrarValue !== "string"){
      throw new TypeError("Tipos de datos no validos", "cipher.js", 3);
    }
    let mensajeResultado = "";
    for(let i = 0; i < textoADecifrarValue.length; i++){
      let char = textoADecifrarValue[i];
      const code = textoADecifrarValue.charCodeAt(i);

      if (code >= 65 && code <= 90){
        char = String.fromCharCode(((code - 90 - offsetDecifrarValue) % 26) + 90);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 122 - offsetDecifrarValue) % 26)+122);
      }

      mensajeResultado = mensajeResultado + char;
    }
    return mensajeResultado;
  },

};

export default cipher;

