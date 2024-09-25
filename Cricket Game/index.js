// Sounds
let batSound = new Audio("/Game Assets/Sounds/Cricket Game Bat Sound.mp3")
let clickSound = new Audio("/Game Assets/Sounds/Click Sound.mp3")

// Objects
let bat = document.getElementById("bat");
let ball = document.getElementById("ball");

// Boxes
let displaySoce = document.getElementById("score-display");

// Buttons
let playButton = document.getElementById("play-button");
let levelCard = document.querySelectorAll(".level-card")

// Screens
let startScreen = document.getElementById("start");
let loadScreen = document.getElementById("load");
let mainScreen = document.getElementById("main-screen");

// Temp Items
let tempbtn = document.getElementById("up-score-bar");

// Variables
let randomNumber;
// Main Logic

playButton.addEventListener("click", function () {
    clickSound.play()
    setTimeout(() => {
        startScreen.style.display = "none"
        setTimeout(() => {
            loadScreen.style.display = "flex"
        }, 200);
    }, 500);
})

levelCard[0].addEventListener("click", function () {
    clickSound.play()
    setTimeout(() => {
        loadScreen.style.display = "none"
        setTimeout(() => {
            mainScreen.style.display = "flex"
            setTimeout(() => {
                function mainGameFunction() {
                    setTimeout(() => {
                        ball.style.top = "82%"
                        ball.style.left = "87%"
                        ball.style.transition = "linear 0.8s"
                        setTimeout(() => {
                            bat.style.transform = "rotate(22deg)"
                            bat.style.transition = "linear 0.5s"
                            bat.addEventListener("click", function () {
                                randomNumber = Math.floor(Math.random() * 5 + 1)
                                batSound.play()
                                switch (randomNumber) {

                                    // Out Case
                                    case 1:
                                        ball.style.top = "18%"
                                        ball.style.left = "-8%"
                                        ball.style.transition = "linear 0.8s"
                                        bat.style.transform = "rotate(0deg)"
                                        bat.style.transition = "linear 0.5s"
                                        displaySoce.style.display = "flex"
                                        displaySoce.innerHTML = "OUT"
                                        break;

                                    // Six Case 
                                    case 2:
                                        ball.style.top = "32%"
                                        ball.style.left = "-8%"
                                        ball.style.transition = "linear 0.8s"
                                        bat.style.transform = "rotate(0deg)"
                                        bat.style.transition = "linear 0.5s"
                                        displaySoce.style.display = "flex"
                                        displaySoce.innerHTML = "6"
                                        break;

                                    // Four Case 
                                    case 3:
                                        ball.style.top = "52%"
                                        ball.style.left = "-8%"
                                        ball.style.transition = "linear 0.8s"
                                        bat.style.transform = "rotate(0deg)"
                                        bat.style.transition = "linear 0.5s"
                                        displaySoce.style.display = "flex"
                                        displaySoce.innerHTML = "4"
                                        break;

                                    // Two Case 
                                    case 4:
                                        ball.style.top = "72%"
                                        ball.style.left = "-8%"
                                        ball.style.transition = "linear 0.8s"
                                        bat.style.transform = "rotate(0deg)"
                                        bat.style.transition = "linear 0.5s"
                                        displaySoce.style.display = "flex"
                                        displaySoce.innerHTML = "2"
                                        break;

                                    // One Case 
                                    case 5:
                                        ball.style.top = "85%"
                                        ball.style.left = "-8%"
                                        ball.style.transition = "linear 0.8s"
                                        bat.style.transform = "rotate(0deg)"
                                        bat.style.transition = "linear 0.5s"
                                        displaySoce.style.display = "flex"
                                        displaySoce.innerHTML = "1"
                                        break;

                                    // Default
                                    default:
                                        ball.style.top = "0%"
                                        ball.style.left = "-8%"
                                        ball.style.transition = "linear 0s"
                                        bat.style.transform = "rotate(0deg)"
                                        bat.style.transition = "linear 0s"
                                        break;
                                }
                                setTimeout(() => {
                                    ball.style.top = "66%"
                                    ball.style.left = "-8%"
                                }, 1500);
                            })
                        }, 200);
                    }, 500);
                }
                setInterval(mainGameFunction, 4000)
            }, 500);
        }, 200);
    }, 500);
})