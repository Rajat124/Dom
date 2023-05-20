/* // GetElementByID

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

/*
var listFive = document.getElementsByClassName("list-5");
listFive[0].style.color = "green";
listFive[0].style.fontWeight = "bold";

var listFive1 = document.getElementsByTagName("li");
listFive1[4].style.backgroundColor = "red";

console.log(listFive);
console.log(listFive1);
*/

/* // GetElementByTagName

var liItem = document.getElementsByTagName("li");
liItem[0].style.backgroundColor = "yellow";
liItem[0].style.fontWeight = "bold";
liItem[0].style.color = "green";

liItem[2].style.backgroundColor = "green";
liItem[0].style.fontWeight = "bold";
liItem[1].style.fontWeight = "bold";
liItem[3].style.fontWeight = "bold";

for (let i = 0; i < liItem.length; i++) {
  liItem[i].style.backgroundColor = "red";
}
*/

/* // QuerySelector

var input = document.querySelector("input");
input.value = "Hello World";

var submit = document.querySelector("input[type = 'submit']");
submit.value = "SEND";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

var item2 = document.querySelector(".list-group-item:nth-child(2)");
item2.style.backgroundColor = "green";

var item3 = document.querySelector(".list-group-item:nth-child(3)");
item3.style.display = "none";
*/

/* // QuerySelectorAll

var title = document.querySelectorAll(".title");

console.log(title);

title[0].style.color = "red";
title[0].textContent = "Hello";

var odd = document.querySelectorAll(".list-group-item:nth-child(odd)");

var even = document.querySelectorAll(".list-group-item:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "red";
  even[i].style.backgroundColor = "blue";
}
*/

////////////////// Traversing the DOM /////////////////////

// var itemList = document.querySelector("#items");

// ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "red";
// console.log(itemList.parentNode.parentNode.parentNode);

// ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "red";
// console.log(itemList.parentElement.parentElement.parentElement);

// ChildNode
// console.log(itemList.childNodes);
// it will count spaces as text with index

// Children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "red";

// FirstChild  //Kind of similar to ChildNode even worse
// console.log(itemList.firstChild);

// LastChild  //Kind of similar to ChildNode even worse
// console.log(itemList.lastChild);

// FirstElementChild
// console.log(itemList.firstElementChild);

// LastElementChild
// console.log(itemList.lastElementChild);

// NextSibling
// console.log(itemList.nextSibling);

// PreviousSibling
// console.log(itemList.previousSibling);

// NextElementSibling
// console.log(itemList.nextElementSibling);

// PreviousElementSibling
// console.log(itemList.previousElementSibling);

//////////// CreateElement ///////////////////////////

var newDiv = document.createElement("div");
console.log(newDiv);
newDiv.className = "hello";
newDiv.id = "hello1";
newDiv.setAttribute("title", "hello Div");

var newDivText = document.createTextNode("Hello World");
newDiv.appendChild(newDivText);

///// inseting between container & h1 element

var container = document.querySelector(".container");
var h1 = document.querySelector("h1");
container.insertBefore(newDiv, h1);

///////////////////////////////////////////////

var newDiv1 = document.createElement("div");
newDiv1.className = "hello";
newDiv1.id = "hello1";
newDiv1.setAttribute("title", "hello Div");

var newDivText1 = document.createTextNode("Hello World");
newDiv1.appendChild(newDivText1);

var ul = document.querySelector("#items");
var li = document.querySelector("li");
ul.insertBefore(newDiv1, li);
// */
