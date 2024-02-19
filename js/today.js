let hours = document.querySelector(".hours");
let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let weekday = document.querySelector(".weekday");

// благодаря функции setInterval часы обновляются каждую 1 (1000мс)
setInterval(() => {
  let currentTime = new Date();

  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

let currentDate = new Date();

day.innerHTML = currentDate.getDate();
// выведения полного названия месяца
month.innerHTML = currentDate.toLocaleString("eng", { month: "long" }) + ",";
weekday.innerHTML = currentDate.toLocaleString("eng", { weekday: "short" });

console.log(currentDate);
