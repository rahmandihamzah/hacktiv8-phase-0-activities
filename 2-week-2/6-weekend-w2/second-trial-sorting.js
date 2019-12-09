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