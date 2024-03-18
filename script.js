const date = new Date();
const yyyy = date.getFullYear();
let mm = date.getMonth() + 1; // Months start at 0!
let dd = date.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const todayDate = dd + "/" + mm + "/" + yyyy;

document.getElementById("date").innerHTML = todayDate;

let title = document.getElementById("title");
let desc = document.getElementById("desc");
let savebtn = document.getElementById("savebtn");
let deletebtn = document.getElementById("deletebtn");
let todo = document.getElementById("todo");
savebtn.addEventListener("click", (e) => {
  e.preventDefault();
  let titleContent = title.value;
  let descContent = desc.value;
  localStorage.setItem("todo", JSON.stringify([titleContent, descContent]));
  todo.innerHTML += `
  <h3>${titleContent}</h3>
  <p>${descContent}</p>
  `;
  title.value = "";
  desc.value = "";
});

deletebtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("todo");
  todo.innerHTML = "";
});
