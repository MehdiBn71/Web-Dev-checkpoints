document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addBtn = document.getElementById("add-btn");
  const taskList = document.getElementById("task-list");

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="${task.done ? 'done' : ''}">${task.text}</span>
        <div>
          <button onclick="toggleTask(${index})">✔</button>
          <button onclick="deleteTask(${index})">❌</button>
        </div>
      `;
      taskList.appendChild(li);
    });
  }

  addBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === "") return;
    tasks.push({ text: taskInput.value, done: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  });

  window.toggleTask = function(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
  };

  window.deleteTask = function(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  };

  renderTasks();
});
