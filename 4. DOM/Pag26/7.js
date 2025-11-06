"use strict";

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
    li.append(e2);
    let data2 = data[e2];
    if (Object.keys(data2).length === 0) {
      ul.append(li);
    } else {
      li.append(createTree(data2));
      ul.append(li);
    }
  }

  return ul;
}

document.body.append(createTree(arbore));
