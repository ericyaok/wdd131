const today = new Date();
const year = today.getFullYear();

let yearSpan = document.getElementById("currentyear");
yearSpan.innerHTML = year;

const lastModified = document.lastModified;

let modifiedspan = document.getElementById("modified");
modifiedspan.innerHTML = lastModified;


let temp = 10;
let windSpeed = 5;


let windChill = document.getElementById("windChill");
windChill.innerText = calculateWindChill(temp, windSpeed)



function calculateWindChill(temperatureCelsius, windSpeed) {
    if (temperatureCelsius > 10 || windSpeed < 4.8) {
        return "N/A";
    }

    var windChill = 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeed, 0.16);
    return Math.round(windChill * 10) / 10;
}

