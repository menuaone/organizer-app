const btn = document.querySelector(".todoselect");
const btn2 = document.querySelector(".calcselect");
const btn3 = document.querySelector(".converselect");
const calculator = document.querySelector(".calculator");
const todoapp = document.querySelector(".todo");
const converter = document.querySelector(".converter");

// todo on
btn.addEventListener("click", () => {
  //   todoapp.style.display = todoapp.style.display === "block" ? "none" : "block";
  todoapp.style.display = "block";
  calculator.style.display = "none";
  converter.style.display = "none";
});

// calculator on
btn2.addEventListener("click", () => {
  calculator.style.display = "block";
  todoapp.style.display = "none";
  converter.style.display = "none";
});

// converter on
btn3.addEventListener("click", () => {
  converter.style.display = "block";
  calculator.style.display = "none";
  todoapp.style.display = "none";
});
