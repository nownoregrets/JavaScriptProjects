// Main Body Box Selection
let box = document.getElementById("box");
// Default Run On Windows Load
setTimeout(() => {
    box.style.backgroundImage = "url('/Food Image 2.jpg')"
    box.style.transition = "ease 2s"
    setTimeout(() => {
        box.style.backgroundImage = "url('/Food Image 3.jpg')"
        box.style.transition = "ease 2s"
        setTimeout(() => {
            box.style.backgroundImage = "url('/Food Image.jpg')"
            box.style.transition = "ease 3s"
        }, 5000);
    }, 5000);
}, 5000);
// Repeat After 15 Seconds Of Windows Load
setTimeout(() => {
    // Repeats Every In 15 Seconds, That's The Main Manipulation
    setInterval(() => {
        setTimeout(() => {
            box.style.backgroundImage = "url('/Food Image 2.jpg')"
            box.style.transition = "ease 3s"
            setTimeout(() => {
                box.style.backgroundImage = "url('/Food Image 3.jpg')"
                box.style.transition = "ease 3s"
                setTimeout(() => {
                    box.style.backgroundImage = "url('/Food Image.jpg')"
                    box.style.transition = "ease 3s"
                }, 5000);
            }, 5000);
        }, 5000);
        // Set Time Out Ends
    }, 15000);
    // Set Interval Ends
}, 15000);
