var tasks = [];

function addTask() {
  var task = document.getElementById("task").value;
  tasks.push(task);
  var li = document.createElement("li");
  li.textContent = task;
  document.getElementById("tasks").appendChild(li);
}

function graph() {
  var graph = document.getElementById("graph");
  graph.style.display = "block";
  var quadrants = [
    "important, urgent",
    "important, not urgent",
    "not important, urgent",
    "not important, not urgent"
  ];
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var quadrant = getQuadrant(task);
    var li = document.createElement("li");
    li.textContent = task;
    li.classList.add(quadrant);
    document.getElementById(quadrant).appendChild(li);
  }
}

function getQuadrant(task) {
  var importance = task.toLowerCase().indexOf("important") >= 0;
  var urgency = task.toLowerCase().indexOf("urgent") >= 0;
  if (importance && urgency) {
    return "important, urgent";
  } else if (importance) {
    return "important, not urgent";
  } else if (urgency) {
    return "not important, urgent";
  } else {
    return "not important, not urgent";
  }
}

window.onload = function() {
  document.getElementById("add-task").addEventListener("click", addTask);
  document.getElementById("graph").addEventListener("click", graph);
};