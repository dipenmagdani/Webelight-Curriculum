const input = document.querySelector("#taskInput");
const mainList = document.querySelector(".list");
const todoDiv = document.querySelector(".todo-list");
const addTask = () => {
  const newLi = document.createElement("li");
  newLi.classList.add("task");

  const newSpan = document.createElement("span");
  newSpan.textContent = input.value;

  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-regular", "fa-circle");

  const newDiv = document.createElement("div");
  newDiv.classList.add("manipulate");

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");

  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid", "fa-pen-to-square");

  newLi.appendChild(checkIcon);
  newLi.appendChild(newSpan);
  newDiv.appendChild(editIcon);
  newDiv.appendChild(deleteIcon);

  newLi.appendChild(newDiv);

  mainList.appendChild(newLi);

  todoDiv.appendChild(mainList);
  input.value = "";

  deleteIcon.addEventListener("click", () => {
    mainList.removeChild(newLi);
  });

  checkIcon.addEventListener("click", () => {
    newSpan.style.textDecoration = "line-through";
    checkIcon.classList.remove("fa-regular", "fa-regular");
    checkIcon.classList.add("fa-solid", "fa-check");
  });

  editIcon.addEventListener("click", () => {
    const data = prompt("Enter New Task");
    newSpan.textContent = data;
  });
};
