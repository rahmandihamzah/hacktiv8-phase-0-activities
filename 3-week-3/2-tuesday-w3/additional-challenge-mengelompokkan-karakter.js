/**
 * ==========================================
 * MENGELOMPOKKAN KARAKTER DALAM JUMLAH KOLOM
 * ==========================================
 * 
 * [Instruction]
 * Buatlah sebuah function yang mengembalikan string berisi karakter-karakter
 *  yang sama dengan kalimat yang diinput tapi dikelompokkan dalam jumlah kolom
 * 
 * [Resctrictions]
 * 1. Spasi ' ' tidak dimasukkan dalam kelompok
 * 2. Function mengembalikan false jika input kurang dari 1
 *    ATAU input bukan number
 */
function baris(str, num){
    let temp = ''
    let a = 0;

    if (num <= 0) {
        temp = false;
    } else {
        for (i = a; i < str.length; i++) {
            for (let j = 0; j < num; j++) {
                if (i < str.length) {
                    if (str[i] === ' ') {
                        i++;
                        j--;
                    } else if (j === num - 1) {
                        temp += str[i];
                    } else {
                        temp += str[i];
                        i++;
                    }
                }
            }
            temp += '\n'
        }
        // console.log(temp);
    }
    
    return temp;
}

console.log(baris("HALO HALO BANDUNG LAUTAN API", 3));
/*
HAL
OHA
LOB
AND
UNG
LAU
TAN
API
*/
console.log(baris("INDONESIA TANAH AIR KU TANAH TUMPAH DARAHKU", 7));
/*
INDONES
IATANAH
AIRKUTA
NAHTUMP
AHDARAH
KU
*/
console.log(baris("HTML CSS JAVASCRIPT", 10));
/*
HTMLCSSJAV
ASCRIPT
*/
console.log(baris("HTML CSS JAVASCRIPT", 1));
/*
H
T
M
L
C
S
S
J
A
V
A
S
C
R
I
P
T
*/
console.log(baris("HACKTIV 8", 0)); // false