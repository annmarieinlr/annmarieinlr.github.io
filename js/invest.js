//The first function (doFV) does the following:

//Gets input from the user.
//Calls the computeFutureValue function.
//Displays the result to the user.

function doFV() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseFloat(document.getElementById("years").value);
    let periods = parseFloat(document.getElementById("periods").value);
    let message = "";
    let fV = computeFutureValue(principal, rate, years, periods);
    message = `Your investment will be worth ${fV}`;
    document.getElementById('output').innerHTML = message 
}

// (computeFutureValue) computes and returns the future value of an investment.
//Formula  f = a (1 + r)^n 
// where a = investment (principal), r = rate per period, y = # of years, n = total periods.

function computeFutureValue(a, r, y, n) {
    return (a * ((1 + (r/n))**(y*n))).toFixed(2);
}