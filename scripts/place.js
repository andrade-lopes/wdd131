// Footer dates
const yearSpan = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Static weather values
const temperature = 24; // °C
const windSpeed = 15;   // km/h

document.getElementById("temp").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;

// Wind chill calculation (metric)
function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

let windChill = "N/A";

// Conditions for metric wind chill
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChill;