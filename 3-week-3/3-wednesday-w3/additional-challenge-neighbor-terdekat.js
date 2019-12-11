/*
1. {A: [1, 1], B: [3, 2]}

2. {
    A: (arr[A-1][A-1] TO arr[A-1][A+1]) TO (arr[A+1][a-1] TO arr[A+1][a+1])
}

*/

function findNeighbor(arr){
    let ref = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] === "string"){
                ref[arr[i][j]] = [];
                ref[arr[i][j]].push(j);
                ref[arr[i][j]].push(i);
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === ref) {
                
            }
        }
    }

    return ref;

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