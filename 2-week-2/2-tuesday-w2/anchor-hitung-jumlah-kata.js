/*
PSEUDOCODE

STORE "kalimat" with any string
STORE "jumlahKalimat" without any value

STORE "i" with 0
FOR EACH "i" to length of "kalimat" - 1
    IF index "i" value of "kalimat" = " " or "i" = length of "kalimat" - 1 THEN
        SET "jumlahKalimat" with "jumlahKalimat" + 1
    END IF
END LOOP
*/

let kalimat = 'I have a dream';
console.log(`Kalimat : ${kalimat}`);
let jumlahKata = 0;

for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === ' ' &&  kalimat[i - 1] !== ' ' || i === kalimat.length - 1) {
        jumlahKata++;
    }
}

console.log(`Jumlah kata : ${jumlahKata}`);
console.log('==================================')


let kalimat1 = 'I believe I can code';
console.log(`Kalimat : ${kalimat1}`);
let jumlahKata1 = 0;

for (let i = 0; i < kalimat1.length; i++) {
    if (kalimat1[i] === ' ' || i === kalimat1.length - 1) {
        jumlahKata1++;
    }
}

console.log(`Jumlah kata : ${jumlahKata1}`);
console.log('==================================')


let kalimat2 = 'I';
console.log(`Kalimat : ${kalimat2}`);
let jumlahKata2 = 0;

for (let i = 0; i < kalimat2.length; i++) {
    if (kalimat2[i] === ' ' || i === kalimat2.length - 1) {
        jumlahKata2++;
    }
}

console.log(`Jumlah kata : ${jumlahKata2}`);















// console.log(kalimat.length);

// console.log(kalimat[kalimat.length -1]);

// for (let i = 0; i < kalimat.length; i++) {
//     console.log(i + ' ' + kalimat[i] + ' ' + kalimat.indexOf(kalimat[i]));
//     if (kalimat[i] === ' ') {
//         jumlahKalimat++;
//     } else if (kalimat.indexOf(kalimat[i]) === kalimat.length) {
//         jumlahKalimat++;
//     }
// }

// console.log(jumlahKalimat);