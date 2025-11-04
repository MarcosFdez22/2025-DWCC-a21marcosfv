"use strict";
const ul = document.getElementById("listaULExercicio5");
const li3 = document.createElement("li");
li3.id = "three";
li3.append("2");
const li1 = document.getElementById("one");
li1.after(li3);

const li4 = document.createElement("li");
li4.id = "four";
li4.append("3");
const li2 = document.getElementById("two");
li2.before(li4);
