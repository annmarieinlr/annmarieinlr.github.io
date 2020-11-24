function doInputOutput() {
    let temperature = parseFloat(document.getElementById("tempF").value);
    let windspeed = parseFloat(document.getElementById("speed").value);
    let message = "";
    
        if (temperature <= 50 && windspeed >=3) {
            let windchill = windChill(temperature, windspeed);
            message = `The Windchill is ${Math.round(windchill)}`;
        }
        else {
            message = `Windchill is not a factor.`;
        }
        
        document.getElementById('output').innerHTML = message 
}

//Formula   f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16

function windChill(t, s) {
    return 35.74 + (0.6215 * t) - (35.75 * s**0.16) + (0.4275 * t* s**0.16);
  
}

