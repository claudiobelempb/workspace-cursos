function obterPrimeiraPosicao<Hcode>(meuArray: Array<Hcode>): Hcode | undefined {

    return meuArray.pop();

}

console.log(obterPrimeiraPosicao(["Glaucio", 10, "Rafael", "Ronaldo"]));