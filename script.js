const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = taskInput.value;
  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
});