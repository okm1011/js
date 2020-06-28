const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("delBtn");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function toDoHandleSubmit(event) {
  event.preventDefault();
  const toDoCurrentValue = toDoInput.value;
  paintToDo(toDoCurrentValue);
  toDoInput.value = "";
}
function loadsToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  } else {
  }
}

function init() {
  loadsToDos();
  toDoForm.addEventListener("submit", toDoHandleSubmit);
}

init();
