const form = document.querySelector(".js_form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js_greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreetings(text) {
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerHTML = `hello! ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem("USER_LS");
  if (currentUser === null) {
  } else {
    paintGreetings(currentUser);
  }
}

function init() {}

init();
