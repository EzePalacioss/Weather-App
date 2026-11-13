/*Es el único archivo que toca el HTML (document.getElementById). 
Tiene funciones puntuales para manipular la pantalla: */

//! Contenedores de estado
const loading = document.getElementById('loading');
const errorBox = document.getElementById('error-box');
const weatherCard = document.getElementById('weather-card');

//! Elementos internos de error y clima
const errorText = document.getElementById('error-text');
const cityName = document.getElementById('city-name');
const weatherDesc = document.getElementById('weather-desc');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

export function mostrarCargando(){
    loading.classList.remove('hidden')
    errorBox.classList.add('hidden')
    weatherCard.classList.add('hidden')
}


export function mostrarError(mensaje){
loading.classList.add('hidden');
weatherCard.classList.add('hidden');
errorText.textContent = mensaje; // inserta el texto del error
errorBox.classList.remove('hidden')
}

export function mostrarClima(datos){
    loading.classList.add('hidden');
    errorBox.classList.add('hidden');
    cityName.textContent = `${datos.name}, ${datos.sys.country}`
    weatherDesc.textContent = `${datos.weather[0].description}`
    weatherIcon.src = `https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`;
    temperature.textContent = `${Math.round(datos.main.temp)}°C`
    feelsLike.textContent = `${Math.round(datos.main.feels_like)}°C`
    humidity.textContent = `${datos.main.humidity}%`
    windSpeed.textContent = `${Math.round(datos.wind.speed * 3.6)} km/h`;
    weatherCard.classList.remove('hidden')
}