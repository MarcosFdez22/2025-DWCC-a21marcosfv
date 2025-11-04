let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

let body = document.querySelector("body");

function createTree(data) {
  const ul = document.createElement("ul");

  for (const e2 of Object.keys(data)) {
    let li = document.createElement("li");
    let data2 = Object.values(data);
    li.append(e2);
    ul.append(li);
    console.log(data2 != null);
  }
  body.append(ul);
}
createTree(arbore);
