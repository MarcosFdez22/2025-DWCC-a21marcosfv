const container = document.getElementById("container");

container.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    let div = e.target.closest("div");
    div.remove();
  }
});
