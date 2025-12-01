function getTemperature(response) {
  console.log(response.data);
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
