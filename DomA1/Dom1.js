/*/ GetElementByID

var headTitle = document.getElementById("header-title");
// headTitle.innerHTML = "Hello";

console.log(headTitle.innerText);
console.log(headTitle.textContent);

// innertext focus on CSS while textContent does not.

headTitle.style.background = "red";
headTitle.style.border = "solid 5px black";

var mainHeader = document.getElementById("main-header");
mainHeader.style.borderBottom = "solid 5px blue";
*/

/* // GetElementByClassName

var addItem = document.getElementsByClassName("title");
addItem[0].style.backgroundColor = "yellow";
addItem[0].style.fontWeight = "bold";
addItem[0].style.color = "green";

var listItem = document.getElementsByClassName("list-group-item");
// var listItem1 = document.getElementById("items");
console.log(listItem);
// console.log(listItem1);

listItem[2].style.backgroundColor = "green";
listItem[0].style.fontWeight = "bold";
listItem[1].style.fontWeight = "bold";
listItem[3].style.fontWeight = "bold";
listItem[3].style.backgroundColor = "green";

// for (let i = 0; i < listItem.length; i++) {
//   listItem[i].style.backgroundColor = "red";
// }
*/

var listFive = document.getElementsByClassName("list-5");
listFive[0].style.color = "green";
listFive[0].style.fontWeight = "bold";

var listFive1 = document.getElementsByTagName("li");
listFive1[4].style.backgroundColor = "red";
