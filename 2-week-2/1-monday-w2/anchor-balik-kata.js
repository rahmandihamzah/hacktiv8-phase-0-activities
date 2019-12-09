/*
PSEUDOCODE

STORE "kata" with 'Javascript'
STORE "arrayKata" with empty array
STORE "newArrayKata" with empty array
STORE "temp" without any value
STORE "newKata" without any value

STORE "i" with 0
FOR EACH "i" to length of "kata" - 1
    index [i] value of "arrayKata" = index [i] value of "kata"
END LOOP

STORE "i" with 0
FOR EACH "i" to length of "arrayKata" - 1
    SET "temp" with length of "arrayKata" - (i + 1) value of "arrayKata"
    SET index "i" value of "newArrayKata" with value of "temp"

    STORE "j" with 0
    FOR EACH "j" to length of newArrayKata -1
        SET "newKata" with value of "newKata" + index "i" value of newArrayKata
    END LOOP
END LOOP

DISPLAY "newKata"
*/

let kata = 'Javascript'
let arrayKata = [];
let newArrayKata = [];
let temp;
let newKata = '';

for (let i = 0; i < kata.length; i++) {
    arrayKata[i] = kata[i];
}

for (let i = 0; i < arrayKata.length; i++) {
    temp = arrayKata[arrayKata.length - (i + 1)];
    newArrayKata[i] = temp;
    for (let j = i; j < newArrayKata.length; j++) {
        newKata = newKata + newArrayKata[i];
    }
}

console.log(newKata);


console.log('===========================')

// latihan live code
let word = "Javasript"
let newWord = '';
// let temp;

for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
    console.log(newWord);
}
console.log(newWord);
