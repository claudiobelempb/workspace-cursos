"use strict";
function mostrarMensagem(texto) {
    console.log(texto);
    return true;
}
console.log(mostrarMensagem("Hcode"));
console.log(mostrarMensagem(100));
console.log(mostrarMensagem({ url: "https://hcode.com.br" }));
var show = function (codigo) {
    return new Date();
};
