var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var newitem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newitem));

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
