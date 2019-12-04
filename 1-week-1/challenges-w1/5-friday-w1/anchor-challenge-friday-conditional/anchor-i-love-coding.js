/*
PSEUDOCODE

- LOOPING FOR PERTAMA
STORE "i" with 1
FOR EACH "i" to 20
    PRINT "'i' - I love coding"
END FOR

- LOOPING FOR KEDUA
STORE "i" with 20
FOR EACH "i" to 1
    PRINT "'i' - I will become fullstack developer"
END FOR

- LOOPING WHILE PERTAMA
STORE "genap" with 2
WHILE "genap" <= 20 DO
    PRINT "'genap' - I love coding"
    SET "genap" with "i" + 2
END WHILE

- LOOPING WHILE KEDUA
STORE "genap1" with 20
WHILE "genap1" >= 2 DO
    PRINT "'genap2' - I love coding"
    SET "genap1" with "1" - 2
END WHILE
*/

console.log('LOOPING FOR PERTAMA');
for(let i = 1; i <= 20; i++){
    console.log(i + ' - I love coding');
}

console.log('LOOPING FOR KEDUA');
for(let i = 20; i >= 1; i--){
    console.log(i + ' - I will become fullstack developer');
}

console.log('LOOPING WHILE PERTAMA');
let genap = 2;
while (genap <= 20) {
    console.log(genap + ' - I love coding');
    genap+=2;
}

console.log('LOOPING WHILE KEDUA');
let genap1 = 20;
while (genap1 >= 2) {
    console.log(genap1 + ' - I will become fullstack developer');
    genap1-=2;
}