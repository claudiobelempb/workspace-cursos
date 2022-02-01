"use strict";
var frontEnd = {
    nome: "Front-End",
    id: 1
};
var backEnd = {
    nome: "Back-End",
    id: 2
};
var menu = {
    categorias: [frontEnd, backEnd]
};
var minhasTarefas;
minhasTarefas = [
    "Estudar TypeScript",
    "Estudar JavaScript",
    "Estudar PHP 8",
    20,
    true,
    frontEnd,
    {
        nome: "JavaScript",
        id: 3,
        categoriaPai: frontEnd
    }
];
console.log(minhasTarefas[0]);
