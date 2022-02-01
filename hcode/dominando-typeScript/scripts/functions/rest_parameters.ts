function somarRenda(...meses: number[]): number {

    return meses.reduce((rendaTotal: number, rendaAtual: number) => rendaTotal + rendaAtual, 0);

}

console.log(somarRenda(250, 780, 695, 2000, 6500));