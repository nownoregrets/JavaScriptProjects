//Input Selectors
let put = document.getElementById('put');
// console.log(put);
let result = document.getElementById('result');
// console.log(result);
//Button Selectors
let equal = document.getElementById('equal');
// console.log(equal);
let cal = document.getElementById('cal');
// console.log(cal);
//Event Listners
put.addEventListener('input', function () {         //Put Event
    age = this.value;
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
                            }  //Last Else End
                        }  //5th Else End
                    }  //3th Else End
                }  //3rd Esle End
            }  //2nd Else End
        }  //1st Else End
        equal.addEventListener('click', function () {
            put.value = ""
            result.value = ""
        }) //Equal Event End
    }) //Cal Event End
}) // Put Event End
