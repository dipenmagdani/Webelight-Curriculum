const input = document.querySelector("#taskInput");
const todoDiv = document.querySelector(".todo-list");
const mainList = document.querySelector(".list");
const emptyList = document.querySelector(".empty-list");
const idList = document.getElementById("id");

const addTask = () => {
  let itemID = Date.now();

  const storedInputs = JSON.parse(localStorage.getItem("todoTask")) || [];
  // if (storedInputs.length > 0) {
  //   emptyList.style.display = "none";
  // } else {
  //   emptyList.style.display = "flex";
  // }
  if (input.value === "") return alert("Input Cannot Be Empty!");
  const newLi = document.createElement("li");
  newLi.id = `${itemID}`;
  newLi.classList.add("task");

  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-regular", "fa-circle");
  checkIcon.style.cursor = "pointer";

  const spanDiv = document.createElement("div");
  spanDiv.classList.add("text");
  const newSpan = document.createElement("span");
  newSpan.textContent = input.value;
  newSpan.setAttribute("data-marked", "false");
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

  const todoItems = {
    id: itemID,
    taskData: input.value,
    checkedItem: false,
  };
  localStorage.setItem(
    "todoTask",
    JSON.stringify([...storedInputs, todoItems])
  );
  input.value = "";

  deleteTask(newLi, deleteIcon, mainList, emptyList);
  checkItem(checkIcon, newSpan, newLi);
  editTask(editIcon, newSpan, newLi);
};

const deleteTask = (newLi, deleteIcon, mainList, emptyList) => {
  deleteIcon.addEventListener("click", () => {
    mainList.removeChild(newLi);
    const storedInputs = JSON.parse(localStorage.getItem("todoTask"));
    const updatedInputs = storedInputs.filter(
      (item) => item.id !== Number(newLi.id)
    );
    localStorage.setItem("todoTask", JSON.stringify(updatedInputs));
    if (mainList.children.length === 0) {
      emptyList.style.display = "block";
      return;
    }
  });
};

const checkItem = (checkIcon, newSpan, newLi) => {
  checkIcon.addEventListener("click", () => {
    const answer = prompt('Type "yes" to mark the task as completed');
    if (answer === "yes") {
      const markedItem = newSpan.getAttribute("data-marked");
      if (markedItem === "true") return;
      newSpan.style.textDecoration = "line-through";
      newSpan.setAttribute("data-marked", `true`);

      const markIcon = document.createElement("i");
      markIcon.classList.add("fa-solid", "fa-check");
      markIcon.style.cursor = "pointer";
      markIcon.style.color = "rgba(255, 255, 255, 0.2)";

      checkIcon.replaceWith(markIcon);

      const storedInputs = JSON.parse(localStorage.getItem("todoTask"));
      const updatedTask = storedInputs.map((task) =>
        task.id === Number(newLi.id) ? { ...task, checkedItem: true } : task
      );

      localStorage.setItem("todoTask", JSON.stringify(updatedTask));
    } else {
      return;
    }
  });
};
const editTask = (editIcon, newSpan, newLi) => {
  editIcon.addEventListener("click", () => {
    const markedItem = newSpan.getAttribute("data-marked");
    const storedInputs = JSON.parse(localStorage.getItem("todoTask"));

    if (markedItem === "true") {
      alert("Cannot Edit Checked Task!");
      return;
    }
    const oldData = newSpan.innerHTML;
    const data = prompt("Enter New Task", oldData);
    if (data === null) {
      newSpan.textContent = oldData;
    } else {
      newSpan.textContent = data;
      const updatedTask = storedInputs.map((task) =>
        task.id === Number(newLi.id) ? { ...task, taskData: data } : task
      );
      localStorage.setItem("todoTask", JSON.stringify(updatedTask));
    }
  });
};
const loadTask = () => {
  const storedInputs = JSON.parse(localStorage.getItem("todoTask")) || [];

  if (storedInputs.length > 0) {
    emptyList.style.display = "none";
  } else {
    emptyList.style.display = "flex";
  }

  storedInputs.forEach((task) => {
    const newLi = document.createElement("li");
    newLi.id = `${task.id}`;
    newLi.classList.add("task");

    const checkIcon = document.createElement("i");
    checkIcon.classList.add(task.checkedItem ? "fa-check" : "fa-circle");
    checkIcon.classList.add(task.checkedItem ? "fa-solid" : "fa-regular");
    checkIcon.style.cursor = "pointer";
    if (task.checkedItem) {
      checkIcon.style.color = "rgba(255, 255, 255, 0.2)";
    }
    const spanDiv = document.createElement("div");
    spanDiv.classList.add("text");
    const newSpan = document.createElement("span");
    newSpan.textContent = task.taskData;
    newSpan.setAttribute("data-marked", `${task.checkedItem}`);
    if (task.checkedItem) {
      newSpan.style.textDecoration = "line-through";
    }
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

    // Reattach event listeners
    deleteTask(newLi, deleteIcon, mainList, emptyList);
    checkItem(checkIcon, newSpan, newLi);
    editTask(editIcon, newSpan, newLi);
  });
};

window.addEventListener("load", loadTask);
