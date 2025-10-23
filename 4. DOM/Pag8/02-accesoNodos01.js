console.log("Exercicio 1");
let uno = document.getElementById("age-table");
console.log(uno);

let labels = uno.querySelectorAll("label");
console.log(labels);

console.log(document.querySelector("td"));

let forms = document.querySelector("form[name='search']");
console.log(forms);

let input1 = forms.querySelector("input");
console.log(input1);

let input2 = forms.querySelectorAll("input")[1];
console.log(input2);
