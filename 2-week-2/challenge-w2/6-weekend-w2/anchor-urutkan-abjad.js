/*
1  2  4  3  4  6  7

1 masuk variabel a
a = 1

cek apakah 2 lebih besar dari yg ada di a? ya
jika ya, 2 masuk ke a. yg ada di a masuk ke b
a = 2
b = 1

cek apakah 4 lebih besar dari yg ada di a? ya
jika ya, 4 masuk ke a. yg ada di a ditambahkan ke b
a = 4
b = 1  2

cek apakah 3 lebih besar dar yg ada di a? tidak
jika tidak, 3 ditambahkan ke b
a = 4
b = 1 2 3

dst

masukkan ke array satu2
hello => [[h], [e], [l,l], [o]]

jika str[i] === array[0][i] maka array[0][i].push(str[i])
*/

function urutkanAbjad(str) {
let newWord = '';
let temp = '';
let arrStr = [];

let isLast = false;
let j = 0;
while (isLast === false) {
    for (let i = 0; i < arrStr.length; i++) {
        if (str[j] === arrStr[i][0]) {
            arrStr[i].push(str[j]);
            j++;
        }
    }

    arrStr.push([str[j]]);
    
    if (j === str.length - 1) {
        isLast = true;
    }
    
    j++;
}

// for (let i = 0; i < arrStr.length; i++) {
//     // if (!temp) {
//     //     temp += arrStr[i][0];
//     // } 
//     // else {
//     // }
    for (let j = 0; j < arrStr.length; j++) {
        let k = 1;
        let isLast1 = false;
        while (isLast1 === false) {
            if (arrStr[j][0] > arrStr[j + k]) {
                k++;
                if (j === arrStr.length - 1) {
                    newWord += arrStr[j][0];
                    isLast1 = true;
                }
            } else {
                k++
                isLast1 = true;
            }
            console.log(newWord); 
        }
    }
// }
// newWord += temp;

return `${arrStr} || ${temp} || ${newWord}`;
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'