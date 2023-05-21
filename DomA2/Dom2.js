var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var newitem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newitem));

  // creating description

  var descItem = document.getElementById("itemDescr").value;
  li.appendChild(document.createTextNode(` ----> ${descItem}`));

  /// creating button
  var deletebtn = document.createElement("button");
  deletebtn.className = "btn btn-danger btn-sm float-right delete";
  deletebtn.appendChild(document.createTextNode("X"));
  li.appendChild(deletebtn);

  /// creating edit button

  var editbtn = document.createElement("button");
  editbtn.className = "btn btn-white btn-sm float-right";
  editbtn.appendChild(document.createTextNode("✏️"));
  li.appendChild(editbtn);

  itemList.appendChild(li);
});

itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are u sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
});

filter.addEventListener("keyup", (e) => {
  var text = e.target.value.toLowerCase();
  var items = document.getElementsByTagName("li");

  Array.from(items).forEach((ele) => {
    var itemName = ele.firstChild.textContent;
    var descChecj = ele.firstChild.nextSibling.textContent;

    if (itemName.toLowerCase().indexOf(text) !== -1) {
      ele.style.display = "block";
    } else if (descChecj.toLowerCase().indexOf(text) !== -1) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
});

/* //////
var items = document.getElementsByTagName("li");
console.log(items);
console.log(items[0].firstChild);

var itemName = items[0].firstChild.textContent;
console.log(itemName);

var items = document.querySelector("#items");
console.log(items);
console.log(items.childNodes);
console.log(items.firstChild);
console.log(items.lastChild);

*/
