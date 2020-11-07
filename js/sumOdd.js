//Input:  Ask user for number
    //create an integer at 1 and sum at 0

function sumOddNumbers() {
    let n = parseInt(document.getElementById('number').value);
    let i = 1;
    let sum = 0;


//Processing: create a loop to go from 1 to the number by--
    //checking to see if we've reached the number yet.
    //checking to see if it is odd
    //if odd, add to the previous number until we reach user input
   
    for (let i=1; i<=n; i++) {
      if (i % 2 == 1) {
        sum +=i;
      }   
          
    }
//Display the sum of the odd numbers
    document.getElementById('output').innerHTML = sum

}