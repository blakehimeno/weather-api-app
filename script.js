document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '14b2023adcec87b92eedc96de9486fe9'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = 'Error: ' + error.message;
        });
});