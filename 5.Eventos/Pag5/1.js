const oculto = document.querySelector(".oculto");
oculto.style.display = "none";

const link = document.getElementById("ligazon");

link.addEventListener("click", () => {
  oculto.style.display = "contents";
  link.style.display = "none";
});
