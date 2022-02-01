const category: string[] = ["Comédia", "Drama", "Romance", "Aventura"];

console.log(category);

const categoryFilmes: (string | number)[] = [
  "Comédia",
  "Drama",
  "Romance",
  "Aventura",
];

categoryFilmes.push("Rom");
categoryFilmes.push(String(1));
console.log(categoryFilmes);

const filmeAno: Array<number | string> = [];
for (let ano = 2019; ano <= new Date().getFullYear(); ano++) {
  filmeAno.push(ano);
}

console.log(filmeAno);
