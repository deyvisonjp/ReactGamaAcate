// Variáveis Globais
const todoForm = document.querySelector("#todo-form");
const todoNovaTarefa = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelForm = document.querySelector("#cancel-edit-btn");

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

// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputTarefa = todoNovaTarefa.value;
  
  if (inputTarefa) {
    saveTodo(inputTarefa);
  }

});

