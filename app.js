var tasks = [];

$(document).ready(function() {
  var taskList = $("#task-list");
  var taskInput = $("#task-input");
  var addTaskButton = $("#add-task-button");
  var graphButton = $("#graph-button");

  addTaskButton.click(function() {
    var task = taskInput.val();
    taskInput.val("");
    var li = $("<li></li>");
    li.text(task);
    li.append($("<input type='checkbox'>"));
    taskList.append(li);

    var importance = parseInt(Math.random() * 10);
    var urgency = parseInt(Math.random() * 10);
    li.data("importance", importance);
    li.data("urgency", urgency);
  });

  taskList.on("click", "input[type='checkbox']", function() {
    $(this).closest("li").remove();
  });

  graphButton.click(function() {
    var graph = new Chart("graph", {
      type: "bar",
      data: {
        labels: ["High Importance, High Urgency", "High Importance, Low Urgency", "Low Importance, High Urgency", "Low Importance, Low Urgency"],
        datasets: [
          {
            label: "Tasks",
            data: tasks.map(function(task) {
              return task.importance * task.urgency;
            }),
            backgroundColor: [
              "red",
              "orange",
              "yellow",
              "green",
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });
});

function handleDrag(event) {
  var li = $(event.target).closest("li");
  var importance = parseInt(li.data("importance"));
  var urgency = parseInt(li.data("urgency"));

  var quadrant = getQuadrant(importance, urgency);
  li.css("left", quadrant * 100 + "%");
}

function getQuadrant(importance, urgency) {
  if (importance > 5 && urgency > 5) {
    return 0;
  } else if (importance > 5 && urgency < 5) {
    return 1;
  } else if (importance < 5 && urgency > 5) {
    return 2;
  } else {
    return 3;
  }
}

$(document).on("dragstart", "li", handleDrag);