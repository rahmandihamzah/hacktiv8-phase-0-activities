let kata = 'katak';
let newKata = '';

// for (let i = kata.length - 1; i >= 0; i--) {
//     newKata = newKata + kata[i];
// }

let i = kata.length - 1;
while (i >= 0) {
    newKata = newKata + kata[i];
    i-- 
}

console.log(`is '${kata}' Palindrome? `);
if (newKata === kata) {
    console.log(true);
} else {
    console.log(false);
}
console.log('=================================');



let kata1 = 'kasur rusak';
let newKata1 = '';

for (let i = kata1.length - 1; i >= 0; i--) {
    newKata1 = newKata1 + kata1[i];
}

console.log(`is '${kata1}' Palindrome? `);
if (newKata1 === kata1) {
    console.log(true);
} else {
    console.log(false);
}
console.log('=================================');



let kata2 = 'makan';
let newKata2 = '';

for (let i = kata2.length - 1; i >= 0; i--) {
    newKata2 = newKata2 + kata2[i];
}

console.log(`is '${kata2}' Palindrome? `);
if (newKata2 === kata2) {
    console.log(true);
} else {
    console.log(false);
}