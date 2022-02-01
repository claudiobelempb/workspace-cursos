interface CadastroPadrao {

    readonly id: number;
    readonly created_at: Date;
    readonly updated_at: Date;

}

interface CadastroUsuario extends CadastroPadrao {

    nome: string;
    email: string;
    senha: string;
    
}

interface CadastroCategoria extends CadastroPadrao {

    nome: string;

}

class CadastroBasico<InterfaceBasica> {

    criar(dados: InterfaceBasica): InterfaceBasica {

        console.log("Criando novo registro");

        return dados;

    }

    selecionar(id: number): InterfaceBasica {

        console.log("Dados do registro de ID " + id);

        return {} as InterfaceBasica;

    }

    editar(
        id: number,
        dadosAtualizacao: InterfaceBasica
    ): InterfaceBasica {

        console.log("Editando dados do ID " + id);

        return dadosAtualizacao;

    }

    excluir(id: number): boolean {

        console.log("Excluindo registro do ID " + id);

        return true;

    }

}

class UsuarioModelo extends CadastroBasico<CadastroUsuario> { }

const novoUsuario = new UsuarioModelo();

console.log(novoUsuario.criar({
    id: 1,
    nome: "Glaucio Daniel",
    email: "glaucio_daniel@hcode.com.br",
    senha: "gl@uc1o",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-01-20")
}));

class CategoriaModelo extends CadastroBasico<CadastroCategoria> { }

const novaCategoria = new CategoriaModelo();

novaCategoria.criar({
    id: 1,
    nome: "JavaScript",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-01-20")
});