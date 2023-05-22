const myform = document.getElementById("myform");
const name1 = document.getElementById("nameid");
const email = document.getElementById("emailid");
const phone = document.getElementById("phoneid");
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
  if (name1.value == "" || email.value == "" || phone.value == "") {
    alert("Please Enter All");
  } else {
    var newli = document.createElement("li");
    newli.appendChild(document.createTextNode(`${name1.value}`));
    newli.appendChild(document.createTextNode(`- ${email.value}`));
    newli.appendChild(document.createTextNode(`- ${phone.value}`));

    itemlist.appendChild(newli);

    let obj = {
      name: `${name1.value}`,
      email: `${email.value}`,
      phone: `${phone.value}`,
    };
    localStorage.setItem(`${email.value}`, JSON.stringify(obj));
  }
});
