const apiKey = "983ac477904fe71909f5341fa76e995e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const weatherimg = document.querySelector(".weather-icon");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    if (data.cod == "404") {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".err").style.display = "block";


    }
    else {


        document.querySelector(".err").style.display = "none"
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = parseInt(data.main.temp) + " c ";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h ";

        if (data.weather[0].main == "Clouds") {
            weatherimg.src = "./images/clouds.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherimg.src = "./images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherimg.src = "./images/drizzel.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherimg.src = "./images/mist.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherimg.src = "./images/clear.png"
        }
        

    }
}
searchBtn.addEventListener("click", () => {
    document.querySelector('.weather').style.display = "block";
    checkWeather(searchBox.value);

});
