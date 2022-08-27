const todoNode = document.querySelector(".js-todos"),
  inputNode = document.querySelector("#todo"),
  btnNode = document.querySelector(".js-btn");

let todos = [];

function addTodo(text) {
  const todo = {
    text,
    done: false,
    id: `${Math.random()}`,
  };

  todos.push(todo);
}

function deliteTodo(id) {
  todos.forEach((todo) => {
    if (todo.id === id) {
      todo.done = true;
    }
  });
}

function render() {
  let html = "";

  todos.forEach((todo) => {
    if (todo.done === true) {
      return;
    } else {
      html += `
      <li>${todo.text} <button data-id='${todo.id}'>done</button> </li>
      
      `;
    }

    todoNode.innerHTML = html;
  });
}

function record() {
  const text = inputNode.value;

  addTodo(text);
  inputNode.value = "";

  render();
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    record();
  }
});

btnNode.addEventListener("click", () => {
  if (inputNode.value !== "") {
    record();
    inputNode.style.borderColor = "";
  } else {
    inputNode.style.borderColor = "red";
  }
});

todoNode.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    return;
  } else {
    const id = e.target.dataset.id;
    deliteTodo(id);
    render();
  }
});
