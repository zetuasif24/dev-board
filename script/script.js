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

    disabledButtonById("task1-btn");
    alert("Board Update Successfully");

    const taskName = document.getElementById("task-title1").innerText;

    const time = getCurrentTime();

    document
      .getElementById("message1")
      .classList.add("p-4", "bg-[#F4F7FF]", "rounded-2xl");
    document.getElementById("message1").innerHTML =
      `You have completed the task <span class="font-semibold">${taskName}</span> at ${time}`;
  });

document
  .getElementById("task2-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();

    disabledButtonById("task2-btn");
    alert("Board Updated Successfully");

    const taskName2 = document.getElementById("task-title2").innerText;

    const time = getCurrentTime();

    document
      .getElementById("message2")
      .classList.add("p-4", "bg-[#F4F7FF]", "rounded-2xl");
    document.getElementById("message2").innerHTML = `
    You have completed the task <span class="font-semibold">${taskName2}</span> at ${time}
    `;
  });

document
  .getElementById("task3-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();

    disabledButtonById("task3-btn");
    alert("Board Updated Successfully");

    const taskName3 = document.getElementById("task-title3").innerText;

    const time = getCurrentTime();

    document
      .getElementById("message3")
      .classList.add("p-4", "bg-[#F4F7FF]", "rounded-2xl");
    document.getElementById("message3").innerHTML = `
    You have completed the task <span class = "font-semibold">${taskName3}</span> at ${time}
    `;
  });

document
  .getElementById("task4-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();

    disabledButtonById("task4-btn");
    alert("Board Updated Successfully");

    const taskName4 = document.getElementById("task-title4").innerText;
    const time = getCurrentTime();

    document
      .getElementById("message4")
      .classList.add("p-4", "bg-[#F4F7FF]", "rounded-2xl");
    document.getElementById("message4").innerHTML = `
    You have completed the task <span class = "font-semibold">${taskName4}</span> at ${time}
    `;
  });

document
  .getElementById("task5-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();

    disabledButtonById("task5-btn");
    alert("Board Updated Successfully");

    const taskName5 = document.getElementById("task-title5").innerText;
    const time = getCurrentTime();

    document
      .getElementById("message5")
      .classList.add("p-4", "bg-[#F4F7FF]", "rounded-2xl");
    document.getElementById("message5").innerHTML = `
    You have completed the task <span class = "font-semibold">${taskName5}</span> at ${time}
    `;
  });

document
  .getElementById("task6-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    updateAssignedStatus();
    updateCompletedStatus();

    disabledButtonById("task6-btn");
    alert("Board Updated Successfully");

    const taskName6 = document.getElementById("task-title6").innerText;
    const time = getCurrentTime();

    document
      .getElementById("message6")
      .classList.add("p-4", "bg-[#F4F7FF]", "rounded-2xl");
    document.getElementById("message6").innerHTML = `
    You have completed the task <span class = "font-semibold">${taskName6}</span> at ${time}
    `;
  });

const taskData = document.getElementById("assigned-task").innerText;
const converted = parseInt(taskData);
if (converted === 0) {
  alert("Congratulations! You have completed all the current tasks");
}
