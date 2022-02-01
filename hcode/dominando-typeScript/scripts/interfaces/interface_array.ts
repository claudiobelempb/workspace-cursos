interface Categoria {
    nome: string;
    id: number;
    categoriaPai?: Categoria;
}

const frontEnd: Categoria = {
    nome: "Front-End",
    id: 1
}

const backEnd: Categoria = {
    nome: "Back-End",
    id: 2
}

interface Menu {

    categorias: Categoria[];

}

let menu: Menu = {
    categorias: [frontEnd, backEnd]
};

interface Todo {
    [indice: number]: string | number | boolean | Categoria;
}

let minhasTarefas: Todo;

minhasTarefas = [
    "Estudar TypeScript",
    "Estudar JavaScript",
    "Estudar PHP 8",
    20,
    true,
    frontEnd,
    {
        nome: "JavaScript",
        id: 3,
        categoriaPai: frontEnd
    }
];

console.log(minhasTarefas[0]);