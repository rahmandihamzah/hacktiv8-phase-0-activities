/*

Instruksi
----------
Diberikan sebuah variabel `kata` yang bertipe string. Nilai/value dari `kata`
merupakan sembarang gabungan semua karakter.

Buatlah program yang mengecek karakter angka dan mengecek apakah angka tersebut adalah
ganjil atau genap. Dan menjumlahkan dua kelompok angka tersebut secara terpisah.

Program akan menampilkan keterangan penjumlahan siapa yang lebih kecil (genap atau ganjil).
Jika hasil penjumlahan sama antara kelompok tersebut maka tampilkan "Seimbang"

Contoh 1:
let kata = 'ab1327^@4qb'

output yang diharapkan "Genap dengan hasil penjumlahan 6"

Contoh 2:
let kata = 't4k13978$82'

output yang diharapkan "Ganjil dengan hasil penjumlahan 20"

Contoh 3:
let kata = = '8t4k1397$8'

output yang diharapkan "Seimbang"
*/

//write your code here

let kata = '8t4k1397$8';
let genap = 0;
let ganjil = 0;

for (let i = 0; i < kata.length; i++) {
    if (isNaN(kata[i]) === false) {
        if (+kata[i] % 2 === 0) {
            genap += +kata[i];
        } else {
            ganjil += +kata[i];
        }
    }
}

if (genap > ganjil) {
    console.log(`Ganjil dengan hasil penjumlahan ${ganjil}`);
} else if (genap === ganjil) {
    console.log('Seimbang');
} else {
    console.log(`Genap dengan hasil penjumlahan ${genap}`);
}