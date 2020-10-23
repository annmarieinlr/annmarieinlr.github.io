function calculator() {
    //input:
    //student imputs their munbers
    //student inputs their operator

    let num1 = parseFloat(document.getElementById('number1').value);
    let num2= parseFloat(document.getElementById('number2').value);
    let myans = parseFloat(document.getElementById('myanswer').value);
    let operator = (document.getElementById('operator').value);
    //Processing:
    //compute the problem
    //use switch case for operator
    
    let message;
    let answer;
    switch(operator) {
        case '+':
            answer = parseFloat(num1 + num2);
            if (myans == answer){
                message = "Correct! Great Job."
            } else {
                message = "Incorrect, but you can try again."
            }
            break;
        case '-':
            answer = parseFloat(num1 - num2);
            if (myans == answer){
                message = "Correct! Great Job."
            } else {
                message = "Incorrect, but you can try again."
            }
            break;
        case '*':
            answer = parseFloat(num1 * num2);
            if (myans == answer){
                message = "Correct! Great Job."
            } else {
                message = "Incorrect, but you can try again."
            }
            break;
        case '/':
            answer = parseFloat(num1/num2);
            if (myans == answer){
                message = "Correct! Great Job."
            } else {
                message = "Incorrect, but you can try again."
            }
            break;         
    }

   
    //Output:
    //Check their answer
    document.getElementById('output').innerHTML = message
}
