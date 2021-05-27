const user = document.querySelector(".userName");
const mainForm = document.querySelector(".getUserName");
const textbox = document.querySelector(".textboxName");
const btn = user.querySelector(".adjustBtn");
const addDream = document.querySelector(".addDream");
const dreamDisplay = document.querySelector(".dreams");

const NAME_LS = "userName";
const DREAM_LS = "Dream";
const dreamlist = [];

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
      dreamInit();
    }, 3000);
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
  addDream.classList.add("hidden");
  addDream.classList.remove("noDream");
  addDream.classList.remove("yesDream");
  document.querySelector(".dreamForm").classList.add("hidden");
  user.classList.remove("gotName");
  localStorage.removeItem(NAME_LS);
  PrintName();
}

function dreamInit() {
  addDream.classList.remove("hidden");
  if (localStorage.getItem(DREAM_LS) === null) {
    addDream.classList.add("noDream");
  } else {
    addDream.classList.add("yesDream");
    JSON.parse(localStorage.getItem(DREAM_LS)).forEach((a) => {
      dreamlist.push(a);
      printDream(a.dream);
    });
    //dreamlist에 추가 & 출력
  }
  addDream.addEventListener("click", getUserDream);
}

function printDream(dr) {
  let dream = document.createElement("li");
  dream.innerText = dr;
  dreamDisplay.appendChild(dream);
}

function getUserDream() {
  addDream.classList.remove("noDream");
  addDream.classList.add("yesDream");
  let submitDream = document.querySelector(".dreamForm");
  submitDream.classList.remove("hidden");
  submitDream.addEventListener("submit", dreamSubmitted);
}

function dreamSubmitted(event) {
  let dreamText = document.querySelector(".dreamText");
  let dreamForm = document.querySelector(".dreamForm");
  event.preventDefault();
  let dream = dreamText.value;
  let id = dreamlist.length + 1;
  printDream(dream);
  const dreamdata = {
    dream,
    id,
  };
  dreamlist.push(dreamdata);
  localStorage.setItem(DREAM_LS, JSON.stringify(dreamlist));
  dreamText.value = "";
  dreamForm.classList.add("hidden");
}

function addDreamForm() {
  let form = document.createElement("form");
  let text = document.createElement("input");
  text.type = "text";
  form.className = "dreamForm";
  form.classList.add("hidden");
  text.className = "dreamText";
  text.spellcheck = false;
  form.appendChild(text);
  body.appendChild(form);
}

function init() {
  PrintName();
  addDreamForm();
}

init();
