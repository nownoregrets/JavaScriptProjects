let klmtr = document.getElementById('klmtr');
console.log(klmtr);
let mtr = document.getElementById('mtr');
console.log(mtr);
klmtr.addEventListener('input', function () {
    k = this.value;
    m = k * 1000;
    mtr.value = m;
})
mtr.addEventListener('input', function () {
    m = this.value;
    k = m / 1000;
    klmtr.value = k;
})
