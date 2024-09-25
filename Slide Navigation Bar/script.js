let sideBar = document.getElementById("sideBar");
let listBtn1 = document.getElementById("listBtn1");
let listBtn2 = document.getElementById("listBtn2");
listBtn2.style.display = "none"
listBtn1.addEventListener("click", function () {
    sideBar.style.left = "0vw"
    sideBar.style.transition = "all 0.5s"
    listBtn1.style.display = "none"
    listBtn2.style.display = "block"
})
listBtn2.addEventListener("click", function () {
    sideBar.style.left = "-20vw"
    sideBar.style.transition = "all 0.5s"
    listBtn2.style.display = "none"
    listBtn1.style.display = "block"

})