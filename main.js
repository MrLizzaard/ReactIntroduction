const user = document.querySelector(".userName");
const mainForm = document.querySelector(".getUserName");
const textbox = document.querySelector(".textboxName");
const btn = user.querySelector(".adjustBtn");

const NAME_LS = "userName";

function PrintName() {
  const name = localStorage.getItem(NAME_LS);
  if (name === null) {
    mainForm.addEventListener("submit", submitted);
  } else {
    mainForm.classList.add("hidden");
    let nameContainer = user.querySelector("h1");
    let name = localStorage.getItem(NAME_LS);
    nameContainer.innerText = `Hello! ${name}`;
    btn.addEventListener("click", delName);
    setTimeout(() => {
      user.querySelector("h1").innerText = name;
      user.classList.add("gotName");
      btn.classList.remove("hidden");
    }, 2000);
  }
}
function submitted(event) {
  event.preventDefault();
  let name = textbox.value;
  localStorage.setItem(NAME_LS, name);
  textbox.value = "";
  PrintName();
}
function delName() {
  user.querySelector("h1").innerText = `Hello! please type your name`;
  btn.classList.add("hidden");
  mainForm.classList.remove("hidden");
  user.classList.remove("gotName");
  localStorage.removeItem(NAME_LS);
  -PrintName();
}

function init() {
  PrintName();
}

init();
