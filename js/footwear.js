function pickShoes() {
    //Input:
    //Select the weather

    let choice = (document.getElementById('select-weather').value);

    //Processing
    switch(choice) {
        case 'hot':
            shoes = 'Wear Sandals';
            break;
        case 'rain':
            shoes = 'Wear Galoshes';
            break;
        case 'snow':
            shoes = 'Wear Boots';
            break;
        case 'unknown':
            shoes = 'Wear Shoes';
            break;         
    }

        //Output

    document.getElementById('output').innerHTML = shoes;
}