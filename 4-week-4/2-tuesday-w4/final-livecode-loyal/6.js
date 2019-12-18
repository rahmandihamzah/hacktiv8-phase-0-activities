/**
 * ================
 * String Evaluator
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function untuk menghitung kalkulasi dari input yang bentuknya berupa string
 * Operator yang digunakan adalah + - * /
 * 
 * Rules
 * -----
 * 1. WAJIB dilakukan dengan rekursif
 * 2. dilarang menggunakan built-in function eval
 * 3. Dilarang menambah dan merubah tipe data parameter
 * 4. Dilarang membuat function lain selain evaluate
 */

function evaluate(str) {
  let arrTemp = [];
  let operator;
  let result;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '+' || str[i] !== '-' || str[i] !== '*' || str[i] !== '/') {
      arrTemp.push(str[i]);
    }
  }

  return arrTemp;
}

console.log(evaluate('1+2+3+4+5')) // 15
console.log(evaluate('1*2*3*4*5')) // 120
console.log(evaluate('20/4')) // 5
console.log(evaluate('20-6')) // 14