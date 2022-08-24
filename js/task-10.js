function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxCollectionEl = document.querySelector("#boxes");

const boxes = [];

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");

    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  boxCollectionEl.append(...boxes);
}

function destroyBoxes() {
  boxCollectionEl.remove();
  inputEl.value = "";
  // boxCollectionEl.splice(0, boxCollectionEl.length);
  // boxes.innerHTML = "";
}
