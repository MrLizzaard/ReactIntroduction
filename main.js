const user = document.querySelector(".userName");
const mainForm = document.querySelector(".getUserName");
const textbox = document.querySelector(".textboxName");

const NAME_LS = "name";

function mouseHandler() {
  user.addEventListener("mouseenter", mouseEnter);
  user.addEventListener("mouseleave", mouseLeave);
}
function mouseEnter(event) {
  user.classList.add("hover");
}
function mouseLeave(event) {
  user.classList.remove("hover");
}

function PrintName() {
  const name = localStorage.getItem(NAME_LS);
  if (name === null) {
    nameSubmit();
  } else {
    mainForm.classList.add("hidden");
    let nameContainer = user.querySelector("h2");
    let name = localStorage.getItem(NAME_LS);
    nameContainer.innerText = `Hello! ${name}`;
    let btn = user.querySelector(".adjustBtn");
    btn.classList.remove("hidden");
    btn.addEventListener("click", delName);
  }
}
function nameSubmit() {
  mainForm.addEventListener("submit", submitted);
}
function submitted(event) {
  event.preventDefault();
  let name = textbox.value;
  localStorage.setItem(NAME_LS, name);
  textbox.value = "";
  PrintName();
}
function delName() {
  user.querySelector("h2").innerText = `Hello! please type your name`;
  user.querySelector(".adjustBtn").classList.add("hidden");
  mainForm.classList.remove("hidden");
  localStorage.removeItem(NAME_LS);
  PrintName();
}

function init() {
  mouseHandler();
  PrintName();
}

init();
