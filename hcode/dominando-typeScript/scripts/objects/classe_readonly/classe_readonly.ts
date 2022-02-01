class Usuario {

    readonly id: string = "123123sdad232";
    nome: string = "Joao";
    private senha: string = "123456";
    readonly dataCadastro: Date = new Date("2021-01-01");

}

const usuario = new Usuario();

// usuario.id = "123";

//console.log(usuario.senha);