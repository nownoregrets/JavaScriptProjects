// Action Elemnts
let input = document.getElementById("input");
let Generate = document.getElementById("Generate");
let Clear = document.getElementById("Clear");
// Content Boxes
let box = document.getElementById("box");
let hideBox = document.getElementById("hideBox");
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")
let box10 = document.getElementById("box10")
// Sounds
let boxSound = new Audio("Box Sound.mp3")
let answerSound = new Audio("Answer Sound.mp3")
let clickSound = new Audio("Click Sound.mp3")
let typeSound = new Audio("Key Type Sound.wav")
let errorSound = new Audio("Error Sound.mp3")
let error2Sound = new Audio("Error 2 Sound.mp3")
// Variables
// Logics
hideBox.style.display = "none"
box.style.height = "0vh"
// Input Event
input.addEventListener("input", function () {
    inputNumber = input.value;
    typeSound.play()
    // Answer Event
    Generate.addEventListener("click", function () {
        clickSound.play()
        hideBox.style.display = "block"
        // Box Logic
        if (inputNumber > 0 && inputNumber < Number) {
            setTimeout(() => {
                answerSound.play()
                tableNumber = input.value;
                box1.innerHTML = tableNumber + "X" + "1" + "=" + tableNumber * 1
                box2.innerHTML = tableNumber + "X" + "2" + "=" + tableNumber * 2
                box3.innerHTML = tableNumber + "X" + "3" + "=" + tableNumber * 3
                box4.innerHTML = tableNumber + "X" + "4" + "=" + tableNumber * 4
                box5.innerHTML = tableNumber + "X" + "5" + "=" + tableNumber * 5
                box6.innerHTML = tableNumber + "X" + "6" + "=" + tableNumber * 6
                box7.innerHTML = tableNumber + "X" + "7" + "=" + tableNumber * 7
                box8.innerHTML = tableNumber + "X" + "8" + "=" + tableNumber * 8
                box9.innerHTML = tableNumber + "X" + "9" + "=" + tableNumber * 9
                box10.innerHTML = tableNumber + "X" + "10" + "=" + tableNumber * 10
            }, 4050);
            setTimeout(() => {
                box.style.height = "60vh"
                box.style.transition = "all 3s"
                box.style.height = "70vh"
                box.style.transition = "all 4s"
                boxSound.play()
            }, 500);
        } else {
            input.value = "Invaild Number"
            error2Sound.play()
            errorSound.play()
            setTimeout(() => {
                answerSound.pause()
                boxSound.pause()
                answerSound.currentTime = 0
                boxSound.currentTime = 0
                hideBox.style.display = "none"
                input.value = ""
            }, 2000);
        }
    })
    // Clear Event
    Clear.addEventListener("click", function () {
        input.value = ""
        clickSound.play()
        // Reverse Box Logic
        setTimeout(() => {
            answerSound.play()
            box1.innerHTML = ""
            box2.innerHTML = ""
            box3.innerHTML = ""
            box4.innerHTML = ""
            box5.innerHTML = ""
            box6.innerHTML = ""
            box7.innerHTML = ""
            box8.innerHTML = ""
            box9.innerHTML = ""
            box10.innerHTML = ""
        }, 50);
        box.style.height = "10vh"
        box.style.transition = "all 4s"
        box.style.height = "0vh"
        box.style.transition = "all 3s"
        boxSound.play()
        setTimeout(() => {
            hideBox.style.display = 'none'
        }, 4010);
    })
})
