//Given a number input, add up all the numbers from 1 to the number input.
//For example, if the input is 4 then you should return 10 because 1 + 2 + 3 + 4 = 10.
//checker:
//5 = 15
//100 = 5050
//127 = 8128


let num = 127;
let temp = 0;

for (let i = 1; i <= num; i++) {
    temp += i;
}

console.log(temp);