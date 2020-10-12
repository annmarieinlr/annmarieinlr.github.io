
function convertPounds() {
    //Inpout: Get the number of pounds
    let x = parseFloat(document.getElementById('pounds').value);

    //Processing: convert from pounds to kilograms
    let kilograms= x * 0.453592;
    //Round to the nearest tenth
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    kilograms= Math.round(kilograms * multiplier) / multiplier;
    
    //Output: Show number of kilograms
    document.getElementById('output').innerHTML = x + " pounds is equal to " +  kilograms ;
}
