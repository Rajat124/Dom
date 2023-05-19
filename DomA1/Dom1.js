var headTitle = document.getElementById("header-title");
headTitle.innerHTML = "Hello";
headTitle.style.background = "red";
headTitle.style.border = "solid 5px black";

var mainHeader = document.getElementById("main-header");

mainHeader.style.borderBottom = "solid 5px blue";

var addItem = document.getElementsByClassName("title");
console.log(addItem);

addItem[0].style.backgroundColor = "yellow";
addItem[0].style.fontWeight = "bold";
addItem[0].style.color = "green";
