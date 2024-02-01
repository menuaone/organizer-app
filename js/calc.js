const calc = document.querySelector(".calculator");
const res = document.getElementById("result");

calc.addEventListener("click", (event) => {
  // делегирование событий с помощью таргет

  // если родительский элемент не содержит calc__button вернуться
  if (!event.target.classList.contains("calc__button")) return;

  // с помощью innerText берем все значения кнопок
  // console.log(event.target.innerText);

  // записать значения кнопок, которые я нажимаю в переменную value, теперь value это переменная в дисплее

  const value = event.target.innerText;

  switch (value) {
    case "C":
      result.innerText = "0";
      break;

    case "=":
      // функция eval cчитает и производит математические действия
      result.innerText = eval(result.innerText);
      break;

    case "←":
      // проверка на уделение первого нуля
      if (result.innerText != "0")
        // удаление последнего элемента в случае ошибки
        // метод slice берет строку с превого элемента до последнего (не включительно) и возвращает новую строку без последнего элемента
        result.innerText = result.innerText.slice(0, -1);
      break;

    case "%":
      result.innerText = result.innerText * 0.01;
      break;

    default:
      // проверка на ноль, если калькулятор открыт и значение 0 - сбросить его
      if (result.innerText == "0") result.innerText = "";

      // переменной result записывать все вводимые значения значения
      result.innerText += value;
  }
});
