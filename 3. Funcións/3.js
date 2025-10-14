"use strict";
console.log("Exercicio 1");
const persoas = [
  { nome: "aaron", idade: 65, id: 1 },
  { nome: "beth", idade: 2, id: 2 },
  { nome: "ánxeles", idade: 13, id: 3 },
  { nome: "daniel", idade: 3, id: 4 },
  { nome: "ada", idade: 25, id: 5 },
  { nome: "erea", idade: 1, id: 6 },
  { nome: "navia", idade: 43, id: 7 },
];
console.log("a)");
let mayores = persoas.filter((persoa) => persoa.idade >= 18);
console.log(mayores);
console.log("\n");
//////////////////////////////////////
console.log("b)");
let nombres = persoas.map((persoa) => persoa.nome);
console.log(nombres);
