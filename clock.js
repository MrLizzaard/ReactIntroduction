const clock = document.createElement("h4");
const body = document.querySelector("body");
clock.className = "clock";
clock.innerText = "00:00";

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clock.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
}

function init() {
  body.appendChild(clock);
  getClock();
  setInterval(getClock, 5000);
}
init();
