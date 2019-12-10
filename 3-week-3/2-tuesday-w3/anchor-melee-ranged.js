function splitting(str) {
    let arrDiv = [];
    let temp = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            arrDiv.push([temp]);
            temp = '';
        } else if (str[i] === ',') {
            arrDiv[arrDiv.length - 1].push(temp);
            temp = '';
        } else if (i === str.length - 1) {
            temp += str[i]
            arrDiv[arrDiv.length - 1].push(temp);
        } 
        else {
            temp += str[i]
        }
    }

    return arrDiv;
}


function meleeRangedGrouping (str) {
    let splitResult = splitting(str);
    let groupResult = [];

    for (let i = 0; i < splitResult.length; i++) {
        if (groupResult.length === 0) {
            groupResult.push([splitResult[i][0]], []);
        } else {
            if (splitResult[i][1] === splitResult[0][1]) {
                groupResult[0].push(splitResult[i][0])
            } else {
                if (groupResult.length === 1) {
                    groupResult.push([splitResult[i][0]]);
                } else {
                    groupResult[1].push(splitResult[i][0]);
                }
            }
        }
    }

    return groupResult;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []