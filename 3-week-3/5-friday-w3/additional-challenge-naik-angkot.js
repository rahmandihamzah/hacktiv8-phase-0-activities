/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.
Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let lapPenumpang = [];
    let totalBayar;

    for (let i = 0; i < arrPenumpang.length; i++) {
        let naik;
        let turun;
        for (let j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                naik = j;
            } else if (arrPenumpang[i][2] === rute[j]) {
                turun = j;
            }
        }

        if (turun > naik) {
            totalBayar = (turun - naik) * 2000;
        } else {
            totalBayar = (naik - turun) * 2000;
        }

        lapPenumpang.push({});
        lapPenumpang[lapPenumpang.length - 1][arrPenumpang[i][0]] = arrPenumpang[i][0];
        lapPenumpang[lapPenumpang.length - 1].naikDari = arrPenumpang[i][1];
        lapPenumpang[lapPenumpang.length - 1].tujuan = arrPenumpang[i][2];
        lapPenumpang[lapPenumpang.length - 1].bayar = totalBayar;
    }

    return lapPenumpang;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]