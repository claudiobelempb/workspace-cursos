class Pessoa {

    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number) {

        this.nome = nome;
        this.idade = idade;
        this.altura = altura;

    }

    toString(): string {

        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura.`;

    }

}

const ronaldo = new Pessoa("Ronaldo Braz", 30, 1.85);
const marcus = new Pessoa("Marcus Ribeiro", 19, 2);

ronaldo.nome = "Ronaldo";

console.log("Pessoa: " + ronaldo);
console.log("Pessoa: " + marcus);