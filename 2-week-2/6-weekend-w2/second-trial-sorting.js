function sortAllClean(array) {
    let newArray = [[],[],[]];
    let temp;
    
    // for (let i = 0; i < array.length; i++) {
    //     console.log(typeof array[i]);

    //     if (typeof array[i] === 'number') {
    //         if (!isNaN === false) {
    //             newArray[0].push(array[i]);
    //         }
    //     } else if (typeof array[i] === 'string') {
    //         newArray[1].push(array[i]);
    //     } else if (typeof array[i] === 'boolean') {
    //         newArray[2].push(array[i]);
    //     }
    // }



    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] !== NaN || array[i] !== undefined || array[i] !== [] || array[i] !== null) {
    //         for (let j = 0; j < newArray1.length; j++) {
    //             if (typeof array[i] === typeof newArray1[j][0]) {
    //                 newArray1[j].push(array[i]);
    //                 i++;
    //             }
    //         }
    //         newArray1.push([array[i]]);
    //     }

    // }



    // let newArray1 = [];

    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < newArray1.length; j++) {
    //         if (array[i] !== NaN || array[i] !== undefined || array[i] !== [] || array[i] !== null) {
    //             if (typeof array[i] === typeof newArray1[j][0]) {
    //                 newArray1[j].push(array[i]);
    //                 // i++;
    //             } else {
    //                 newArray1.push([array[i]]);
    //             }
    //         }
    //     }
    // }



    // let newArray2 = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] !== undefined && array[i] !== null && isNaN(array[i]) === false) {
    //         console.log(array[i]);
    //         if (newArray2.length === 0) {
    //             newArray2.push([array[i]]);
    //         } else {
    //             for (let j = 0; j < newArray2.length; j++) {
    //                 // console.log(newArray2[j]);
    //                 // console.log(j);
    //                 if (typeof array[i] === typeof newArray2[j][0]) {
    //                     newArray2[j].push(array[i]);
    //                 } else if (j === newArray2.length - 1) {
    //                     newArray2.push([array[i]]);
    //                 }
    //             }
    //         }
    //     }
    // }


    let newArray2 = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < newArray2.length; j++) {
        }
    }


    return newArray2;
}
  
console.log(sortAllClean([ undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false ]));
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]

console.log(sortAllClean([ NaN, undefined ])); // []