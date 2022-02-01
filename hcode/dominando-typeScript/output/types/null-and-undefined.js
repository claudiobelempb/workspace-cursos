"use strict";
var element = document.querySelector("h2");
var db = "mysql, 127.0.0.1, password";
db = null;
var minhaVariavel;
if (new Date().getDate() === 15) {
    minhaVariavel = "Hoje é o dia 15";
}
console.log(minhaVariavel);
