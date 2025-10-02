"use strict";
//////////////////////////////////////
console.log("Exercicio 1");
//a.
console.log(Math.floor(Math.random() * 4));
//b.
console.log(Math.ceil(Math.random() * 3));
//c.
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(numeroAleatorio(5, 10));
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 2");

function mins(minutos) {
  let inicial = minutos;
  let horas = 0;
  for (let index = 0; index < minutos; index + minutos) {
    if (minutos >= 60) {
      horas = horas + 1;
    }
    minutos = minutos - 60;
  }

  if (minutos === 0) {
    return inicial + " minutos son " + horas + " hora/s";
  } else {
    return (
      inicial +
      " minutos son " +
      horas +
      " hora/s y " +
      Math.abs(minutos) +
      " minutos"
    );
  }
}
console.log(mins(100));
