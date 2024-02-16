const apiKeyWeather = "fc7b5363b963f7f57a4f282294d897f0";
const apiUrlWeather =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector(".city");
const cityTemp = document.querySelector(".temp");
const cityHumidity = document.querySelector(".hum__text");
const cityWind = document.querySelector(".wind__text");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather__icon");

const errorBox = document.querySelector(".error-box");
const errorTxt = document.querySelector(".error-box .error-text");

// по умолчанию открывается погода в тбилиси
window.onload = function () {
  checkWeather("Tbilisi");
};

// асинхронная функцая, которая по fetch запросу получается информацию из API и присылает объект, с необходимой информацией о погоде, нам остается только загнать инфу в необходимые поля в html документе
async function checkWeather(city) {
  //   const response = await fetch(
  //     apiUrlWeather + city + `&appid=${apiKeyWeather}`
  //   );
  //   let data = await response.json();

  await fetch(apiUrlWeather + city + `&appid=${apiKeyWeather}`)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);

      cityName.innerHTML = data.name;
      cityTemp.innerHTML = Math.round(data.main.temp) + "°C";
      cityHumidity.innerHTML = data.main.humidity + "%";
      cityWind.innerHTML = Math.round(data.wind.speed) + "km/h";

      if (data.weather[0].main == "Clouds") {
        weatherImg.src = "img/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherImg.src = "img/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherImg.src = "img/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherImg.src = "img/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherImg.src = "img/rain.png";
      }
    })
    .catch(() => {
      errorTxt.innerText = "Invalid country name";
    });
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
