/*
1. {A: [1, 1], B: [3, 2]}

2. {
    A: (arr[A-1][A-1] TO arr[A-1][A+1]) TO (arr[A+1][a-1] TO arr[A+1][a+1])
}

*/

function findNeighbor(arr){
    let ref = [];
    let resultNeighbor = {};

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] === "string"){
                ref.push([]);
                ref[ref.length - 1].push(arr[i][j]);
                ref[ref.length - 1].push(i);
                ref[ref.length - 1].push(j);
            }
        }
    }

    // console.log(ref);
    
    for (let i = 0; i < ref.length; i++) {
        resultNeighbor[ref[i][0]] = [];
        for (let j = ref[i][1] - 1; j <= ref[i][1] + 1; j++) {
            // console.log('ini J ' + j + ' =====================');
            for (let k = ref[i][2] - 1; k <= ref[i][2] + 1; k++) {
                if (j >= 0 && j < arr.length && k >= 0 && k < arr[j].length && typeof arr[j][k] !== "string") {
                    // console.log('ini K ' + k);
                    resultNeighbor[ref[i][0]].push(arr[j][k]);     
                }
            }
        }
    }

    // let row;
    // let col;
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         if (typeof arr[i][j] === "string") {
    //             row = i;
    //             col = j;
    //         }
    //     }
    // }
    
    return resultNeighbor;

}

console.log(findNeighbor([
    [456, 871, 670, 122],
    [980, "A", 678, 231],
    [564, 671, 984, 776],
    [100, 203, "B", 156]
]));
/* OUTPUT:
{
    A: [456, 871, 670, 980, 678, 564, 671, 984],
    B: [671, 984, 776, 203, 156]
}
*/

console.log(findNeighbor([
    [456, 871, 670, "X"],
    [980, 564, 780, 231],
    ["Y", 671, "Z", 776],
    [100, 203, 122, 156]
]));
/* OUTPUT:
{
    X: [670, 780, 231],
    Y: [980, 564, 671, 100, 203],
    Z: [564, 780, 231, 671, 776, 203, 122, 156]
}
*/

console.log(findNeighbor([
    ["I", 871, 670, "J"],
    [980, 564, 780, 231],
    [456, 671, 980, 776],
    [100, 203, 122, "K"]
]));
/* OUTPUT:
{ 
    I: [ 871, 980, 564 ],
    J: [ 670, 780, 231 ],
    K: [ 980, 776, 122 ] 
}
*/