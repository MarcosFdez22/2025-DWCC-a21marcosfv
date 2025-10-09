"use strict";
console.log("Exercicio 1");

const television = {
  marca: "sony",
  categoría: "televisores",
  unidades: 4,
  prezo: 354.99,
  importe: function () {
    return this.unidades * this.prezo;
  },
};
console.log(television.importe());
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 2");
const game = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
let team1 = game.odds.team1,
  draw = game.odds.x,
  team2 = game.odds.team2;

console.log(team1, draw, team2);
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 3");
const game2 = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};
//a
let a = 1;
for (const e of game2.scored) {
  console.log("Gol " + a + ":" + e);
  a++;
}

//b
console.log(game2);
let scorers = {};
let contador = 1;
for (const e2 of game2.scored) {
  scorers[e2] = contador;
}
console.log(scorers);
