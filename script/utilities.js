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

function addToHistory(taskName, time) {
  const history = document.getElementById("history");

  const logItem = document.createElement("div");

  logItem.className = "p-4 bg-[#F4F7FF] rounded-2xl";

  logItem.innerHTML = `
    <p>
      You have completed the task 
      <span class="font-semibold">${taskName}</span> 
      at ${time}
    </p>
  `;

  history.prepend(logItem);
}

function checkAllTasksCompleted() {
  const assigned = parseInt(document.getElementById("assigned-task").innerText);

  if (assigned === 0) {
    alert("Congratulations! You have completed all the current tasks");
  }
}
