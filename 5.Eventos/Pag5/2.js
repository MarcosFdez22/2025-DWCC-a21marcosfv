const texto = document.getElementById("texto");
const boton = document.getElementById("boton");
const ul = document.querySelector("ul");
boton.addEventListener("click", () => {
  const li = document.createElement("li");
  li.append(texto.value);
  ul.append(li);
  texto.value = "";
});
