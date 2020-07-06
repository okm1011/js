const API_KEY = "58e568cc0e55f092243fb12b15c5b9d8";

const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  );
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSucces(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("cant acess to geolocation!");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoord() {
  const loadedCoord = localStorage.getItem(COORDS);
  if (loadedCoord === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoord);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoord();
}
init();
