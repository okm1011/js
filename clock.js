const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new date();
  const minutes = date.getMinute();
  const hours = date.getHours();
  clockTitle.innerText = `${hours}:${minutes}`;
}
function init() {
  getTime();
}

init();
