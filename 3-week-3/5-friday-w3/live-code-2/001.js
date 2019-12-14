/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima dua parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil perkalian angka di kedua array tersebut.
Apabila pada array pertama tidak memiliki pasangan indeks yang sama pada array kedua (atau sebaliknya) maka akan dikalikan dengan angka 0.
Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil, kemudian kalikan semua nilai ganjil tersebut dan return hasil perkalian ganjilnya.


Pola
----
input: [x, y, z, a, b] dan [d, e, f, g]
proses:
[
  (x * d)
  (y * e)
  (z * f)
  (a * g)
  (b * 0) --> karena b tidak memiliki pasangan di array kedua
]

Contoh
-------
Input: [ 3, 5, 2 ] dan [ 7, 5, 4 ]
Proses:
=> [ (3 * 7) , (5 * 5), (2 * 4) ]
=> [ 21, 25, 8 ]
=> nilai ganjil: 21 dan 25
=> 21 * 25
Output: 525


Input: [ 1, 2, 3, 2 ] dan [ 3, 5 ]
Proses:
=> [ (1 * 3), (2 * 5), (3 * 0), (2 * 0) ]
=> [ 3, 10, 0, 0 ]
=> nilai ganjil: 3
Output: 3

Input: [4, 5, 8, 2] dan [9, 1, 2, 4, 9, 2]
Proses:
=> [ 63, 5, 16, 15, 0, 0 ]
=> nilai ganjil: 63, 5, 15
=> 63 * 5 * 15
Output: 4725

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
- tidak boleh menggunakan .eval
*/

function multiplyTheOdds(arrOperand1, arrOperand2) {
  let newArray = [];
  let ganjil = 1;

  if (arrOperand1.length > arrOperand2.length) {
    let toRun = true;
    let i = 0;
    while (toRun) {
    
      if (i === arrOperand1.length) {
        toRun = false;
      } else if (i < arrOperand2.length) {
          for (let j = 0; j < arrOperand2.length; j++) {
            newArray.push(arrOperand1[i] * arrOperand2[j]);
            i++
          }
      } else {
        newArray.push(arrOperand1[i] * 0);
        i++
      }

        
    }

  } else {
    let toRun = true;
    let i = 0;
    while (toRun) {
      if (i === arrOperand2.length) {
        toRun = false;
      } else if (i < arrOperand1.length) {
          for (let j = 0; j < arrOperand1.length; j++) {
            newArray.push(arrOperand2[i] * arrOperand1[j]);
            i++
          }
      } else {
        newArray.push(arrOperand2[i] * 0);
        i++
      }

    }
  }

  // console.log(newArray.length)
  if (newArray.length === 0) {
    ganjil = 0;
  } else {
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] % 2 !== 0) {
        ganjil *= newArray[i]
      }
    }
  }

  return ganjil;
  // return newArray;
}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); //0
