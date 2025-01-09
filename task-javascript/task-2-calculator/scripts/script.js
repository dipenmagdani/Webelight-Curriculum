const percentage = document.getElementById("percentage");
const userInput = document.querySelector(".userInput");
const result = document.querySelector(".result");

const getValue = (value) => {
  const data = (userInput.innerHTML += value);
  localStorage.setItem("percentage", data);
};

const calculate = () => {
  // switch(userInput.innerHTML) {
  //     case '%':

  // }
  if (userInput.innerHTML === "") {
    result.innerHTML = 0;
  } else {
    result.innerHTML = eval(userInput.innerHTML);
    userInput.innerHTML = "";
  }
};

const clearData = () => {
  userInput.innerHTML = "";
  result.innerHTML = "";
};
