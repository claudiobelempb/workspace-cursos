"use strict";
var category = ["Comédia", "Drama", "Romance", "Aventura"];
console.log(category);
var categoryFilmes = [
    "Comédia",
    "Drama",
    "Romance",
    "Aventura",
];
categoryFilmes.push("Rom");
categoryFilmes.push(String(1));
console.log(categoryFilmes);
var filmeAno = [];
for (var ano_1 = 2019; ano_1 <= new Date().getFullYear(); ano_1++) {
    filmeAno.push(ano_1);
}
console.log(filmeAno);
