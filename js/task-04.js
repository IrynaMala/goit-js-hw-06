let counterValue = 0;

const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", handleDecrementButton);
incrementBtn.addEventListener("click", handleIncrementButton);

function handleDecrementButton() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function handleIncrementButton() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
