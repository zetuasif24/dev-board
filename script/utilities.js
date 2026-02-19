function getCurrentTime() {
  const now = new Date();

  return now.toLocaleTimeString("en-BD", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  });
}


function disabledButtonById(id) {
  document.getElementById(id).classList.add("btn-disabled");
}

function updateAssignedStatus() {
  const assignedTask = document.getElementById("assigned-task");

  const convertedAssignedTask = parseInt(assignedTask.innerText);

  const updateAssignedTask = (assignedTask.innerText =
    convertedAssignedTask - 1);

  return updateAssignedTask;
}

function updateCompletedStatus() {
  const completedTask = document.getElementById("completed-task");

  const convertedCompletedTask = parseInt(completedTask.innerText);

  const updateCompletedTask = (completedTask.innerText =
    convertedCompletedTask + 1);

  return updateCompletedTask;
}

function checkAllTasksCompleted() {
  const assigned = parseInt(
    document.getElementById("assigned-task").innerText
  );

  if (assigned === 0) {
    alert("Congratulations! You have completed all the current tasks");
  }
}

