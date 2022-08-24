const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  const inp = event.currentTarget;
  const inpLength = Number(inp.dataset.length);

  if (inpLength === inp.value.length) {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  } else {
    inp.classList.remove("valid");
    inp.classList.add("invalid");
  }
}
