let baseURL = "https://api.sunrise-sunset.org/json?";
let myLatitude = 36.72;
let myLongitude = -4.42;

async function generateSunTimes() {
    let myURL = await fetch(baseURL + "lat=" + myLatitude + "&lng=" + myLongitude + "&date=today")
        .then(response => response.json());
    let sunRiseTime = myURL.results.sunrise;
    let sunSetTime = myURL.results.sunset;
    console.log(sunRiseTime);
    console.log(sunSetTime);
}

var btn = document.getElementById('solarButton');

btn.addEventListener('click', () => {
    generateSunTimes();
});