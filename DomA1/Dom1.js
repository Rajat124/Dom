var headTitle = document.getElementById("header-title");
// headTitle.innerHTML = "Hello";

console.log(headTitle.innerText);
console.log(headTitle.textContent);

// innertext focus on CSS while textContent does not.

headTitle.style.background = "red";
headTitle.style.border = "solid 5px black";

var mainHeader = document.getElementById("main-header");

mainHeader.style.borderBottom = "solid 5px blue";

var addItem = document.getElementsByClassName("title");

addItem[0].style.backgroundColor = "yellow";
addItem[0].style.fontWeight = "bold";
addItem[0].style.color = "green";

var listItem = document.getElementsByClassName("list-group-item");
console.log(listItem);

listItem[2].style.backgroundColor = "green";
listItem[0].style.fontWeight = "bold";
listItem[1].style.fontWeight = "bold";
listItem[3].style.fontWeight = "bold";

// for (let i = 0; i < listItem.length; i++) {
//   listItem[i].style.backgroundColor = "red";
// }
