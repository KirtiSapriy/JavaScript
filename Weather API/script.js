





document.querySelector("button").addEventListener("click", () => {
        let city = document.querySelector("input").value

        if (city == "") {
                alert("Enter City Name")
        }
        else {
                weather(city)
        }
})
function weather(city) {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a2390741c96495451fd75d6b236740a&units=metric`)

                .then(res => res.json())
                .then((res) => {
                        console.log(res);


                        let a = res.main.temp.toFixed(0)
                        let ws = (res.wind.speed * 3.6).toFixed(0)
                        document.getElementById("icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${res.weather[0].icon}.png" class="h-10/12 w-10/12 " / >`
                        document.getElementById("city").innerText = `  ${res.name}`

                        document.getElementById("temp").innerText = ` ${a}°C`
                        document.getElementById("ws").innerText = `  ${ws} km/h`
                        document.getElementById("hm").innerHTML = `  ${res.main.humidity} %  `


                })
                .catch(er => console.log(er))


}

weather(`dehli`)