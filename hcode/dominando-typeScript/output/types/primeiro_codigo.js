"use strict";
console.log("Hello World!");
console.log("==================");
var nome = "Cardoso";
console.log("Ol\u00E1 " + nome + " Seja bem-vindo!");
console.log("==================");
var Product = /** @class */ (function () {
    function Product(productName, productValue) {
        this.productName = productName;
        this.productValue = productValue;
    }
    return Product;
}());
var playstation5 = new Product("Playstation 5", 5000);
console.log(playstation5);
