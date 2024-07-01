

const apiKey = 'ba552efbe4a226aadcc20b0fa29f7878';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=samarinda';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const checkWeather = async (city) => {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + `°c`;

    document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;

    document.querySelector('.wind').innerHTML = data.wind.speed + ` km/jam`;


}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})




