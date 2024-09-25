// Clock Sounds
let hourSound = new Audio('Clock Hour Sound.mp3')
let MinuteSound = new Audio('Clock Min Sound.wav')
let SecondSound = new Audio('Clock Sec Sound.mp3')
// let hourSound = document.getElementById('HourSound');
// let MinuteSound = document.getElementById('MinuteSound');
// let SecondSound = document.getElementById('SecondsSound');
// Main Function

// Sound Functions
function hourSoundFunction() {
    hourSound.play()
}
function MinuteSoundFunction() {
    MinuteSound.play()
}
function SecondSoundFunction() {
    SecondSound.play()
}
// Time Section
function myTime() {
    let Time = new Date()
    let myHours = Time.getHours()
    let myMinutes = Time.getMinutes()
    let mySeconds = Time.getSeconds()
    let mySection;
    // If Section
    if (myHours > 12) {
        myHours = myHours - 12;
    }
    if (myHours < 10) {
        myHours = "0" + myHours;
    }
    if (myMinutes < 10) {
        myMinutes = "0" + myMinutes;
    }
    if (mySeconds < 10) {
        mySeconds = "0" + mySeconds;
    }
    // if (myHours < 12) {
    //     document.getElementById('section').innerHTML = "AM";
    // }
    // mySection = hours >= 12 ? 'PM' : 'AM'
    if (mySeconds == 0) {
        hourSoundFunction()
    }
    if (myMinutes == 0) {
        MinuteSoundFunction()
    }
    // DOM Section
    document.getElementById('hours').innerHTML = myHours;
    document.getElementById('minutes').innerHTML = myMinutes;
    document.getElementById('seconds').innerHTML = mySeconds, SecondSoundFunction();
    // document.getElementById('section').innerHTML = mySection;
}
//Date Section
function myDate() {
    let date = new Date()
    //Date Section
    let currentDate = date.toLocaleDateString();
    document.getElementById('Date-Month-Year').innerHTML = currentDate;
    //Day Section
    let myDay = date.getDay();
    //If Section
    if (myDay == 0) {

        document.getElementById('Day').innerHTML = "Sunday";
    }
    if (myDay == 1) {
        document.getElementById('Day').innerHTML = "Monday";

    }
    if (myDay == 2) {
        document.getElementById('Day').innerHTML = "Tuesday";

    }
    if (myDay == 3) {
        document.getElementById('Day').innerHTML = "Wednesday";

    }
    if (myDay == 4) {
        document.getElementById('Day').innerHTML = "Thursday";

    }
    if (myDay == 5) {
        document.getElementById('Day').innerHTML = "Friday";

    }
    if (myDay == 6) {
        document.getElementById('Day').innerHTML = "Saturday";

    }
}
// myTime()
myDate()
setInterval(myTime, 1000);