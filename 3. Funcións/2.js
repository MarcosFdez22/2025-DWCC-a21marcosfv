"use strict";
console.log("Exercicio 1");
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

let resultado = objects.reduce(
  (accumulator, currentValue, index) => accumulator + currentValue.price,
  0
);
console.log(`Resultado = ${resultado}`);

console.log("\n");
//////////////////////////////////////
console.log("Exercicio 2");

let array2 = [2, 5, 3, 8, 1, 7];

let resultado3 = array2.reduce((accumulator, currentValue, index) => {
  if (accumulator > currentValue) {
    accumulator = currentValue;
  }
  return accumulator;
});
console.log(resultado3);
