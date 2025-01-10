const input = document.querySelector("#taskInput");
const todoDiv = document.querySelector(".todo-list");
const mainList = document.querySelector(".list");
const emptyList = document.querySelector(".empty-list");

let marked = false;
const addTask = () => {
  if (mainList.children[1]) {
    emptyList.style.display = "static";
  } else {
    emptyList.style.display = "none";
  }

  console.log(mainList.children);
  if (input.value === "") return alert("Input Cannot Be Empty!");
  const newLi = document.createElement("li");
  newLi.classList.add("task");

  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-regular", "fa-circle");
  checkIcon.style.cursor = "pointer";

  const spanDiv = document.createElement("div");
  spanDiv.classList.add("text");
  const newSpan = document.createElement("span");
  newSpan.textContent = input.value;

  spanDiv.appendChild(newSpan);

  const taskInfoDiv = document.createElement("div");
  taskInfoDiv.classList.add("task-info");
  taskInfoDiv.appendChild(checkIcon);
  taskInfoDiv.appendChild(spanDiv);

  const newDiv = document.createElement("div");
  newDiv.classList.add("manipulate");

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");

  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid", "fa-pen-to-square");

  newLi.appendChild(taskInfoDiv);
  newDiv.appendChild(editIcon);
  newDiv.appendChild(deleteIcon);

  newLi.appendChild(newDiv);

  mainList.appendChild(newLi);

  todoDiv.appendChild(mainList);

  const todoItems = [
    {
      id: Date.now(),
      taskData: input.value,
      checkedItem: false,
    },
  ];

  const storedInputs = JSON.parse(localStorage.getItem("todoTask")) || [];

  localStorage.setItem(
    "todoTask",
    JSON.stringify([...storedInputs, todoItems])
  );
  input.value = "";

  deleteIcon.addEventListener("click", () => {
    mainList.removeChild(newLi);
  });

  checkIcon.addEventListener("click", () => {
    marked = true;
    const markIcon = document.createElement("i");
    markIcon.classList.add("fa-solid", "fa-check");
    markIcon.style.cursor = "pointer";
    markIcon.style.color = "rgba(255, 255, 255, 0.2)";

    newSpan.style.textDecoration = "line-through";
    checkIcon.replaceWith(markIcon);

    markIcon.addEventListener("click", () => {
      marked = false;
      newSpan.style.textDecoration = "none";
      markIcon.replaceWith(checkIcon);
    });
  });

  editIcon.addEventListener("click", () => {
    if (marked) {
      alert("Cannot Edit Checked Task!");
      return;
    }
    const data = prompt("Enter New Task");
    newSpan.textContent = data;
  });
};
