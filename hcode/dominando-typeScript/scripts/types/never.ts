function showError(message: string): never {

    throw new Error(message);

}

//console.log(showError("Algo deu errado"));

let n = 0;

function loopInfinito(): never {

    while(true) {
        console.log(n++);
    }

}

loopInfinito();