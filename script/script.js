// date
document.getElementById("today").textContent = new Date().toLocaleDateString(
  "en-BD",
  {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  },
);

// Reset History
document
  .getElementById("clear-all")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("history").innerHTML = "";
  });

//Random Theme
document.getElementById("theme-btn").addEventListener("click", function () {
  const body = document.getElementById("body");

  const r = Math.floor(Math.random() * 76) + 180;
  const g = Math.floor(Math.random() * 76) + 180;
  const b = Math.floor(Math.random() * 76) + 180;

  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

document
  .getElementById("task1-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();
    alert("Board Update Successfully");
    checkAllTasksCompleted();

    disabledButtonById("task1-btn");

    const taskName1 = document.getElementById("task-title1").innerText;

    const time = getCurrentTime();

    addToHistory(taskName1, time);
  });

document
  .getElementById("task2-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();
    alert("Board Updated Successfully");
    checkAllTasksCompleted();

    disabledButtonById("task2-btn");

    const taskName2 = document.getElementById("task-title2").innerText;

    const time = getCurrentTime();

    addToHistory(taskName2, time);
  });

document
  .getElementById("task3-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();
    alert("Board Updated Successfully");
    checkAllTasksCompleted();

    disabledButtonById("task3-btn");

    const taskName3 = document.getElementById("task-title3").innerText;

    const time = getCurrentTime();

    addToHistory(taskName3, time);
  });

document
  .getElementById("task4-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();
    alert("Board Updated Successfully");
    checkAllTasksCompleted();

    disabledButtonById("task4-btn");

    const taskName4 = document.getElementById("task-title4").innerText;
    const time = getCurrentTime();

    addToHistory(taskName4, time);
  });

document
  .getElementById("task5-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();
    alert("Board Updated Successfully");
    checkAllTasksCompleted();

    disabledButtonById("task5-btn");

    const taskName5 = document.getElementById("task-title5").innerText;
    const time = getCurrentTime();

    addToHistory(taskName5, time);
  });

document
  .getElementById("task6-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();
    alert("Board Updated Successfully");
    checkAllTasksCompleted();

    disabledButtonById("task6-btn");

    const taskName6 = document.getElementById("task-title6").innerText;
    const time = getCurrentTime();

    addToHistory(taskName6, time);
  });
