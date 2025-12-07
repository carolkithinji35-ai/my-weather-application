function getTemperature(response) {
  
  let temperatureElement = document.querySelector("#temperature-element");
  let Temperature = Math.round(response.data.temperature.current);
  let city = document.querySelector("#city");
  city = response.data.city;
  temperatureElement.innerHTML = Temperature;
}

function searchForCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;

  let city = cityInput.value;
  let apiKey = "568925f93ofcc31043b0b8154ebt149a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(getTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchForCity);

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let today = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[today];

  return `${day} ${hours}:${minutes}`;
}

let currentDayTime = document.querySelector("#current-day-time");
let currentDate = new Date();

currentDayTime.innerHTML = formatDate(currentDate);
