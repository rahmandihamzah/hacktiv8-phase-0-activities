/*
PSEUDOCODE
- Odd Even Numbers 1.
STORE "i" with 1
FOR EACH "i" to 100
    IF "i" % 2 != 0 THEN
        PRINT "'i' - ganjil"
    ELSE IF "i" % 2 = 0 THEN
        PRINT "'i' - genap"
    END IF
END FOR

- Odd Even Numbers 2.
STORE "i" with 50
    FOR EACH "i" to 200
        IF "i" % 3 != 0 THEN
            PRINT "'i' - tidak bisa dibagi 3"
        ELSE IF "i" % 3 = 0 THEN
            PRINT "'i' - faktor 3"
        END IF
    END FOR
*/

console.log('Odd Even Numbers 1.');
for (let i = 1; i <= 100; i++){
    if (i % 2 !== 0) {
        console.log(i + ' - ganjil');
    } else if(i % 2 === 0){
        console.log(i + ' - genap');
    }
}
console.log('======================');

console.log('Odd Even Numbers 2.');
for (let i = 50; i <= 200; i += 5){
    if(i % 3 !== 0){
        console.log(i + ' - tidak bisa dibagi 3');
    } else if (i % 3 === 0){
        console.log(i + ' - faktor 3');
    }
}
console.log('======================');

console.log('Odd Even Numbers 3.');
for (let i = 100; i <= 200; i += 7){
    if(i % 8 === 0){
        console.log(i);
    }
}