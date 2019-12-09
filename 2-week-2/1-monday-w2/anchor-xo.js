let kata1 = 'xoxoxo';
console.log("case kata = " + kata1);
let temp1 = '';
let cond1 = '';

for (let i = 0; i < kata1.length; i++) {
    if (kata1[i] === 'x') {
        temp1 = temp1 + kata1[i];
    } else {
        cond1 = cond1 + kata1[i];
    }
}

console.log(temp1 + ' : ' + temp1.length);
console.log(cond1 + ' : ' + cond1.length);
console.log('jumlah x = jumlah o ? ');

if (temp1.length === cond1.length) {
    console.log(true);
} else{
    console.log(false);
}

console.log("=============");


let kata2 = 'oxooxox';
console.log("case kata = " + kata2);
let temp2 = '';
let cond2 = '';

for (let i = 0; i < kata2.length; i++) {
    if (kata2[i] === 'x') {
        temp2 = temp2 + kata2[i];
    } else {
        cond2 = cond2 + kata2[i];
    }
}

console.log(temp2 + ' : ' + temp2.length);
console.log(cond2 + ' : ' + cond2.length);
console.log('jumlah x = jumlah o ? ');

if (temp2.length === cond2.length) {
    console.log(true);
} else{
    console.log(false);
}

console.log("=============");