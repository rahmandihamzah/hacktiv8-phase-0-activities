/*
ALGORITMA

1. Simpan "nama" dengan nilai string
2. Simpan "nilai" dengan nilai angka berapapun
3. Jika "nilai" lebih dari atau sama dengan 80 dan kurang dari atau sama dengan 100, maka tampilkan 'A'
4. Jika "nilai" lebih dari atau sama dengan 65 dan kurang dari atau sama dengan 79, maka tampilkan 'B'
5. Jika "nilai" lebih dari sama dengan 50 dan kurang dari sama dengan 64, maka tampilkan 'C'
6. Jika "nilai" lebih dari atau sama dengan 35 dan kurang dari atau sama dengan 49, maka tampilkan 'D'
7. Jika "nilai" lebih dari atau sama dengan 0 dan kurang dari atau sama dengan 34, maka tampilkan 'D'
8. Jika "nilai" kurang dari 0 lebih dari 100, maka tampilkan 'Nilai Invalid'


PSEUDOCODE

STORE "nama" with any string
STORE "nilai" with any number

IF nilai >= 80 & <= 100 THAN
    DISPLAY 'A'
ELSE IF nilai >= 65 & <= 79 THAN
    DISPLAY 'B'
ELSE IF nilai >= 50 & <= 64 THAN
    DISPLAY 'C'
ELSE IF nilai >= 35 & <= 49 THAN
    DISPLAY 'D'
ELSE IF nilai >= 0 & <= 34 THAN
    DISPLAY 'E'
ELSE
    DISPLAY "Nilai Invalid"
ENDIF
*/

let nama = 'Dedi';
let nilai = 20;

if (nilai >= 80 && nilai <= 100) {
    console.log('A');
} else if (nilai >= 65 && nilai <= 79) {
    console.log('B');
} else if (nilai >= 50 && nilai <= 64) {
    console.log('C');
} else if (nilai >= 35 && nilai <= 49) {
    console.log('D');
} else if (nilai >= 0 && nilai <= 34) {
    console.log('E');
} else {
    console.log('Nilai Invalid');
}