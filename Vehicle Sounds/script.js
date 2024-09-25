let trainSound = new Audio("/Sounds/Train Sound.mp3")
let taxiSound = new Audio("/Sounds/Taxi Sound.mp3")
let shipSound = new Audio("/Sounds/Ship Sound.mp3")
let hotAirBaloon = new Audio("/Sounds/Hot Air Baloon.mp3")
let carSound = new Audio("/Sounds/Car Sound.mp3")
let busSound = new Audio("/Sounds/Bus Sound.mp3")
let boatSound = new Audio("/Sounds/Boat Sound.mp3")
let bicycleSound = new Audio("/Sounds/Bicycle Sound.mp3")
let airplaneSound = new Audio("/Sounds/Airplane Sound.mp3")
let scooterSound = new Audio("/Sounds/Scooter Sound.mp3")

// A = 65
// H = 72
// U = 85
// K = 75
// B = 66
// S = 83
// T = 84
// V = 86
// O = 79
// F = 70

window.addEventListener("keydown", function (e) {
    if (e.keyCode == "65") {
        airplaneSound.play()
    }

    if (e.keyCode == "72") {
        hotAirBaloon.play()
    }

    if (e.keyCode == "85") {
        scooterSound.play()
    }

    if (e.keyCode == "75") {
        bicycleSound.play()
    }

    if (e.keyCode == "66") {
        busSound.play()
    }

    if (e.keyCode == "83") {
        shipSound.play()
    }

    if (e.keyCode == "84") {
        trainSound.play()
    }

    if (e.keyCode == "86") {
        taxiSound.play()
    }

    if (e.keyCode == "79") {
        boatSound.play()
    }

    if (e.keyCode == "70") {
        carSound.play()
    }
})