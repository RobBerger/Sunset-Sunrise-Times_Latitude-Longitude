let baseURL = "https://api.sunrise-sunset.org/json?";
let myLatitude = 36.72;
let myLongitude = -4.42;

let myURL = baseURL + "lat=" + myLatitude + "&lng=" + myLongitude + "&date=today";

console.log(myURL);