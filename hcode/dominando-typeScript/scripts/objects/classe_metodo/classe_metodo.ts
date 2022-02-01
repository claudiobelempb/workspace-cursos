class Professor {

    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string) {

        this.nome = nome;
        this.idade = idade;
        this.materia = materia;

    }

    seApresentar(): string {

        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia}.`;

    }

    dizerNotas(...notas: number[]): number {

        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);

        return notasTotal / notas.length;

    }

}

const glaucio = new Professor("Glaucio Daniel", 45, "DBA");

console.log(glaucio.seApresentar());

console.log("==========");

const joaoRangel = new Professor("João Rangel", 25, "TypeScript");

console.log(joaoRangel.seApresentar());

console.log(joaoRangel.dizerNotas(8, 10, 5.5, 7.5));