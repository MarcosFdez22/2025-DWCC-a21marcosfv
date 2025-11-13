"use strict";

// Engade un event listener ao botón con id "btnAccion" que mostre un alert ao facer click
let accion = document.getElementById("btnAccion");
accion.addEventListener("click", () => {
  alert("ALERTA");
});

// Cada vez que se fai click no botón "Alternar clase" fai que se engada/elimine a clase "resaltado" no div con id "mensaxe".

let alternar = document.getElementById("btnAlternar");
let mensaxe = document.getElementById("mensaxe");
alternar.addEventListener("click", () => {
  mensaxe.classList.toggle("resaltado");
});

// Mostra por consola o valor do input cando se envía o formulario
let texto = document.getElementById("entradaTexto");
let boton = document.querySelector("form").querySelector("button");

boton.addEventListener("click", () => {
  event.preventDefault();
  console.log(texto.value);
});
