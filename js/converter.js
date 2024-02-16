const dropList = document.querySelectorAll(".drop__list select");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const converBtn = document.querySelector(".exchange__btn");
const apiKey = "7db54c23ec3be414356c4e98";
const changes = document.getElementById("change__btn");

// цикл для перебора кодов стран в объекте country code и добавление их в DOM дерево
// всего 2 итерации во внешнем цикле. Первая итерация - заполняет правый тег select, вторая - левый.
// внутренний цикл работает по следующему принципу: на первой итерации, он выставляет изначальное значение USD, на второй GEL (условный оператор), далее проходит по всем значениям из Countre-code и вносит их в тег select

for (let i = 0; i < dropList.length; i++) {
  //   console.log(dropList);
  for (currency_code in country_code) {
    let selected;
    if (i == 0) {
      selected = currency_code == "USD" ? "selected" : "";
    } else if (i == 1) selected = currency_code == "GEL" ? "selected" : "";

    let optionCode = `<option value="${currency_code}" ${selected}> ${currency_code}</option>`;
    // console.log(optionCode);
    // добавление элементов в select
    dropList[i].insertAdjacentHTML("beforeend", optionCode);
  }

  // загрузка флагов, при смене страны
  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target);
  });
}

function loadFlag(element) {
  for (code in country_code) {
    if (code == element.value) {
      let imgCode = element.parentElement.querySelector("img");

      imgCode.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`;
      // console.log(country_code[code]);
    }
  }
}

// событие при КЛИКЕ кнопки
converBtn.addEventListener("click", (e) => {
  // сброс настроек по умолчанию, чтобы форма не обновлялась сразу при нажатии
  e.preventDefault();
  getExchangeRate();
});

changes.addEventListener("click", () => {
  let curcode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = curcode;
  getExchangeRate();
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
});

// при ЗАГРУЗКЕ окна получает данные из функции и выдает текущий курс
window.addEventListener("load", (e) => {
  getExchangeRate();
});

// получает данные из инпута, получает данные из api через fetch далее получаем общее значене
// нижняя строчка состояния курса
function getExchangeRate() {
  const amount = document.getElementById("amount__input");
  const rateTxt = document.querySelector(".exchange__rate");

  let amountValue = amount.value;
  if (amountValue == "" || amountValue == 0) {
    amount.value = "1"; // поменять на ноль в последствии
    amountValue = 1;
  }

  // функция fetch получает данные из ссылки, далее присылает их в виде Promise
  // fromCurrency.value === USD - значение, которое мы установили в самом начале
  let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;

  rateTxt.innerText = `Getting rate...`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      // строка ниже возращает коэфициент конвертации (то есть USD к GEL вернется 2.6)
      // как работает данная строка, в Result есть значние conversion_rates, в котором заложены даные коэффициенты, мы берем значение и указывает то значение, которое указано в поле select
      let exchangeRate = result.conversion_rates[toCurrency.value];
      let totalExchange = (exchangeRate * amountValue).toFixed(2);
      rateTxt.innerText = `${amountValue} ${fromCurrency.value} = ${totalExchange} ${toCurrency.value}`;
    })
    .catch(() => {
      rateTxt.innerText = "Something went wrong. Try later.";
    });
}
