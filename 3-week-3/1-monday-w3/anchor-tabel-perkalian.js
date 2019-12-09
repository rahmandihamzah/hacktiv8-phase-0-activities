function tabelPerkalian(angka) {
    let resultArray = [];
    let temp;

    let isEnd = false;
    let i = 0;
    while (isEnd === false) {
        if (angka % i === 0) {
            if (angka / i === i) {
                resultArray.push(`${i}x${angka / i}`);
                isEnd = true;
            } else if (i === temp) {
                isEnd = true;
            } else {
                temp = angka/i;
                resultArray.push(`${i}x${angka / i}`);
            }
        }
        i++;
    }
    return resultArray;
}

// TEST CASES
console.log(tabelPerkalian(24)); // [ '1x24', '2x12', '3x8', '4x6' ]
console.log(tabelPerkalian(90)); // [ '1x90', '2x45', '3x30', '5x18', '6x15', '9x10' ]
console.log(tabelPerkalian(20)); // [ '1x20', '2x10', '4x5']
console.log(tabelPerkalian(179)); // [ '1x179' ]
console.log(tabelPerkalian(1)); // [ '1x1' ]