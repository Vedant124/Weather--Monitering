const API_KEY = "b29ba99cf98d19e885925338656a180e"


function date() {
    let city = document.getElementById("inp").value;
    console.log(city)


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            return response.json()
        })
        .then((res) => {
            document.getElementById("city").innerText = res.name;
            document.getElementById("temp").innerText = res.main.temp;
            document.getElementById("main").innerText = res.weather[0].main;
            document.getElementById("humidity").innerText = res.main.humidity;
            document.getElementById("speed").InnerText = res.wind.speed;
        })
        .catch((err) => {
            console.log(err)
        })
}
