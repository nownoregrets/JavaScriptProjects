let box = document.getElementById("box");

// Generates Any Number Between 1 To 10                      | 10 = Number of Images 
let randomNumber = Math.floor(Math.random() * 10 + 1)
// console.log(randomNumber);

// On Page Load
switch (randomNumber) {
    case 1:
        box.style.backgroundImage = "url('/Images/Back-img.jpg')"
        break;
    case 2:
        box.style.backgroundImage = "url('/Images/Burger Unused.jpg')"
        break;
    case 3:
        box.style.backgroundImage = "url('/Images/Burger.jpg')"
        break;
    case 4:
        box.style.backgroundImage = "url('/Images/Food Image 2.jpg')"
        break;
    case 5:
        box.style.backgroundImage = "url('/Images/Food Image 3.jpg')"
        break;
    case 6:
        box.style.backgroundImage = "url('/Images/Food Image.jpg')"
        break;
    case 7:
        box.style.backgroundImage = "url('/Images/Food Pic AR.jpg')"
        break;
    case 8:
        box.style.backgroundImage = "url('/Images/Jungle Background.jpg')"
        break;
    case 9:
        box.style.backgroundImage = "url('/Images/Sky Wallpaper.jpg')"
        break;
    case 10:
        box.style.backgroundImage = "url('/Images/Table AR.jpg')"
        break;

    default:
        break;
}

// Repeats After Every 9 Seconds
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * 10 + 1)
    setTimeout(() => {
        switch (randomNumber) {
            case 1:
                box.style.backgroundImage = "url('/Images/Back-img.jpg')"
                box.style.transition = "linear 4s"
                break;
            case 2:
                box.style.backgroundImage = "url('/Images/Burger Unused.jpg')"
                box.style.transition = "linear 4s"
                break;
            case 3:
                box.style.backgroundImage = "url('/Images/Burger.jpg')"
                box.style.transition = "linear 4s"
                break;
            case 4:
                box.style.backgroundImage = "url('/Images/Food Image 2.jpg')"
                box.style.transition = "linear 4s"
                break;
            case 5:
                box.style.backgroundImage = "url('/Images/Food Image 3.jpg')"
                box.style.transition = "linear 4s"
                break;
            case 6:
                box.style.backgroundImage = "url('/Images/Food Image.jpg')"
                box.style.transition = "linear 4s"
                break;
            case 7:
                box.style.backgroundImage = "url('/Images/Food Pic AR.jpg')"
                box.style.transition = "linear 4s"
                break;
            case 8:
                box.style.backgroundImage = "url('/Images/Jungle Background.jpg')"
                box.style.transition = "linear 4s"
                break;
            case 9:
                box.style.backgroundImage = "url('/Images/Sky Wallpaper.jpg')"
                box.style.transition = "linear 4s"
                break;
            case 10:
                box.style.backgroundImage = "url('/Images/Table AR.jpg')"
                box.style.transition = "linear 4s"
                break;

            default:
                break;
        }
    }, 1000);
}, 9000);