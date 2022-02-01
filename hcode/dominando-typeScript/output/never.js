"use strict";
function showError(message) {
    throw new Error(message);
}
//console.log(showError("Algo deu errado"));
var n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
loopInfinito();
