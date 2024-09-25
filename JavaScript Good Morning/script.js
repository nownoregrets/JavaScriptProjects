//Sounds
let goodNight = new Audio("Good Night Sound.wav")
let goodMorning = new Audio("Good Morning Sound.wav")
let goodAfternoon = new Audio("Good Afternoon Sound.wav")
let goodEvening = new Audio("Good Evening Sound.wav")
// Main Content
let mainContent = document.getElementById("mainContent");
let sunIcon = document.getElementById("sunIcon");
let moonIcon = document.getElementById("moonIcon");
let mainBody = document.getElementById("mainBody");
// Logic
function mainFunction() {
    let date = new Date()
    let myTime = date.getHours();

    // If-Else
    if (myTime < 5 || myTime >= 20) {
        mainContent.innerHTML = "Good Night"
        sunIcon.style.opacity = "0.1"
    } else {
        if (myTime < 12) {
            mainContent.innerHTML = "Good Morning"
            mainBody.style.backgroundColor = "#fff"
            mainContent.style.color = "#000"
            moonIcon.style.opacity = "0.1"
            moonIcon.style.color = "#000"
            sunIcon.style.opacity = "1"

        } else {
            if (myTime < 17 || myTime >= 12) {
                mainContent.innerHTML = "Good Afternoon"
                mainBody.style.backgroundColor = "#fff"
                moonIcon.style.opacity = "0.1"
                mainContent.style.color = "#000"
                moonIcon.style.color = "#000"
            } else {
                if (myTime >= 17 || myTime < 20) {
                    mainContent.innerHTML = "Good Evening"
                    mainBody.style.backgroundColor = "#fff"
                    mainBody.style.color = "#000"
                    moonIcon.style.opacity = "0.7"
                }
            }
        }
    }
}
// mainFunction()
setInterval(mainFunction, 1000)
function mainSounds() {
    let dateSound = new Date()
    let myTimeSound = dateSound.getHours();
    //Functions
    function goodNightFunction() {
        goodNight.play()
    }
    function goodMorningFunction() {
        goodMorning.play()
    }
    function goodAfternoonFunction() {
        goodAfternoon.play()
    }
    function goodEveningFunction() {
        goodEvening.play()
    }

    // If-Else
    if (myTimeSound < 5 || myTimeSound >= 20) {
        goodNightFunction()
    } else {
        if (myTimeSound < 12) {
            goodMorningFunction()

        } else {
            if (myTimeSound < 17 || myTimeSound >= 12) {
                goodAfternoonFunction()
            } else {
                goodEveningFunction()
            }
        }
    }
}
// mainSounds()
setInterval(mainSounds, 10000)
// function mainOpacity() {
//     let dateOpacity = new Date()
//     let myTimeOpacity = dateSound.getHours();
//     //Functions
//     function goodNightOpacityFunction() {
//         moonIcon.style.opacity = "0.2"
//     }
//     function goodMorningOpacityFunction() {
//         goodMorningt.play()
//     }
//     function goodAfternoonOpacityFunction() {
//         goodAfternoon.play()
//     }
//     function goodEveningOpacityFunction() {
//         goodEvening.play()
//     }

//     // If-Else
//     if (myTimeSound < 5 || myTimeOpacity >= 20) {
//         setInterval(goodNightOpacityFunction, 3.6e+6)
//     } else {
//         if (myTimeOpacity < 12 || myTimeOpacity >= 5) {
//             goodMorningFunction()

//         } else {
//             if (myTimeOpacity < 17 || myTimeOpacity >= 12) {
//                 goodAfternoonFunction()
//             } else {
//                 goodEveningFunction()
//             }
//         }
//     }
// }
// Time Function
// Clock Sounds

// let hourSound = document.getElementById('HourSound');
// let MinuteSound = document.getElementById('MinuteSound');
// let SecondSound = document.getElementById('SecondsSound');
// Main Function

// Sound Functions
// Time Section
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
    mySection = myHours < 12 ? "AM" : "PM"
    // DOM Section
    document.getElementById('hours').innerHTML = myHours;
    document.getElementById('minutes').innerHTML = myMinutes;
    document.getElementById('seconds').innerHTML = mySeconds;
    document.getElementById('section').innerHTML = mySection;
}
setInterval(myTime, 1000);
