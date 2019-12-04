/*
PEUDOCODE
STORE num with any number

STORE "i" with 0
FOR EACH "i" to value of "num"
    STORE "j" with value of i
    FOR EACH "j" to value of "num"
        DISPLAY " "
    END LOOP

    STORE "k" with 1
    FOR EACH "k" to "i" + (i - 1);
        IF "k" mod 2 != 0 THEN
            DISPLAY "x"
        ELSE 
            DISPLAY "o"
        END IF

    DISPLAY break line
END LOOP
*/

let num = 3;
console.log('num = ' + num);
let cont1 = '';
let cont2 = '';

for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
        cont1 += ' ';
    }
    
    for (let k = 1; k <= i + (i - 1); k++) {
        if (k % 2 !== 0) {
            cont2 += 'x';
        } else {
            cont2 += 'o';
        }
    }
    
    console.log(cont1 + cont2)
    cont1 = '';
    cont2 = '';
}

console.log('=====================')

let num1 = 6;
console.log('num = ' + num1);
let cont11 = '';
let cont21 = '';

for (let i = 1; i <= num1; i++) {
    for (let j = i; j <= num1; j++) {
        cont11 += ' ';
    }
    
    for (let k = 1; k <= i + (i - 1); k++) {
        if (k % 2 !== 0) {
            cont21 += 'x';
        } else {
            cont21 += 'o';
        }
    }

    console.log(cont11 + cont21)
    cont11 = '';
    cont21 = '';
}