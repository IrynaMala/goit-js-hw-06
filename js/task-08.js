const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  // const FormData = new FormData(event.currentTarget);
  // FormData.forEach((value, name) => {
  //   console.log("handleSubmit -> name", name);
  //   console.log("handleSubmit -> value", value);
  // });

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  formEl.reset();
}

// function handleSubmit(event) {
//   event.preventDefault();
//   const FormData = new FormData(event.currentTarget);

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }

//   FormData.forEach((value, name) => {
//     console.log('handleSubmit -> name', name);
//   })
