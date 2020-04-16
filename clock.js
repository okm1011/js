const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hours = date.getHours();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
