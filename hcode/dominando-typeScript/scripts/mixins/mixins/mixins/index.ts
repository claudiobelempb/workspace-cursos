import applyMixins from "./applyMixins";

class ProdutoFinal {

    vender(quantidade: number) { 
        return `Foram vendidos ${quantidade} itens deste produto`;
    }

    comprar(quantidade: number) { 
        return `Foram comprados ${quantidade} itens deste produto`;
    }

}

class Movel {

    sentar() {
        return "Você sentou no móvel";
    }

    empurrar(metros: number) {
        return `O móvel foi empurrado ${metros} metros.`
    }

}

class Sofa {

    constructor(public nome: string) {

    }

}

interface Sofa extends ProdutoFinal, Movel {}
applyMixins(Sofa, [ProdutoFinal, Movel]);

const produto = new Sofa("Meu sofá");

console.log(produto.vender(25));
console.log(produto.empurrar(50));
console.log(produto.nome);