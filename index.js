function searchForCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;
}

let form = document.querySelector("form");
form.addEventListener("submit", searchForCity);



function getTemperature(response) {
  let currentTemperature = response.data.temperature.current;
  console.log(currentTemperature)
}

let city = "Mombasa";
let apiKey = "568925f93ofcc31043b0b8154ebt149a";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(getTemperature);
