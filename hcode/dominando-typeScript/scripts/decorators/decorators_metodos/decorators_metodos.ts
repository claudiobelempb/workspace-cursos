function decoratorMetodo(
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor 
) {

    descriptor.value = (...args: string[]) => {

        return args.map(item => item.toLowerCase());

    };

}

class TratarMensagem {

    @decoratorMetodo
    dizerMensagem(...mensagens: string[]) {

        return mensagens;

    }

}

const instancia = new TratarMensagem();

console.log(instancia.dizerMensagem("Olá", "Seja bem-vindo", "Hcode"));