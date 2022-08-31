// Variáveis Globais
const todoForm = document.querySelector("#todo-form");
const todoNovaTarefa = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// Funções
const saveTodo = (tarefa) => {
  const todo = document.createElement("div")
  todo.classList.add("todo");
  
  const tituloTodo = document.createElement("h3");
  tituloTodo.innerText = tarefa;
  todo.appendChild(tituloTodo);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);
  todoNovaTarefa.value = "";
  todoNovaTarefa.focus();

  console.log(todo);
}

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
  console.log("Editando Tarefas")
}

// Eventos
// Nova Tarefa
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputTarefa = todoNovaTarefa.value;
  
  if (inputTarefa) {
    saveTodo(inputTarefa);
  }
});

// Edição das tarefas
document.addEventListener("click", (e) => {
  const targetClick = e.target;
  const parentClick = targetClick.closest("div"); // Pega o elemento mais próximo (el pai, nesse caso o div 'todo')
  let todoTitle;

  if(parentClick && parentClick.querySelector("h3")){
    todoTitle = parentClick.querySelector("h3").innerText;
  }

  if (targetClick.classList.contains("finish-todo")) {
    //console.log("Terminou a tarefa");
    parentClick.classList.toggle("done")
  }

  if (targetClick.classList.contains("edit-todo")) {
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue.value = todoTitle;
  }

  if (targetClick.classList.contains("delete-todo")) {
    parentClick.remove();
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

