console.log("Hello World!");

console.log("==================");

const nome = "Cardoso";
console.log(`Olá ${nome} Seja bem-vindo!`);

console.log("==================");

class Product {
  productName: string;
  productValue: number;

  constructor(productName: string, productValue: number) {
    this.productName = productName;
    this.productValue = productValue;
  }
}

const playstation5 = new Product("Playstation 5", 5000);
console.log(playstation5);
