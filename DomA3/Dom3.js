const myform = document.getElementById("myform");
const btn1 = document.getElementById("btn");
const itemlist = document.getElementById("item");

btn1.addEventListener("mouseover", (e) => {
  btn1.style.background = "red";
  btn1.classList.add("zoom");
});

btn1.addEventListener("mouseout", (e) => {
  btn1.style.background = "white";
  btn1.classList.remove("zoom");
});

myform.addEventListener("submit", (e) => {
  e.preventDefault();
  const name1 = document.getElementById("nameid").value;
  const uemail = document.getElementById("emailid").value;
  const phone = document.getElementById("phoneid").value;
  if (name1 == "" || uemail == "" || phone == "") {
    alert("Please Enter All");
  } else {
    showOnScreen(name1, uemail, phone);
    let obj = {
      name: name1,
      email: uemail,
      phone: phone,
    };
    localStorage.setItem(uemail, JSON.stringify(obj));
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localStorageObjkeys = Object.keys(localStorageObj);

  for (let i = 0; i < localStorageObjkeys.length; i++) {
    const key = localStorageObjkeys[i];
    const userDetailsString = localStorageObj[key];
    const userObj = JSON.parse(userDetailsString);
    console.log(userObj);
    showOnScreen(userObj.name, userObj.email, userObj.phone);
  }
});

function showOnScreen(name1, uemail, phone) {
  var li = document.createElement("li");
  li.appendChild(
    document.createTextNode(name1 + " | " + uemail + " | " + phone)
  );

  /// delete button

  var delbtn = document.createElement("button");
  delbtn.className = "btn btn-danger btn-sm float-right delete";
  delbtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(delbtn);

  /// edit button

  var editbtn = document.createElement("button");
  editbtn.className = "btn btn-dark btn-sm float-right edit";
  editbtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editbtn);

  itemlist.appendChild(li);
}

itemlist.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are U Sure?")) {
      var li = e.target.parentElement;
      var details = li.childNodes[0].textContent.split(" | ");
      localStorage.removeItem(details[1]);
      itemlist.removeChild(li);
    }
  }
  e.stopPropagation();
});

itemlist.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    var li = e.target.parentElement;
    var namebox = document.getElementById("nameid");
    var emailbox = document.getElementById("emailid");
    var phonebox = document.getElementById("phoneid");
    var details = li.childNodes[0].textContent.split(" | ");
    localStorage.removeItem(details[1]);
    namebox.value = details[0];
    emailbox.value = details[1];
    phonebox.value = details[2];
    itemlist.removeChild(li);
  }
});
