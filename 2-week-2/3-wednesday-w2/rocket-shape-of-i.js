let num = 6;
console.log(`num = ${num}`);
let dis = '';
let mid = '';

if (num >= 4 && num <= 10) {
    for (let i = 1; i <= num; i++) {
        if (i === 1 || i === num) {
            for (let j = 1; j <= num; j++) {
                dis += '#';
            }
            console.log(dis);
            dis = '';
        } else {
            if (num % 2 === 0) {
                for (let j = 1; j < (num / 2); j++) {
                    mid += ' '
                }
                for (let k = 1; k <= 2; k++) {
                    mid += '|';
                }
                console.log(mid);
                mid = '';
            } else {
                for (let j = 1; j < Math.ceil(num / 2); j++) {
                    mid += ' ';
                }
                for (let k = 1; k < 2; k++) {
                    mid += '|'
                }
                console.log(mid);
                mid = '';
            }
        }
    }
} else {
    console.log('Invalid number')
}