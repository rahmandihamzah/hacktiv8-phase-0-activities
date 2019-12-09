function urutkanAbjad(str) {
let newWord = '';
let arrStr = [];
let abjad = 'abcdefghijklmnopqrstuvwxyz'

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

for (let i = 0; i < abjad.length; i++) {
    for (let j = 0; j < arrStr.length; j++) {
        if (abjad[i] === arrStr[j][0]) {
            if (arrStr[j].length > 1) {
                for (let k = 0; k < arrStr[j].length; k++) {
                    newWord += arrStr[j][k];
                }
            } else {
                newWord += arrStr[j][0];
            }
        }
    }
}

return str + ' => ' + newWord;
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'