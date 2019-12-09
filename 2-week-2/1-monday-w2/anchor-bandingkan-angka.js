/*
PSEUDOCODE

STORE "angka1" with any number
STORE "angka2" with any number

IF "angka2" > "angka1" THEN
    DISPLAY true
ELSE IF "angka2" < "angka1" THEN
    DISPLAY false
ELSE 
    DISPLAY "-1"
END IF
*/

console.log('case false');
let angka11 = 5;
let angka21 = 3;

console.log(angka21 + ' > ' + angka11 + ' ?');

if (angka21 > angka11) {
    console.log(true);
} else if (angka21 < angka11) {
    console.log(false);
} else {
    console.log('-1');
}
console.log('=============');


console.log('case true');
let angka12 = 3;
let angka22 = 5;

console.log(angka22 + ' < ' + angka12 + ' ?');
if (angka22 > angka12) {
    console.log(true);
} else if (angka22 < angka12) {
    console.log(false);
} else {
    console.log('-1');
}
console.log('=============');


console.log('case -1');
let angka13 = 5;
let angka23 = 5;

console.log(angka23 + ' = ' + angka13 + ' ?');

if (angka23 > angka13) {
    console.log(true);
} else if (angka23 < angka13) {
    console.log(false);
} else {
    console.log('-1');
}
console.log('=============');


console.log('=============');

// latihan live code
console.log('case true');
let angka14 = 5;
let angka24 = 3;

console.log(angka24 + ' < ' + angka14 + ' ?');
if (angka24 > angka14) {
    console.log(true);
} else if (angka24 < angka14) {
    console.log(false);
} else {
    console.log('-1');
}