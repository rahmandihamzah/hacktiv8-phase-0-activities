let kata = 'hacktiv8';
let num = kata.length;
let content = '';

// console.log(kata[kata.length - 1]);

for (let i = 1; i <= num; i++) {
// looping baris
    for (let j = i; j < num; j++) {
    // looping spasi
        content += ' ';
    }
    if (num % 2 === 0) {
    // jika panjang 'kata' genap
        if (i % 2 === 0) {
        // jika terletak di baris genap
            for (let j = kata.length - i; j <= kata.length - 1; j++) {
            // looping kata tidak terbalik, ambil huruf dari posisi ke panjang kata - i, berhenti di huruf di posisi terakhir
                content += kata[j]
            }
        } else {
        // jika terletak di baris ganjil
            for (let j = 1; j <= i; j++) {
            // looping kata terbalik, ambil huruf dari posisi terakhir, berhenti di huruf yg ada di posisi i
                content += kata[kata.length - j];
            }
        }
        console.log(content);
        content = '';
    } else {
    // jika panjang 'kata' ganjil
        if (i % 2 !== 0) {
        // jika terletak di baris ganjil
            for (let j = kata.length - i; j < kata.length; j++) {
            // looping kata tidak terbalik, ambil huruf dari posisi ke panjang kata - i, berhenti di huruf di posisi terakhir
                content += kata[j]
            }
        } else {
        // jika terletak di baris genap
            for (let j = 1; j <= i; j++) {
            // looping kata terbalik, ambil huruf dari posisi terakhir, berhenti di huruf yg ada di posisi i
                content += kata[kata.length - j];
            }
        }
        console.log(content);
        content = '';
    }
}