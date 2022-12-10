const cipher = {
  encode: function (offsetEncriptarValue,textoAEncriptarValue) {
    if (typeof offsetEncriptarValue !== "number" || typeof textoAEncriptarValue !== "string") {
      throw new TypeError("Tipos de datos no validos", "cipher.js", 3);
    }
    let output = "";
    for (let i = 0; i < textoAEncriptarValue.length; i++) {
      let char = textoAEncriptarValue[i];
      const code = textoAEncriptarValue.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + offsetEncriptarValue) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + offsetEncriptarValue) % 26) + 97);
      }

      output = output + char;
    }
    return output;
  },


  decode: function (offsetDecifrarValue,textoADecifrarValue){
    if (typeof offsetDecifrarValue !== "number" || typeof textoADecifrarValue !== "string"){
      throw new TypeError("Tipos de datos no validos", "cipher.js", 3);
    }
    let output = "";
    for(let i = 0; i < textoADecifrarValue.length; i++){
      let char = textoADecifrarValue[i];
      const code = textoADecifrarValue.charCodeAt(i);

      if (code >= 65 && code <= 90){
        char = String.fromCharCode(((code - 90 - offsetDecifrarValue) % 26) + 90);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 122 - offsetDecifrarValue) % 26)+122);
      }

      output = output + char;
    }
    return output;
  },

};

export default cipher;

