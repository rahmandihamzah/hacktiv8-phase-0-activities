/**
 * ============
 * Checkerboard
 * ============
 * 
 * [Instruction]
 * Buatlah sebuah function yang mengembalikan string berupa
 * asterisk yang berbentuk pola seperti papan catur.
 * 
 * [Resctrictions]
 * 1. Result selalu dimulai dari asterisk '*' bukan spasi ' '
 * 2. Function mengembalikan 'Invalid' jika input kurang dari 1
 *    ATAU input bukan number
 */

function checkerBoard(num) {
     // Write your code here
    let content = '';
    if (num < 1 || typeof num !== "number") {
        return 'Invalid';
    } else {
        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                if ((j + i) % 2 !== 0) {
                    content += ' ';
                } else {
                    content += '*';
                }
            }
            content += '\n';
        }
        return content;
    }
}
  
  console.log(checkerBoard(1))
  // *
  console.log('===========================');
  console.log(checkerBoard(2))
  // * 
  //  *
  console.log('===========================');
  console.log(checkerBoard(3))
  // * *
  //  *
  // * *
  console.log('===========================');
  console.log(checkerBoard(4))
  // * *
  //  * *
  // * *
  //  * *
  console.log('===========================');
  console.log(checkerBoard(5))
  // * * *
  //  * *
  // * * *
  //  * *
  // * * *
  console.log('===========================');
  console.log(checkerBoard(-1)) // Invalid
  console.log('===========================');
  console.log(checkerBoard('5')) // Invalid
  console.log('===========================');
  console.log(checkerBoard(false)) // Invalid
  // content = '';
    // content = '';