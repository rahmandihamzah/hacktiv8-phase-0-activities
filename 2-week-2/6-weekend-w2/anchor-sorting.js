function sorting(array) {
    let temp = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) { // jika array ke-j lebih besar dari array berikutnya
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}
  
console.log(sorting([ 2, 4, 6, 8, 2, 3 ])); //[ 2, 2, 3, 4, 6, 8 ]


function sortingByType(array) {
    let newArray = [];
    let temp;

    let isLast = false;
    let j = 0;
    while (isLast === false) { 
    /*
    looping ini untuk memberikan value ke array baru sesuai pengelompokan tipe data
    dengan catatan, hanya berlaku di test case ini karena belum menemukan logika yang benar
    (PERLU PERBAIKAN)
    */
        for (let i = 0; i < newArray.length; i++) {
            if (typeof array[j] === typeof newArray[i][0]) {
                newArray[i].push(array[j]);
                j++
            }
        }

        for (let i = 0; i < newArray.length; i++) {
            if (typeof array[j] === typeof newArray[i][0]) {
                newArray[i].push(array[j]);
            } 
        }

        if (j === array.length - 1) {
            isLast = true;
        } else {
            newArray.push([array[j]]);
            j++;
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray[i].length; j++) {
            for (let k = 0; k < newArray[j].length; k++) {
                if (newArray[j][k] > newArray[j][k + 1]) {
                    temp = newArray[j][k];
                    newArray[j][k] = newArray[j][k + 1];
                    newArray[j][k + 1] = temp;
                }
            }
        }
    }

    return newArray;
}
  
console.log(sortingByType([1, 3, 'array', -45, true, false, 'big']));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]


function sortAllClean(array) {
    let newArray = [];
    let temp;

    let isLast = false;
    let j = 0;
    while (isLast === false) { 
        for (let i = 0; i < newArray.length; i++) {
            if (array[j] !== null || array[j] !== [] || array[j] !== undefined || array[j] !== NaN) {
            } else if (typeof array[j] === typeof newArray[i][0]) {
                    newArray[i].push(array[j]);
                    j++
                }
        }

        for (let i = 0; i < newArray.length; i++) {
            if (typeof array[j] === typeof newArray[i][0]) {
                newArray[i].push(array[j]);
            } 
        }

        if (j === array.length - 1) {
            isLast = true;
        } else {
            newArray.push([array[j]]);
            j++;
        }
    }

    return newArray;
}
  
console.log(sortAllClean([ undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false ]));
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]

console.log(sortAllClean([ NaN, undefined ])); // []