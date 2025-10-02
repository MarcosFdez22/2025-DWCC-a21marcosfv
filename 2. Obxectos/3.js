"use strict";
//////////////////////////////////////
const players = [
  [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
  ],
  [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
  ],
];
console.log(players);

console.log("Exercicio 1");
//a.

let players1 = Array.from(players[0]),
  players2 = Array.from(players[1]);

console.log("p1: " + players1 + "\n" + "p2: " + players2);
//b.
let gk = players1.slice(0, 1),
  fieldPlayers = players1.slice(1);
console.log("GK: " + gk);
console.log("FieldPlayers: " + fieldPlayers);

//c.
//let allPlayers = [players1, players2];
let allPlayers = [...players1, ...players2];
console.log(allPlayers);
