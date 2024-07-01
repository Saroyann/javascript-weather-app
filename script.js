const apiKey = 'ba552efbe4a226aadcc20b0fa29f7878';
const apiBaseURL = 'https://api.openweathermap.org/data/2.5/weather';

const elements = {
    weatherIcon: document.querySelector('.weather-icon'),
    searchBox: document.querySelector('.search input'),
    searchBtn: document.querySelector('.search button'),
    city: document.querySelector('.city'),
    temp: document.querySelector('.temp'),
    humidity: document.querySelector('.humidity'),
    wind: document.querySelector('.wind'),
    weather: document.querySelector('.weather'),
    error: document.querySelector('.error')
};

const iconMap = {
    'Clouds': 'https://github.com/Saroyann/javascript-weather-app/blob/master/img/cloudy.png?raw=true',
    'Rain': 'https://github.com/Saroyann/javascript-weather-app/blob/master/img/rain.png?raw=true',
    'Clear': 'https://github.com/Saroyann/javascript-weather-app/blob/master/img/sunny.png?raw=true',
    'Haze': 'https://github.com/Saroyann/javascript-weather-app/blob/master/img/mist.png?raw=true',
    'Drizzle': 'https://github.com/Saroyann/javascript-weather-app/blob/master/img/drizzle.png?raw=true'
};

const getWeatherIcon = (weather) => iconMap[weather] || '';

const updateWeatherInfo = (data) => {
    elements.city.innerHTML = data.name;
    elements.temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    elements.humidity.innerHTML = `${data.main.humidity}%`;
    elements.wind.innerHTML = `${data.wind.speed} km/jam`;
    elements.weatherIcon.src = getWeatherIcon(data.weather[0].main);
};

const checkWeather = async (city) => {
    const apiURL = `${apiBaseURL}?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            elements.error.style.display = 'block';
            elements.weather.style.display = 'none';
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        updateWeatherInfo(data);
        elements.error.style.display = 'none';
        elements.weather.style.display = 'block';
    } catch (error) {
        console.error(error);
    }
};

elements.searchBtn.addEventListener('click', () => {
    const city = elements.searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert('Masukkan nama kota yang valid.');
    }
});
