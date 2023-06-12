const myform = document.getElementById("myform");
const btn1 = document.getElementById("btn");
const itemlist = document.getElementById("item");

myform.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.getElementById("amountid").value;
  const decr = document.getElementById("decrid").value;
  const category = document.getElementById("categoryid").value;

  if (amount === "" || decr === "" || category === "") {
    alert("Enter All inputs");
  } else {
    var li = document.createElement("li");
    li.appendChild(
      document.createTextNode(amount + " - " + decr + " - " + category)
    );

    var delbtn = document.createElement("button");
    delbtn.className = "btn btn-danger btn-sm float-right delete";
    delbtn.appendChild(document.createTextNode("Delete Expense"));
    li.appendChild(delbtn);

    var editbtn = document.createElement("button");
    editbtn.className = "btn btn-danger btn-sm float-right edit";
    editbtn.appendChild(document.createTextNode("Edit Expense"));
    li.appendChild(editbtn);
    itemlist.appendChild(li);
    let obj = {
      amount: amount,
      decr: decr,
      category: category,
    };
    localStorage.setItem(category, JSON.stringify(obj));
  }
});

itemlist.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Ar u sure?")) {
      var li = e.target.parentElement;
      var details = li.childNodes[0].textContent.split(" - ");
      localStorage.removeItem(details[2]);
      itemlist.removeChild(li);
    }
  }
});

itemlist.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    var li = e.target.parentElement;
    const amountbox = document.getElementById("amountid");
    const decrbox = document.getElementById("decrid");
    const categorybox = document.getElementById("categoryid");
    var details = li.childNodes[0].textContent.split(" - ");

    localStorage.removeItem(details[2]);
    amountbox.value = details[0];
    decrbox.value = details[1];
    categorybox.value = details[2];
    itemlist.removeChild(li);
  }
});
