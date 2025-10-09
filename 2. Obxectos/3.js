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

//d.
let players1Final = [...players1, "Thiago", "Coutinho"];
console.log(players1Final);
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 2");
let nomes = ["first_name", "last_NAME"];
let nome1 = nomes[0];
let nome2 = nomes[1];
nome1 = nome1.toLowerCase().replace("_n", "N");
nome2 = nome2.toLowerCase().replace("_n", "N");
console.log(nome1, nome2);
console.log("\n");
//////////////////////////////////////
console.log("Exercicio 3");
const flightsInfo =
  "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+Departure;scq93766109;svq2323639855;12:30";

const flights = flightsInfo.split("+");

for (const flight of flights) {
  let f = flight.split(";");
  let one = f[0].replaceAll("_", " ").trim();

  let two = f[1].slice(0, 3).toUpperCase();

  let three = f[2].slice(0, 3).toUpperCase();

  let four = "(" + f[3].replace(":", "h") + ")";

  let final = one + " " + two + " " + three + " " + four;
  console.log(final.padStart(80));
}
