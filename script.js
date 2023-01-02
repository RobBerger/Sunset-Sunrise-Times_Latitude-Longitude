async function generateSunTimes() {
    let baseURL = "https://api.sunrise-sunset.org/json?";
    let myLatitude = 36.72;
    let myLongitude = -4.42;

    let myURL = await fetch(baseURL + "lat=" + myLatitude + "&lng=" + myLongitude + "&date=today")
        .then(response => response.json());
    console.log(myURL.results.sunrise);
}

generateSunTimes()