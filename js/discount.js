//Input: 
//Get Day of Week Code
//Ask for input on subtotal

//Processing:  
//Determine if subtotal is greater than $50 and if it is Tuesday or Wednesday
//If yes, then subtract 10% from subtotal


//Output:
//Display Total

//Input
function total() {

    let dayOfWeek = new Date().getDay();
    let sub = parseFloat(document.getElementById("subtotal").value);
    let newsubtotal;
    let trueTotal;
    
//Processing

    
    if (sub >= 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
        newsubtotal = (sub * .9);
    } else {
        newsubtotal = (sub);
    }
    
    trueTotal = (newsubtotal * 1.06);
  
//Output
    document.getElementById("output").innerHTML = "Their total is: " + trueTotal.toFixed(2);
}

