"use strict";
//////////////////////////////////////
console.log("Exercicio 1");

function dias(dia) {
  if (
    dia == "lunes" ||
    dia == "martes" ||
    dia == "miercoles" ||
    dia == "jueves" ||
    dia == "viernes"
  ) {
    return "Laborable";
  } else if (dia == "sabado" || dia == "domingo") {
    return "No Laborable";
  }
}
console.log(dias("martes"));
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 2");

function numeros(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(numeros(1, 2, 3));
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 3");

for (let index = 0; index != 31; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 4");

function potencias(pot) {
  for (let index = 0; index <= 20; index++) {
    console.log(pot + " elevado a " + index + " = " + pot ** index);
  }
}
console.log(potencias(2));

console.log("\n");
//////////////////////////////////////
console.log("Exercicio 5");

function factorial(num) {
  let resultado = 1;
  for (let index = 1; index <= num; index++) {
    resultado = resultado * index;
  }
  return num + "!" + " = " + resultado;
}

console.log(factorial(5));
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 6");

let peso1 = 70;
let altura1 = 1.7;
let imc1 = peso1 / altura1 ** 2;

let peso2 = 80;
let altura2 = 1.6;
let imc2 = peso2 / altura2 ** 2;

if (imc1 > imc2) {
  console.log(
    "O IMC (" +
      imc1.toFixed(1) +
      ")" +
      " da primeira persoa é maior que o da segunda persoa (" +
      imc2.toFixed(1) +
      ")"
  );
} else {
  console.log(
    "O IMC (" +
      imc1.toFixed(1) +
      ")" +
      " da primeira persoa é menor que o da segunda persoa (" +
      imc2.toFixed(1) +
      ")"
  );
}
