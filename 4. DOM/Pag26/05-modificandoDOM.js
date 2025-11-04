"use strict";

// Engade a clase CSS "color-title" ao elemento con id "tituloPrincipal"

const titulo1 = document.getElementById("tituloPrincipal");
titulo1.className = "color-title";

// Crea un novo elemento <li> coa clase CSS "item-lista" e o texto "Item 5". Engade este elemento á lista desordenada

const item5 = document.createElement("li");
item5.className = "item-lista";
item5.append("Item 5");
const ul = document.getElementById("lista");
ul.append(item5);

// Modifica o ancho do div con id "contedor" a 800px usando JavaScript

const contedor = document.getElementById("contedor");
contedor.style.width = "800px";

// Cambia o valor do atributo "placeholder" do input a "Escribe aquí..."

const place = document.getElementById("entradaTexto");
place.placeholder = "Escribe aquí...";

// Selecciona a lista con id "lista" e cámbialle o tamaño da fonte a 18px

ul.style.fontSize = "18px";

// Elimina o segundo elemento da lista (Item 2)

let lis = document.querySelectorAll("li");
lis[1].remove();

// Insire un novo parágrafo co texto "Texto dinámico" despois do elemento con id "mensaxe"

const p = document.createElement("p");
p.append("Texto dinámico");
const mensaxe = document.getElementById("mensaxe");
mensaxe.after(p);
