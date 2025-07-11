const text = document.querySelector(".text");
const list = document.querySelector(".list");
const button = document.querySelector(".button");

function newTask() {
  if (text.value === "") {
    return;
  }
  const task = document.createElement("li");
  task.innerHTML = `
        <input type="checkbox" class="block"
        <label>${text.value}</lable>
        <button class="bin">🗑️</button>
  `;

  const bin = task.querySelector(".bin");
  const block = task.querySelector(".block");

  bin.addEventListener("click", function () {
    task.remove();
  });

  block.addEventListener("change", function () {
    if (block.checked) {
      task.style.textDecoration = "line-through";
      task.style.color = "#999";
      list.append(task);
    } else {
      task.style.textDecoration = "none";
      task.style.color = "";
      list.prepend(task);
    }
  });

  list.append(task);
  text.value = "";
}

button.addEventListener("click", newTask);

text.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    newTask();
  }
});
