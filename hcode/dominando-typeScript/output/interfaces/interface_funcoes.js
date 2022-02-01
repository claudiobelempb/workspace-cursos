"use strict";
var primeiraSoma;
primeiraSoma = function (numero1, numero2) {
    return numero1 + numero2;
};
var calculadora;
function adicao(a, b) {
    return a + b;
}
var subtrair = function (n1, n2) { return n1 - n2; };
calculadora = {
    dividir: function (numero1, numero2) {
        return numero1 / numero2;
    },
    multiplicar: function (numero1, numero2) {
        return numero1 * numero2;
    },
    somar: adicao,
    subtrair: subtrair
};
