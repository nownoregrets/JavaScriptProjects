// Sounds
let shootSound = new Audio("/Sounds/Shoot Sound.mp3")
let reloadSound = new Audio("/Sounds/Reload Sound.mp3")

//Video
let bulletShoot = document.getElementById("bullet-shoot");

// Elements
// Basic Elements

let gunBox = document.getElementById("box");
let gunBody = document.getElementById("body");
let gunHead = document.getElementById("head");
let gunTrigger = document.getElementById("trigger");
let gunBarrel = document.getElementById("barrel");

// Extra Elements
let targetBox = document.getElementById("target");

// Logics
// Event Listeners

// Gun Head
gunHead.addEventListener("click", function () {
    reloadSound.play()
    gunHead.style.transform = "translateX(11vw)"
    gunHead.style.transition = "linear .2s"
    setTimeout(() => {
        gunHead.style.transform = "translateX(0vw)"
    }, 300);
})

// Gun Body
gunBody.addEventListener("click", function () {

    // Sound
    shootSound.play()

    // Video Logic
    bulletShoot.play()

    // Gun Body Logic
    gunBox.style.transform = "rotate(8deg)"
    setTimeout(() => {
        gunBox.style.transform = "rotate(0deg)"
    }, 300);

    // Gun Head Logic
    gunHead.style.transform = "translateX(7vw)"
    gunHead.style.transition = "all 0s"
    setTimeout(() => {
        gunHead.style.transform = "translateX(0vw)"
        gunHead.style.transition = "all 0s"
    }, 300);

    // Gun Trigger
    gunTrigger.style.left = "1.5%"
    setTimeout(() => {
        gunTrigger.style.left = "0%"
    }, 300);

    // Target Box
    // Rotate
    setInterval(() => {
        targetBox.style.transform = "rotate(360deg)"
        targetBox.style.transition = "linear .2s"
    }, 300);
    // It's Your Choice To Rotate The Box

    // Left Move
    targetBox.style.left = "1vw"
    targetBox.style.transition = "all .3s"

    // Down Move
    setTimeout(() => {
        targetBox.style.top = "0%"
        targetBox.style.transition = "all .2s"
        setTimeout(() => {
            targetBox.style.left = "3vw"
            targetBox.style.transition = "all .4s"
        }, 100);
    }, 500);

    // Repeat Logic
    setTimeout(() => {
        targetBox.style.top = "-360%"
        targetBox.style.transition = "all 0s"
        setTimeout(() => {
            targetBox.style.top = "-288%"
            targetBox.style.transition = "all .4s"
        }, 500);
    }, 1000);

    // Texture Logic

    // targetBox.style.backgroundImage = "url('/Images/Target Box.jpg')"
    // targetBox.innerHTML=""
    // setTimeout(() => {
    // targetBox.style.backgroundImage = "url('')"
    // targetBox.innerHTML="Target"
    // }, 1000);
    // It's Your Choice To Add Texture In Box

    targetBox.style.backgroundColor = "yellow"
    setTimeout(() => {
        targetBox.style.backgroundColor = "red"
    }, 300);
    setTimeout(() => {
        targetBox.style.backgroundColor = "green"
    }, 1000);
})

// Never Forget To Subscribe The Channel & Like The Video, If You Enjoy The Video
// if (video.amazing == true) {
//     video.like = true;
//     channel.subscribe = true;
// } else {
//     video.comment = true; // Tell The Reason, I Will Improve My Content
//     video.like = false;
//     channel.subscribe = false;
// }
// Now No Regrets