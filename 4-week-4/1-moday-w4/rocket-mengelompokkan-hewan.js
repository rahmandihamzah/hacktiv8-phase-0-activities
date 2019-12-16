function groupAnimals(animals) {
    let resultArray = [];

    for (let i = 0; i < animals.length; i++) {
        if (resultArray.length === 0) {
            resultArray.push([]);
            resultArray[resultArray.length - 1].push(animals[i]);   
        } else {
            for (let j = 0; j < resultArray.length; j++) {
                if (animals[i][0] === resultArray[j][0][0]) {
                    if (animals[i] !== resultArray[j][0]) {
                        resultArray[j].push(animals[i]);
                        j = resultArray.length;
                    } 
                } else if (j === resultArray.length - 1) {
                    resultArray.push([]);
                    resultArray[resultArray.length - 1].push(animals[i]);
                }
            }
        }
    }

    let status = true;
    while (status) {
        status = false;
        for (let i = 0; i < resultArray.length - 1; i++) {
            if (resultArray[i][0][0] > resultArray[i + 1][0][0]) {
                let temp = resultArray[i];
                resultArray[i] = resultArray[i + 1];
                resultArray[i + 1] = temp;
                status = false;
            }
        }
    }

    return resultArray;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]