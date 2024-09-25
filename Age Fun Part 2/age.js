//Input Selectors
let put = document.getElementById('put');
// console.log(put);
let result = document.getElementById('result');
// console.log(result);
// Button Selectors
let equal = document.getElementById('equal');
// console.log(equal);
let cal = document.getElementById('cal');
// console.log(cal);
let fire = document.getElementById('fire');
// console.log(fire);
let who = document.getElementById('who');
// console.log(who);
let find = document.getElementById('find');
// console.log(find);
// Input Sound Selectors
let clrsound = document.getElementById('clrsound');
// console.log(clrsound);
let errsound = document.getElementById('errsound');
// console.log(errsound);
let anssound = document.getElementById('anssound');
// console.log(anssound);
let ktsound = document.getElementById('ktsound');
// console.log(ktsound);
// Troll Sound Selectors
let gbsound = document.getElementById('gbsound');
// console.log(gbsound);
let sasound = document.getElementById('sasound');
// console.log(sasound);
let lsound = document.getElementById('lsound');
// console.log(lsound);
//Input Sound Functions
function anssoundfunction() {
    anssound.play()
}
function clrsoundfunction() {
    clrsound.play()
}
function errsoundfunction() {
    errsound.play()
}
function ktsoundfunction() {
    ktsound.play()
}
//Troll Sound Functions
function troll1() {
    gbsound.play()
}
function troll2() {
    sasound.play()
}
function troll3() {
    lsound.play()
}
//Alert Functions
function troll1alert() {
    alert("hahahaha try again!");
}
function troll2alert() {
    alert("hahahaha try again!");
}
function troll3alert() {
    alert("hahahaha try again!");
}
// Style Functions
//Style Color Functions
function findcolorclear() {
    find.style.color = "#1B2845"
}
function findcolorequal() {
    find.style.color = "green"
}
//Color Red Functions
function findcolorred() {
    find.style.color = "red"
}
function whocolorred() {
    who.style.color = "red"
}
function firecolorred() {
    fire.style.color = "red"
}
// Color Black Functions
function findcolorblack() {
    find.style.color = "#000"
}
function whocolorblack() {
    who.style.color = "#000"
}
function firecolorblack() {
    fire.style.color = "#000"
}
// Text Change Functions
function findtextclear() {
    find.innerText = "Find Clear Button To Clear - Quiz"
}
function findtextequal() {
    find.innerText = "Congratulations"
}
function findtextreverse() {
    find.innerText = "Find Current Position"
}
//Event Listners
fire.addEventListener('click', function () {
    troll2()
    firecolorred()
    setTimeout(troll1alert, 15000)
}) // Fire Event End
who.addEventListener('click', function () {
    troll1()
    whocolorred()
    setTimeout(troll2alert, 500)
}) // Who Event End
find.addEventListener('click', function () {
    troll3()
    findcolorred()
    setTimeout(troll3alert, 2000)
}) // Find Enevt End
put.addEventListener('input', function () {         //Put Event
    age = this.value;
    ktsoundfunction()
    findtextreverse()
    findcolorblack()
    cal.addEventListener('click', function () {     //Cal Event
        if (age >= 90) {            //If-Else
            result.value = "You're Old Person";
        } else {
            if (age >= 40) {
                result.value = "You're Not Young Person";
            } else {
                if (age >= 18) {
                    result.value = "You're Young Person";
                } else {
                    if (age >= 15) {
                        result.value = "You're Not Kid";
                    } else {
                        if (age >= 6) {
                            result.value = "You're Kid";
                        } else {
                            if (age >= 1) {
                                result.value = "You're Baby";
                            }
                            else {
                                result.value = "Unexpected Error";
                                put.value = "Unexpected Error";
                                clrsoundfunction()
                                errsoundfunction()
                            }  //Last Else End
                        }  //5th Else End
                    }  //3th Else End
                }  //3rd Esle End
            }  //2nd Else End
        }  //1st Else End
        anssoundfunction()
        setTimeout(findtextclear, 2000)
        setTimeout(findcolorclear, 2000)
        equal.addEventListener('click', function () {
            put.value = ""
            result.value = ""
            clrsoundfunction()
            setTimeout(findtextequal, 1500)
            setTimeout(findcolorequal, 1500)
            // findcolorblack()
            whocolorblack()
            firecolorblack()
        }) //Equal Event End
    }) //Cal Event End
}) // Put Event End