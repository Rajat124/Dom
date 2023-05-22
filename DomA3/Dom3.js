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
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(name1));
    li.appendChild(document.createTextNode(` - ${uemail}`));
    li.appendChild(document.createTextNode(` - ${phone}`));

    var delbtn = document.createElement("button");
    delbtn.className = "btn btn-danger btn-sm float-right delete";
    delbtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(delbtn);
    itemlist.appendChild(li);

    let obj = {
      name: name1,
      email: uemail,
      phone: phone,
    };
    localStorage.setItem(uemail, JSON.stringify(obj));
  }

  itemlist.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      if (confirm("Are U Sure?")) {
        var li = e.target.parentElement;
        localStorage.removeItem(uemail);
        itemlist.removeChild(li);
      }
    }
  });
});
