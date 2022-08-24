const categEl = document.querySelectorAll(".item");
console.log("Number of categories:", categEl.length);

categEl.forEach((elem) => {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
