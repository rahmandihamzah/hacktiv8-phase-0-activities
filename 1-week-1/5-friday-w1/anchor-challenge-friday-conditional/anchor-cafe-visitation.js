/*
PSEUDOCODE

STORE 'name' with any string
STORE 'age' with any number grether than 0
STORE 'money' with any number grather than 0

IF 'name' = '' THEN
    DISPLAY 'Anda tidak boleh masuk!'
ELSE IF 'age' < 17 THEN
    SHOW juice
    IF 'money' < 50000 THEN
        DISPLAY 'Uang anda tidak cukup. Anda harus pulang'
    ELSE
        'Anda bisa pesan minum. Sisa uang anda: ' CALCULATE 'money' - 50000
    END IF
ELSE
    SHOW anggur
    IF 'money' < 300000 THEN
        DISPLAY 'Uang anda tidak cukup. Anda harus pulang'
    ELSE
        'Anda bisa pesan minum. Sisa uang anda: ' CALCULATE 'money' - 300000'
    END IF
END IF
*/

let name = 'Dedi';
let age = 17;
let money = 350000;

if (name === '') {
    console.log('Anda tidak boleh masuk!');
} else if (age < 17) {
    console.log('juice');
    if (money < 50000) {
        console.log('Uang anda tidak cukup. Anda harus pulang');
    }
    else {
        console.log('Anda bisa pesan minum. Sisa uang anda: ' + (money -50000))
    }
} else {
    console.log('anggur');
    if (money < 300000) {
        console.log('Uang anda tidak cukup. Anda harus pulang');
    }
    else {
        console.log('Anda bisa pesan minum. Sisa uang anda: ' + (money -300000))
    }
}