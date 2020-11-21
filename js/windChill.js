function doInputOutput() {
    let temperature = parseFloat(document.getElementById("tempF").value);
    let windspeed = parseFloat(document.getElementById("speed").value);
    
        if (temperature <= 50 && windspeed >=3) {
            windChill(temperature, windspeed);
        }
        else {
            alert("Windchill is not a factor");
        }
    
}

//Formula   f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16

function windChill(temperature, windspeed) {
    let windchill = 35.74 + (0.6215 * temperature) - (35.75 * windspeed**0.16) + (0.4275 * temperature
        * windspeed**0.16)
    document.getElementById('output').innerHTML = "The Windchill is " + Math.round(windchill)
}
