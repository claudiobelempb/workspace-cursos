const element: HTMLHeadingElement | null = document.querySelector("h2");

let db: string | null = "mysql, 127.0.0.1, password";
db = null;

let minhaVariavel: string | undefined;

if (new Date().getDate() === 15) {
  minhaVariavel = "Hoje é o dia 15";
}

console.log(minhaVariavel);
