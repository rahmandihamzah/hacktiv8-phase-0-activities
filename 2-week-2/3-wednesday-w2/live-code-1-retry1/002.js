/*

Instruksi
=========
Di negara wkwkland, seseorang akan mengurus perpajakan. Untuk bisa mengurus, seseorang harus memiliki beberapa informasi:
1. name: nama yang tertera di KTP (harus memiliki nama, tidak boleh kosong)
2. age: umur pendaftar. Untuk bisa mengurus, minimal berumur 17 tahun.
3. citizenship: kewarganegaraan pendaftar.
Program akan melakukan tahap-tahap berikut:
Step 1. Jika name kosong, maka tampilkan di console "NAMA ANDA KOSONG! TIDAK BISA DAFTAR!" dan hentikan program.
Step 2. Jika age dibawah 17 tahun, maka tampilkan di console "BELUM CUKUP UMUR!" dan hentikan program.
Step 3. program akan mengenerate Tax ID dengan format:
  WKWK-<TAHUN> => untuk pendaftar yang warga negara 'wkwkland'. <TAHUN> mewakili selisih tahun 2017 dengan umur.
  ABCD-<TAHUN> => untuk pendaftar yang bukan warga negara 'wkwkland'. <TAHUN> mewakili selisih tahun 2017 dengan umur.
  Contoh:
  Untuk yang citizenship = 'wkwkland' dengan age = 17,
  maka ubah taxID menjadi 'WKWK-2000'.
  Untuk yang citizenship = 'Indonesia' dengan age = 20,
  maka ubah taxID menjadi 'ABCD-1997'.
Ketentuan
=========
Diberikan variable name, age, citizenship, dan taxID.
Dipersilahkan mengganti nilai dari name, age dan citizenship secara manual, dan gantilah taxId sesuai dengan ketentuan program.
*/

// SKELETON CODE (Code Sample)

let name = "dedi"; // silakan berikan nilai bebas
let age = 30; // silakan berikan nilai bebas
let citizenship = 'wkwkland'; // silakan berikan nilai bebas
let taxId; // nilainya jangan di-assign langsung. gunakan program untuk mengisi ini!

// write your code here

if (!name) {
  console.log("NAMA ANDA KOSONG! TIDAK BISA DAFTAR!");
} else if (age < 17) {
  console.log("BELUM CUKUP UMUR!");
} else if (citizenship === "wkwkland"){
  taxId = `WKWK-${2017-age}`;
  console.log(taxId);
} else {
  taxId = `ABCD-${2017-age}`;
  console.log(taxId);
}
