const btn = document.querySelector(".todoselect");
const btn2 = document.querySelector(".calcselect");
const calculator = document.querySelector(".calculator");
const todoapp = document.querySelector(".todo");

btn.addEventListener("click", () => {
  //   todoapp.style.display = todoapp.style.display === "block" ? "none" : "block";
  todoapp.style.display = "block";
  calculator.style.display = "none";
});

btn2.addEventListener("click", () => {
  calculator.style.display = "block";
  todoapp.style.display = "none";
});
