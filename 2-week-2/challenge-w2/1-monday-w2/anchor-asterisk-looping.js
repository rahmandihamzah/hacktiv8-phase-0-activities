/*
PSEUDOCODE

1. Menyusun barisan bintang
STORE "rows1" with 5

STORE "i" with 0
FOR "i" to value of "rows1"
    DISPLAY "*"
END LOOP
============

2. Menyusun Barisan Bintang Dengan Nested Looping

STORE "rows2" with 5

STORE "i" with 0
FOR EACH "i" to value of "rows2"
    STORE "j" to 0
    FOR EACH "j" to value of "rows2"
        DISPLAY "*"
    END LOOP
    DISPLAY break line
END LOOP
============

3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

STORE "rows3" with 5

STORE "i" with 0
FOR EACH "i" to value of rows3
    STORE "j" with 0
    FOR EACH "j" to value of "i" + 1
        DISPLAY "*"
    END LOOP

    DISLAY bleak line
END LOOP
============

4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping

STORE "rows4" with 5

STORE "i" with 0
FOR EACH "i" to value of rows4
    STORE "j" with "rows4"
    FOR EACH "j" to value of rows4
        DISPLAY "*"
    END LOOP
    DISPLAY bleak line
END LOOP
============
*/

// 1. Menyusun Barisan Bintang
console.log("1. Menyusun Barisan Bintang");

let rows1 = 5;

for (let i = 0; i < rows1; i++) {
    console.log("*");
}

console.log("===========================");


// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping");

let rows2 = 5;
let content2 = '';

for (let i = 0; i < rows2; i++) {
    for (let j = 0; j < rows2; j++) {
        content2 += '*';
    }
    console.log(content2);
    content2 = '';
}

console.log("===========================");


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");

let rows3 = 5;
let content3 = '';

for (let i = 0; i < rows3; i++) {
    for (let j = 0; j < i + 1; j++) {
        content3 += '*';
    }
    console.log(content3);
    content3 = '';
}

console.log("===========================");


// 4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping
console.log("4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping");

let rows4 = 5;
let content4 = '';

for (let i = 0; i < rows4; i++) {
    for (let j = rows4; j > i; j--) {
        content4 += '*';
    }
    console.log(content4);
    content4 = '';
}