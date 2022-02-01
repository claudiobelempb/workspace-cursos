/// <reference path="./autenticacao/index.ts" />

const novoRegistro = new Autenticacao.LoginRegistro();

const resultadoRegistro = novoRegistro.registro({
    nome: "Djalma",
    email: "dj@hcode.com.br",
    senha: "djalmaroot",
    dataNascimento: new Date("1995-02-20")
});

console.log(resultadoRegistro);