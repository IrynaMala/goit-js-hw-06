// // const boxEl = document.querySelector(".widget");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", onChangeColor);

// const color = getRandomHexColor();

function onChangeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textEl.textContent = color;
}

// console.log(getRandomHexColor);
// console.log(textEl.textContent = "getRandomHexColor");
