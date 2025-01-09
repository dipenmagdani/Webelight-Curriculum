const percentage = document.getElementById("percentage");
const userInput = document.querySelector(".userInput");
const result = document.querySelector(".result");
const mainData = document.querySelector(".main-data");
let userData = "";

const getValue = (value) => {
  const data = (userInput.innerHTML += value);
  userData = data;
};
const calculate = () => {
  if (userInput.innerHTML === "" || !/[+\-*/%]/.test(userData)) {
    result.innerHTML = 0;
  } else {
    result.innerHTML = eval(userInput.innerHTML);
    result.innerHTML = result.innerHTML.substring(0, 5);
    // result.innerHTML = c;
    const resultData = document.createElement("span");
    userData = userData + "=" + result.innerHTML.substring(0, 5);
    resultData.innerHTML += userData;
    mainData.appendChild(resultData);
    mainData.appendChild(document.createElement("br"));
    userInput.innerHTML = "";
  }
};

const clearData = () => {
  userInput.innerHTML = "";
  result.innerHTML = "";
};
