function changeMe(arr) {
    let newObj = {};

    if (arr.length === 0) {
        console.log("''");
    } else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (j === 0) {
                    newObj.firstName = arr[i][j];
                } else if (j === 1) {
                    newObj.lastName = arr[i][j];
                } else if (j === 2) {
                    newObj.gender = arr[i][j];
                } else if (j === 3) {
                    if (arr[i][j] > 2019) {
                        newObj.age = 'Invalid Birth Year';
                    } else {
                        newObj.age = 2019 - arr[i][j];
                    }
                }
            }
    
            if (arr[i][3] === undefined) {
                newObj.age = 'Invalid Birth Year';
            }

            console.log(`${i + 1}. ${newObj.firstName} ${newObj.lastName}: `);
            console.log(newObj);
        }
    }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""