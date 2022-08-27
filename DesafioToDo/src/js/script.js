//Variáveis Globais
const nomeTodoInput = document.querySelector("#nomeTarefa");
const insereToDoForm = document.querySelector("#insereToDo");
const toDoListOutput = document.querySelector("#todoList");

let listaToDo = [];
let edit = false;
let selectIndex = null;

function start() {
  insereToDoForm.addEventListener("submit", handleSubmitToDo);
  getTodoListFromLocalStorage();
  renderTodoList();
  nomeTodoInput.focus();
}

function handleSubmitTodo(event) {
  event.preventDefault();
  nomeTodoInput.focus();
  const nomeToDo = nomeTodoInput.value.trim();
  console.log(nomeToDo);
  if (!nomeToDo) {
    clearInput();
    return;
  }
  if (isEditMode) {
    handleUpdateTodo(nomeToDo);
  } else {
    handleAddTodo(nomeToDo);
  }
  clearInput();
  renderTodoList();
}

function toggleTodoUpdateMode(event) {
  const itemToUpdate = Number(event.currentTarget.id.split("-")[1]);
  nomeTodoInput.value = allTodoList[itemToUpdate].title;
  selectedIndex = itemToUpdate;
  isEditMode = true;
  nomeTodoInput.focus();
}
