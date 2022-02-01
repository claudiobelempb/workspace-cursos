interface IProduto {
    nome: string;
    preco: number;
    descricao?: string;
    dataValidade: Date;
}

const produtoDados: IProduto = {
    nome: "Notebook",
    preco: 2000,
    // descricao: "Meu notebook superpotente",
    dataValidade: new Date(2022, 11, 1)
}