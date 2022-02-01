function mostrarMensagem(texto: string | number | object): boolean {

    console.log(texto);

    return true;

}

console.log(mostrarMensagem("Hcode"));
console.log(mostrarMensagem(100));
console.log(mostrarMensagem({ url: "https://hcode.com.br"}));

const show = (codigo: number): number | Date | object => {

    return new Date();

}