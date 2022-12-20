//alert `Are you connected ?`

let cityInput = document.getElementById("city");

let form = document.querySelector("form");

function infoWeather(cityValue) {

    $.ajax({
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=1&appid=2bb3d64c67814b884bc99c98c7c65afd`
    })
    .then(
            (data) => {
                getWeatherData(data[0].lat, data[0].lon);
            },
            function (error) {
                console.log("bad request:", error);
            });

}

function getWeatherData(lat, lon) {

        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2bb3d64c67814b884bc99c98c7c65afd`
        })
        .then(
                (data) => {
                
                    let state = document.getElementById("name");
                    state.textContent = data.name

                    let feel = document.getElementById("feel");
                    feel.textContent = data.main.feels_like

                    let weather = document.getElementById("weather");
                    weather.textContent = data.weather[0].description

                    let temperature = document.getElementById("temperature");
                    temperature.textContent = data.main.temp
                },

                function (error) {
                    console.log("bad request:", error);
                });
}

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    let cityValue = cityInput.value;
    infoWeather(cityValue);
})