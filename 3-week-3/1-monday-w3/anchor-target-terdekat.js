function targetTerdekat(arr) {
    let isO = false;
    let i = 0;
    let x = '';
    let o = '';
    let jarak = 0;

    while (isO === false) {
        if (arr[i] === 'x') {
            x += i;
        } else if (arr[i] === 'o') {
            if (x === '') {
                o += i;
            } else {
                o += i
                jarak = o - (x[x.length - 1]);
                isO = true;
            }
        }

        if (i === arr.length) {
            jarak = x[0] - o;
            isO = true;
        }

        i++
    }

    if (x === '') {
        jarak = 0;
    }
    
    return jarak;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2