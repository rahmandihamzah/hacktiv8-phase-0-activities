/*

Instruksi
----------
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
- isi dari tangga adalah angka 1 yang ditambahkan secara terus menerus
- Jika digit angka lebih dari 1 maka yang diambil adalah angka terakhir

contoh 1 (height = 3):

123
45
6

contoh 2 (height = 5):

12345
6789
012
34
5

contoh 3 (height = 7):

1234567
890123
45678
9012
345
67
8

tinggi tangga sesuai dengan nilai variable height
Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var height = 7; // isi dengan nilai tinggi tangga!
let num = 1;
let content = '';

for (let i = 1; i <= height; i++) {
// loping baris
    for (let j = i; j <= height; j++) {
    // looping isi baris dengan angka 1 - 9. isi baris sebanyak i s/d jumlah baris
        content += num;
        if (num === 9) {
        // isi maksimal adalah angka 9. jika sudah di angka 9 variabel num direset ke 0
            num = 0;
        } else {
            num++;
        }
    }
    console.log(content);
    content = '';
}
