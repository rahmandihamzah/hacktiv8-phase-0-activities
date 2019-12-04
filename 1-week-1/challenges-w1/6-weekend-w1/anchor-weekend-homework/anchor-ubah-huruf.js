/*
PSEUDOCODE

STORE "kata" with 'i love javascript'
STORE "newKata" without any value

STORE "i" with 0
FOR "i" to length of "kata" - 1
    IF index "i" value of "arrayKata" = "A" or "a" or "I" or "i" or "U" or "u" or "E" or "e" or "O" or "o" THEN
        REPLACE index "i" value of "arrayKata" with "$"
    END IF
END FOR

SET "newKata" with "arrayKata" convert to string result
DISPLAY "newKata"
*/

let kata = "i love javascript";
let arrayKata = [];
let newKata;

for (let i = 0; i < kata.length; i++) {
    arrayKata.push(kata[i]);

    if (arrayKata[i] === "A" || arrayKata[i] === "a" || arrayKata[i] === "I" || arrayKata[i] === "i" || arrayKata[i] === "U" || arrayKata[i] === "u" || arrayKata[i] === "E" || arrayKata[i] === "e" || arrayKata[i] === "O" || arrayKata[i] === "o") {
        arrayKata[i] = "$";
    }

}

newKata = arrayKata.join('');
console.log(newKata);



// Latihan live code
// let word = 'i love javascript';
// let arrayVocal = ['a', 'A', 'i', 'I', 'u', 'U', 'e', 'E', 'o', 'O'];
// let newWord = '';

// for (let i = 0; i < word.length ; i++) {
//     if (word[i] === arrayVocal[0]) {
        
//     }
// }
// console.log(newWord);