function decoratorGetSet(valor: boolean) {

    return function(
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        descriptor.enumerable = valor;

    }

}

class Login {

    constructor(
        private _usuario: string,
        private _senha: string
    ) {}

    @decoratorGetSet(true)
    get usuario() {
        return this._usuario;
    }

    @decoratorGetSet(false)
    get senha() {
        return this._senha;
    }

}

const login = new Login("anthony@hcode.com.br", "102030");

for (let chave in login) {
    console.log("chave", chave);
    console.log("valor", login[chave]);
}