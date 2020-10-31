//Input: Get Date
let now = new Date();
let month = now.getMonth();
let dayOfMonth = now.getDate();
let dayOfWeek = now.getDay();
let workMessage = "Get up! ⏰"
let restMessage = "Sleep In 😴"
let message

//Processing: 
//Check for the weekend and holidays message = rest
//else message = work

function alarmCheck() {
    if (dayOfWeek == 0 || dayOfWeek == 6) {
        message = restMessage;
    }
    else if (month == 11 && dayOfMonth == 25) {
        message = restMessage;
    }
    else if (month == 3 && dayOfMonth == 4) {
        message = restMessage;
    }
    else if (month == 0 && dayOfMonth == 1) {
        message = restMessage;
    } else {
        message = workMessage;
    }

//Output: message
document.getElementById('output').innerHTML = message

} 


