let num = 6;

let i = 1;
while (i <= num) {
    let j = i;
    while (j <= num) {
        process.stdout.write(" ")
        j++;
    }

    let k = 1;
    while (k <= i + (i - 1)) {
        if (k % 2 !== 0) {
            process.stdout.write("x");
        } else{
            process.stdout.write("o");
        }
        k++;
    }

    console.log("");
    i++
}