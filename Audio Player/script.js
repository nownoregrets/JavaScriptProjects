// Audio
let myAudio = new Audio("Audio.wav")
// Buttons
let playButton = document.getElementById("playButton");
let stopButton = document.getElementById("stopButton");
let forwardButton = document.getElementById("forwardButton");
let backwardButton = document.getElementById("backwardButton");
let muteButton = document.getElementById("muteButton");
// Sliders
let trackSlider = document.getElementById("trackSlider");
let volumeSlider = document.getElementById("volumeSlider");
// Text
let topHeading = document.getElementById("topHeading");
// Logics
volumeSlider.value=1
// Play Pause Logic
playButton.addEventListener("click", function () {
    if (myAudio.paused) {
        myAudio.play()
        setInterval(() => {
            trackSlider.value = myAudio.currentTime;
            trackSlider.max = myAudio.duration;
        }, 1000);
        // volumeSlider.value = myAudio.volume
        playButton.innerHTML = "Pause";
        topHeading.style.color = "green"
    } else {
        myAudio.pause()
        playButton.innerHTML = "Play";
        topHeading.style.color = "#fff"
    }
})
// Stop Logic
stopButton.addEventListener("click", function () {
    myAudio.currentTime = "0";
    myAudio.pause()
    playButton.innerHTML = "Play";
})
// Mute Unmute Logic
muteButton.addEventListener("click", function () {
    if (myAudio.muted == true) {
        myAudio.muted = false;
        muteButton.innerHTML = "Mute";
    } else {
        myAudio.muted = true;
        muteButton.innerHTML = "Unmuted";
    }
})
//Backward Logic
backwardButton.addEventListener("click", function () {
    myAudio.currentTime -= 5;
})
forwardButton.addEventListener("click", function () {
    myAudio.currentTime += 5;
})
// trackSlider Logic
trackSlider.addEventListener("input", function () {
    myAudio.currentTime = trackSlider.value;
    myAudio.play()
})
volumeSlider.addEventListener("input", function () {
    myAudio.volume = volumeSlider.value;
})