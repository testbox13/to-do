var tasks = [
  {
    id: 1,
    title: "Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    completed: false,
  },
];

function toggleTask(taskId) {
  var task = tasks[taskId - 1];
  task.completed = !task.completed;
}

function addTask() {
  var newTask = prompt("Enter a new task:");
  tasks.push({
    id: tasks.length + 1,
    title: newTask,
    completed: false,
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var taskList = document.querySelector("ul");
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var li = document.createElement("li");
    li.textContent = task.title;
    if (task.completed) {
      li.classList.add("completed");
    }
    taskList.appendChild(li);
  }

  var toggleButton = document.querySelector(".toggle-button");
  toggleButton.addEventListener("click", function() {
    var taskId = parseInt(toggleButton.dataset.taskId);
    toggleTask(taskId);
  });

  var addButton = document.querySelector(".add-button");
  addButton.addEventListener("click", function() {
    addTask();
  });
});