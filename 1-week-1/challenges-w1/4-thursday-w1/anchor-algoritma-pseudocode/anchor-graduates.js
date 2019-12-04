/*
ALGORITMA

1. Simpan "nama" dengan nilai string
2. Simpan "nilai" dengan nilai angka 0 sampai 5
3. Simpan "absen" dengan nilai angka berapapun
4. Jika "nilai" lebih dari atau sama dengan 70 dan "absen" kurang dari 5, maka masuk ke step 5. Jika tidak, maka abaikan step 5 dan langsung ke step 6
5. tampilkan "'nama' lulus"
6. tampilkan "'nama' tidak lulus"


PSEUDOCODE

STORE "nama" with any string
STORE "nilai" with any number
STORE "absen" with a number from 0 to 5

IF "nilai" >= 70 & "absen" <5 THAN
    DISPLAY "'nama' lulus"
ELSE
    DISPLAY "'nama' tidak lulus"
ENDIF
*/

let nama = "Dedi";
let nilai = 71;
let absen = 6;

if (nilai >= 70 && absen <= 5) {
    console.log(`${nama} lulus`);
} else {
    console.log(`${nama} tidak lulus`);
}