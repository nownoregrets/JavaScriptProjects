// Input Selectors
//Input
let age = document.getElementById('age');
// console.log(age);
//Result
let resy = document.getElementById('resy');
// console.log(resy);
let resm = document.getElementById('resm');
// console.log(resm);
let resw = document.getElementById('resw');
// console.log(age);
let resd = document.getElementById('resd');
// console.log(resd);
let resh = document.getElementById('resh');
// console.log(resh);
let resmin = document.getElementById('resmin');
// console.log(resmin);
let ress = document.getElementById('ress');
// console.log(ress);
// Button Selectors
let AnsButton = document.getElementById('ans-bt');
// console.log(AnsButton);
let ClearButton = document.getElementById('clear-bt');
// console.log(ClearButton);
// Input Sounds Selectors
let Answer = document.getElementById('Ans');
// console.log(Ans);
let Clear = document.getElementById('Clr');
// console.log(Clr);
let Error = document.getElementById('Err');
// console.log(Err);
// Sound Functions 
function AnswerSound() {
    Answer.play()
}
function ClearSound() {
    Clear.play()
}
function ErrorSound() {
    Error.play()
}
//Event Listener
age.addEventListener('input', function () {
    result = this.value;


    AnsButton.addEventListener('click', function () {
        AnswerSound()
        years = result * 1;
        months = result * 12;
        weeks = result * 52.1429;
        days = result * 365;
        hours = result * 8760;
        minutes = result * 525600;
        seconds = result * 3.154e+7;
        resy.value = years;
        resm.value = months;
        resw.value = weeks;
        resd.value = days;
        resh.value = hours;
        resmin.value = minutes;
        ress.value = seconds;
    })
    ClearButton.addEventListener('click', function () {
        age.value = "";
        resy.value = "";
        resm.value = "";
        resw.value = "";
        resd.value = "";
        resh.value = "";
        resmin.value = "";
        ress.value = "";
        ClearSound()
    })
})
