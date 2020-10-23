function calculator() {
    //input:
    //student imputs their munbers
    //student inputs their operator

    let num1 = parseFloat(document.getElementById('number1').value);
    let num2= parseFloat(document.getElementById('number2').value);
    let myans = parseFloat(document.getElementById('myanswer').value);

    //Processing:
    //compute the problem
    //use switch case for operator

    switch(operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1/num2;
            break;         
    }

   
    //Output:
    //Check their answer
    document.getElementById('output').innerHTML = 
        if (myans == answer) {
            alert("Correct! Great Job!");
        }
        else {
            alert("Incorrect, but you can try again!");
        }
}
