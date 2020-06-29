const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("delBtn");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  const newId = toDos.length + 1;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function toDoHandleSubmit(event) {
  event.preventDefault();
  const toDoCurrentValue = toDoInput.value;
  paintToDo(toDoCurrentValue);
  toDoInput.value = "";
}
function loadsToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
  } else {
  }
}

function init() {
  loadsToDos();
  toDoForm.addEventListener("submit", toDoHandleSubmit);
}

init();
