function graduates (students) {
    let resultObj = {};

// code sebelum review
    // if (students.length === 0) {
    //     resultObj = {}
    // } else {
    //     for (let i = 0; i < students.length; i++) {
    //         if (students[i].score >= 75) {
    //             if (resultObj === undefined) {
    //                 resultObj = {};
    //                 resultObj[students[i].class] = [];
    //                 resultObj[students[i].class].push({});
    //                 resultObj[students[i].class][resultObj[students[i].class].length - 1].name = students[i].name;
    //                 resultObj[students[i].class][resultObj[students[i].class].length - 1].score = students[i].score;
    //             } else if (resultObj.hasOwnProperty(students[i].class)) {
    //                 resultObj[students[i].class].push({});
    //                 resultObj[students[i].class][resultObj[students[i].class].length - 1].name = students[i].name;
    //                 resultObj[students[i].class][resultObj[students[i].class].length - 1].score = students[i].score;
    //             } else {
    //                 resultObj[students[i].class] = [];
    //                 resultObj[students[i].class].push({});
    //                 resultObj[students[i].class][resultObj[students[i].class].length - 1].name = students[i].name;
    //                 resultObj[students[i].class][resultObj[students[i].class].length - 1].score = students[i].score;
    //             }
    //         }
    //     }
    // }

// code setelah review
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= 75) {
            if (resultObj[students[i].class] === undefined) {
                resultObj[students[i].class] = [];
                resultObj[students[i].class].push({});
                resultObj[students[i].class][resultObj[students[i].class].length - 1].name = students[i].name;
                resultObj[students[i].class][resultObj[students[i].class].length - 1].score = students[i].score;
            } else {
                resultObj[students[i].class].push({});
                resultObj[students[i].class][resultObj[students[i].class].length - 1].name = students[i].name;
                resultObj[students[i].class][resultObj[students[i].class].length - 1].score = students[i].score;
            }
        }        
    }

    return resultObj;
}

console.log(graduates([
{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
},
{
    name: 'Alisa',
    score: 76,
    class: 'wolves'
},
{
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
},
{
    name: 'Albert',
    score: 71,
    class: 'wolves'
},
{
    name: 'Viktor',
    score: 80,
    class: 'tigers'
}
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}