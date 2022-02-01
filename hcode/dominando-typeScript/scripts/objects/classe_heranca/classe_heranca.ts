class Cadastro {

    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }

}

class Cliente extends Cadastro {

    email: string;
    empresa: string;

    constructor(
        nome: string,
        nascimento: Date,
        email: string,
        empresa: string
    ) {

        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;

    }

}

const clienteJoao = new Cliente(
    "Joao",
    new Date("2000-01-01"),
    "joao@hcode.com.br",
    "Hcode"
);
console.log(clienteJoao);
