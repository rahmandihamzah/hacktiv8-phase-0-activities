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

let kata = '8t4k1397$8'
let ganjil = 0;
let genap = 0;

for (let i = 0; i < kata.length; i++) {
    if (kata[i] === '0' || kata[i] === '1' || kata[i] === '2' || kata[i] === '3' || kata[i] === '4' || kata[i] === '5' || kata[i] === '6' || kata[i] === '7' || kata[i] === '8' || kata[i] === '9') {
        if (+kata[i] % 2 === 0) {
            genap += +kata[i];
        } else {
            ganjil += +kata[i];
        }
    }
}

if (ganjil < genap) {
    console.log(`Ganjil dengan hasil penjumlahan ${ganjil}`);
} else if (ganjil > genap) {
    console.log(`Genap dengan hasil penjumlahan ${genap}`);
} else {
    console.log('seimbang');
}