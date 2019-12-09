let rows1 = 5;

let i = 0;
while (i < 5) {
    console.log("*");
    i++;
}

console.log('==============');

let j = 0;
while (j < rows1) {
    let k = 0
    while (k < rows1) {
        process.stdout.write("*");
        k++;
    }
    console.log("");
    j++;
}

console.log('==============');

let l = 0;
while (l < rows1) {
    let m = 0;
    while (m < l + 1) {
        process.stdout.write("*");
        m++
    }
    console.log("");
    l++;
}

console.log('==============');

let n = 0;
while (n < rows1) {
    let o = rows1;
    while (o > n) {
        process.stdout.write("*");
        o--;
    }
    console.log("");
    n++;
}