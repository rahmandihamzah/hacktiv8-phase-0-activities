/*
PSEUDOCODE

STORE "angka" with any number
STORE "convertAngka" without any value
STORE "temp" with empty string


STORE "i" with value of angka
FOR EACH "i" to value of "angka" + 1
    SET "convertAngka" with conertion "angka" to string result

    STORE "j" with length of convertAngka - 1
    FOR EACH "j" to 0
        SET "temp" with "temp" + velue of index "j"
    END LOOP

    IF value of "temp" = value of "convetrtAngka" THEN
        DISPLAY "temp"
        BREAK
    END IF

END LOOP
*/

let angka = 10;
console.log(`angka palindrom selanjutnya dari angka ${angka} adalah :`);
let convertAngka;
let temp = '';

i = angka;
let isPalindrome = false;
while (isPalindrome === false) {

    convertAngka = i.toString();
    
    for (let j = convertAngka.length - 1; j >= 0; j--) {
        temp += convertAngka[j];
    }
    
    if (temp === convertAngka) {
        isPalindrome = true;
        console.log(temp);
    }

    temp = '';
    i++;
}
console.log('===================')

let angka1 = 175;
console.log(`angka palindrom selanjutnya dari angka ${angka1} adalah :`)
let convertAngka1;
let temp1 = '';

i = angka1;
let isPalindrome1 = false;
while (isPalindrome1 === false) {

    convertAngka1 = i.toString();
    
    for (let j = convertAngka1.length - 1; j >= 0; j--) {
        temp1 += convertAngka1[j];
    }
    
    if (temp1 === convertAngka1) {
        isPalindrome1 = true;
        console.log(temp1);
    }

    temp1 = '';
    i++;
}