const loadTemparatureData = () => {
    const key = "a1d9c445802e1d4ceb6f9b29e5cb97cd";
    const inputValue = document.getElementById('input-value');
    const weatherStatus = document.getElementById('weather-status');

    if (inputValue == 0) {
        console.log('input city name')
    } else {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}`)
            .then(res => res.json())
            .then(data => displayTemparature(data));
    }
    inputValue.value = '';
    weatherStatus.innerHTML = '';

    
}
const displayTemparature = (data) => {
    console.log(data);
    // Getting Id
    const weatherStatus = document.getElementById('weather-status');
    const weatherInfo = document.createElement('div');

    // Getting Time
    const sunriseCode = data.sys.sunrise;
    const sunriseTime = new Date(sunriseCode * 1000)
    const sunsetCode = data.sys.sunset;
    const sunsetTime = new Date(sunsetCode * 1000)


    // Geting Weather Info
    weatherInfo.innerHTML = `
           
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="smart weather info icon">
    <h1 id="city-name">${data.name}</h1>
    <h3><span id="celcius-number">${((data.main.temp) - 273.15).toFixed(2)}</span>&deg;C</h3>
    <h1 class="lead">Sunrise : ${sunriseTime}</h1>
    <h1 class="lead">Sunset : ${sunsetTime}</h1>
    
    `;

    // Appening child
    weatherStatus.appendChild(weatherInfo);

 


}
