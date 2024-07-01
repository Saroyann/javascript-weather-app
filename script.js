const apiKey = 'ba552efbe4a226aadcc20b0fa29f7878';
const apiBaseURL = 'https://api.openweathermap.org/data/2.5/weather';

const weatherIcon = document.querySelector('.weather-icon');

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const checkWeather = async (city) => {
    const apiURL = `${apiBaseURL}?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°C`;
        document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;
        document.querySelector('.wind').innerHTML = data.wind.speed + ` km/jam`;

        if(data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'https://github.com/Saroyann/javascript-weather-app/blob/master/img/cloudy.png?raw=true';

        } else if(data.weather[0].main == 'rain') {
            weatherIcon.src = 'https://github.com/Saroyann/javascript-weather-app/blob/master/img/rain.png?raw=true';
        } else {
            weatherIcon.src = 'https://github.com/Saroyann/javascript-weather-app/blob/master/img/sunny.png?raw=true';
        }

    } catch (error) {
        console.error(error);
        alert('Gagal mendapatkan data cuaca. Silakan coba lagi.');
    }
}

searchBtn.addEventListener('click', () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert('Masukkan nama kota yang valid.');
    }
});
