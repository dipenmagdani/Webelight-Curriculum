const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");

let count = 0;

const incrementCounter = () => {
  count++;
  counter.textContent = count;
};

const decrementCounter = () => {
  if (counter.textContent > 0) {
    count--;
    counter.textContent = count;
  }
};
