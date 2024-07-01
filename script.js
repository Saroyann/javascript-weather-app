const apiKey = 'ba552efbe4a226aadcc20b0fa29f7878';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=samarinda';

const checkWeather = async () => {
    const response = await fetch(apiURL + `&appid${apiKey}`);
}


