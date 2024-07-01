

const apiKey = 'ba552efbe4a226aadcc20b0fa29f7878';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=samarinda';

const checkWeather = async () => {
    const response = await fetch(apiURL + `&appid=${apiKey}`);

    let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;

    document.querySelector('.temp').innerHTML = data.main.temp + `°c`;

    document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;

    document.querySelector('.wind').innerHTML = data.wind.speed + ` km/jam`;


}

checkWeather();


