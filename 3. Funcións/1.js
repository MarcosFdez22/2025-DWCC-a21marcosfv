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

const calcularLetra = (dni) => {
  if (dni.length != 9) {
    return false;
  }
  let nums = dni.slice(0, 8);
  let letra = dni.slice(8).toUpperCase();
  let letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  const letraCorrecta = letras[nums % 23];
  return letra === letraCorrecta;
};
console.log(calcularLetra("33268222X"));

console.log("\n");
//////////////////////////////////////
console.log("Exercicio 8");

const dinero = (cantidad) => {
  let b500 = 0;
  let b200 = 0;
  let b100 = 0;
  let b50 = 0;
  let b20 = 0;
  let b10 = 0;
  let b5 = 0;
  let m2 = 0;
  let m1 = 0;
  while (cantidad > 0) {
    if (cantidad - 500 >= 0) {
      cantidad -= 500;
      b500 += 1;
    } else if (cantidad - 200 >= 0) {
      cantidad -= 200;
      b200 += 1;
    } else if (cantidad - 100 >= 0) {
      cantidad -= 100;
      b100 += 1;
    } else if (cantidad - 50 >= 0) {
      cantidad -= 50;
      b50 += 1;
    } else if (cantidad - 20 >= 0) {
      cantidad -= 20;
      b20 += 1;
    } else if (cantidad - 10 >= 0) {
      cantidad -= 10;
      b10 += 1;
    } else if (cantidad - 5 >= 0) {
      cantidad -= 5;
      b5 += 1;
    } else if (cantidad - 2 >= 0) {
      cantidad -= 2;
      m2 += 1;
    } else if (cantidad - 1 >= 0) {
      cantidad -= 1;
      m1 += 1;
    }
  }
  let resultado = "";
  if (b500) resultado += "Billetes de 500€: " + b500 + "\n";
  if (b200) resultado += "Billetes de 200€: " + b200 + "\n";
  if (b100) resultado += "Billetes de 100€: " + b100 + "\n";
  if (b50) resultado += "Billetes de 50€: " + b50 + "\n";
  if (b20) resultado += "Billetes de 20€: " + b20 + "\n";
  if (b10) resultado += "Billetes de 10€: " + b10 + "\n";
  if (b5) resultado += "Billetes de 5€: " + b5 + "\n";
  if (m2) resultado += "Monedas de 2€: " + m2 + "\n";
  if (m1) resultado += "Monedas de 1€: " + m1 + "\n";
  return resultado;
};

console.log(dinero(1893));

console.log("\n");
//////////////////////////////////////
console.log("Exercicio 9");
