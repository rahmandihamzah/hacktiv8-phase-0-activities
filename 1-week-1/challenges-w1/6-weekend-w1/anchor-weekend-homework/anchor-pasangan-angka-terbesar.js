/*
PSEUDOCODE

STORE "angka1" with any number
STORE "convertAngka1" with convert number to string function
STORE "bis1" without any value
STORE "bun1" without any value
STORE "win1" with empty string

STORE "i" with 0
FOR EACH "i" to length of "convertAngka1" - 1

    SET "bis1" with index "i" value of "convertAngka1" + index "i" + 1 value of "convertAngka1"

    IF "i" < length of "convertAngka1" - 2 THAN
        SET "bun1" with index "i" + 1 value of "convertAngka1" + index "i" + 2 value of "convertAngka1"
    END IF

    IF "bis1" > "win" THEN
        IF "bis1" > "bun1" THEN
            SET "win1" with "bis1" value
        ELSE
            SET "win1" with "bun1" value
        END IF
    END IF
END FOR

DISPLAY "win1"

*/

let angka1 = 641573;
let convertAngka1 = angka1.toString();
let bis1;
let bun1;
let win1 = '';

for (let i = 0; i < convertAngka1.length - 1; i++) {
    bis1 = convertAngka1[i] + convertAngka1[i + 1];
    // console.log(bis1);
    
    if (i < convertAngka1.length - 2) {
        bun1 = convertAngka1[i + 1] + convertAngka1 [i + 2];
        // console.log(bun1);
    }

    if (bis1 > win1) {
        if (bis1 > bun1){
            // console.log(win1);
            win1 = bis1;
        } else {
            win1 = bun1;
        }
    }
}

console.log('pasangan angka terbesar dari ' + angka1 + ' adalah: ' + win1);
console.log('==================');

let angka2 = 12783456;
let convertAngka2 = angka2.toString();
let bis2;
let bun2;
let win2 = '';

for (let i = 0; i < convertAngka2.length - 1; i++) {
    bis2 = convertAngka2[i] + convertAngka2[i + 1];
    // console.log(bis2);
    
    if (i < convertAngka2.length - 2) {
        bun2 = convertAngka2[i + 1] + convertAngka2 [i + 2];
        // console.log(bun2);
    }

    if (bis2 > win2) {
        if (bis2 > bun2){
            // console.log(win2);
            win2 = bis2;
        } else {
            win2 = bun2;
        }
    }
}

console.log('pasangan angka terbesar dari ' + angka2 + ' adalah: ' + win2);
console.log('==================');

let angka3 = 910233;
let convertAngka3 = angka3.toString();
let bis3;
let bun3;
let win3 = '';

for (let i = 0; i < convertAngka3.length - 1; i++) {
    bis3 = convertAngka3[i] + convertAngka3[i + 1];
    // console.log(bis3);
    
    if (i < convertAngka3.length - 2) {
        bun3 = convertAngka3[i + 1] + convertAngka3 [i + 2];
        // console.log(bun3);
    }

    if (bis3 > win3) {
        if (bis3 > bun3){
            // console.log(win3);
            win3 = bis3;
        } else {
            win3 = bun3;
        }
    }
}

console.log('pasangan angka terbesar dari ' + angka3 + ' adalah: ' + win3);
console.log('==================');

let angka4 = 79918293;
let convertAngka4 = angka4.toString();
let bis4;
let bun4;
let win4 = '';

for (let i = 0; i < convertAngka4.length - 1; i++) {
    bis4 = convertAngka4[i] + convertAngka4[i + 1];
    // console.log(bis4);
    
    if (i < convertAngka4.length - 2) {
        bun4 = convertAngka4[i + 1] + convertAngka4 [i + 2];
        // console.log(bun4);
    }

    if (bis4 > win4) {
        if (bis4 > bun4){
            // console.log(win4);
            win4 = bis4;
        } else {
            win4 = bun4;
        }
    }
}

console.log('pasangan angka terbesar dari ' + angka4 + ' adalah: ' + win4);
console.log('==================');


// Latian live code

let ang = 345647;
let convertAng = ang.toString();
console.log(convertAng);
let a;
let b;
let w = '';

for (let i = 0; i < convertAng.length - 2; i++) {
    a = convertAng[i] + convertAng[i + 1];
    console.log(`a = ${a}`);

    b = convertAng[i + 1] + convertAng[i + 2];
    console.log(`b = ${b}`);

    if (a >= w) {
        if (a > b) {
            w = a
        } else {
            w = b
        }
    }
    console.log(w);
}
console.log(w);