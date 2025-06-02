"use strict";
const docLoaded = () => {
  let todos = [];
  let todo_list = document.getElementById("todo_list");
  const add_todo_btn = document.getElementById("add_todo_btn");
  let todo_input_element = document.getElementById("todo_input");

  add_todo_btn.addEventListener("click", (e) => {
    e.preventDefault();
    const todo_input = todo_input_element.value;
    if (todo_input.trim() === "") {
      alert("Enter Something In Input Box....!");
    } else {
      let todoObj = {
        id: Date.now(),
        task: todo_input,
        isCompleted: false,
      };
      todos.push(todoObj);
      todo_input_element.value = "";
      renderTask();
    }
  });

  const renderTask = () => {
    todo_list.innerHTML = "";

    const sortedTodos = [...todos].sort((a, b) => b.id - a.id);
    if (sortedTodos.length === 0) {
      todo_list.innerHTML = "Add Your Task";
      return;
    }

    sortedTodos.forEach((taskObj) => {
      const li = document.createElement("li");
      li.className = "task-item";

      const span = document.createElement("span");
      span.className = "li-span";
      span.textContent = taskObj.task;

      if (taskObj.isCompleted) {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
      }

      
      span.addEventListener("click", () => {
        taskObj.isCompleted = !taskObj.isCompleted;
        renderTask(); 
      });

      li.appendChild(span);
      todo_list.appendChild(li);
    });
  };
};

docLoaded();
