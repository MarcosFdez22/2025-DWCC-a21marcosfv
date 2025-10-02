"use strict";
//////////////////////////////////////
console.log("Exercicio 1");
const cadea = "desenvolvemento web";

let novaCadea = cadea.slice(0, 1).toUpperCase() + cadea.slice(1);

console.log(novaCadea); // 'Desenvolvemento web'
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 2");

function reverseString(cadena) {
  let reverse = "";
  for (let index = cadena.length - 1; index >= 0; index--) {
    reverse = reverse + cadena[index];
  }
  return reverse;
}

console.log(reverseString("I am a string"));
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 3");

function enmascarar(texto) {
  let cifrado = texto.slice(-4);
  return cifrado.padStart(texto.length, "*");
}
console.log(enmascarar("1234123412347777"));
