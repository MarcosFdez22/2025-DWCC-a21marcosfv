"use strict";
//////////////////////////////////////
console.log("Exercicio 1");
const cubo = (n) => n * n * n;

console.log(cubo(3));
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 2");

const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];

const numerosImpares = (a) => {
  let nuevo = [];
  for (const e of a) {
    if (e % 2 != 0) {
      nuevo.push(e);
    }
  }
  return nuevo;
};
console.log(numerosImpares(arrayEntrada)); // (4) [3, 5, 7, 23]

console.log("\n");
//////////////////////////////////////
console.log("Exercicio 3");

const inder = (...nums) => {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
};
console.log(inder(1, 2, 3, 4, 5, 6));

console.log("\n");
//////////////////////////////////////
console.log("Exercicio 4");

const media = (...nums2) => {
  let total2 = 0;
  let contador = 0;

  for (const e2 of nums2) {
    total2 += e2;
    contador += 1;
  }
  let resultado = total2 / contador;
  return resultado.toFixed(2);
};

console.log(media(10, 50, 100));

console.log("\n");
//////////////////////////////////////
console.log("Exercicio 5");

const minMax = (array) => {
  let max = Math.max(...array);
  let min = Math.min(...array);
  const obx = { min: min, max: max };
  return obx;
};

console.log(minMax([1, 2, 3, 4, 5])); // Debe devolver { min: 1, max: 5 }

console.log("\n");
//////////////////////////////////////
console.log("Exercicio 7");
