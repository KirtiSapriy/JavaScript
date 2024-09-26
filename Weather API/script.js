





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
                        document.getElementById("city").innerHTML = ` <span class="text-lg text-blue-800 mr-2 font-bold">City :</span> ${res.name}`

                        document.getElementById("temp").innerHTML = ` <span class="text-lg text-blue-800 mr-2 font-bold">Temperature :</span> ${res.main.temp} °C`
                        document.getElementById("dis").innerHTML = `  <span class="text-lg text-blue-800 mr-2 font-bold">Weather:</span> ${res.weather[0].description}`
                        document.getElementById("icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${res.weather[0].icon}.png" class="h-10/12 w-10/12" / >`

                })
                .catch(er => console.log(er))


}

weather(`dehli`)