// Buttons
let startBTN = document.getElementById("start-btn");
let stopBTN = document.getElementById("stop-btn");
let resetBTN = document.getElementById("reset-btn");

// Time
let mySeconds = document.getElementById("seconds");
let myMinutes = document.getElementById("minutes");
let myHours = document.getElementById("hours");

// Variables
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopWatch = 0;

// document.title = "Worked!"
// Start
startBTN.addEventListener("click", function () {
    stopWatch = setInterval(() => {
        if (seconds >= 59) {
            seconds = 0;
            seconds++;
            mySeconds.innerHTML = seconds
            minutes++;
            myMinutes.innerHTML = minutes
        } else {
            seconds++;
            mySeconds.innerHTML = seconds
        }

        if (minutes == 59) {
            minutes = 0;
            minutes++;
            myMinutes.innerHTML = minutes
            hours++;
            myHours.innerHTML = hours
        }

        if (seconds <= 9) {
            mySeconds.innerHTML = "0" + seconds
        }

        if (minutes <= 9) {
            myMinutes.innerHTML = "0" + minutes
        }

        if (hours <= 9) {
            myHours.innerHTML = "0" + hours
        }
        document.title = `${hours}:${minutes}:${seconds} - CountTime`
    }, 1000);
})

// Stop
stopBTN.addEventListener("click", function () {
    clearInterval(stopWatch)
    document.title = "Stoped! - CountTime"
})

// Reset
resetBTN.addEventListener("click", function () {
    clearInterval(stopWatch)
    seconds = 0;
    minutes = 0;
    hours = 0;
    mySeconds.innerHTML = "00"
    myMinutes.innerHTML = "00"
    myHours.innerHTML = "00"
    document.title = "Effortless Time Tracking - CountTime"
})