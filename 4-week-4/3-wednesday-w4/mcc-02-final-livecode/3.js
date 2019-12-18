/*
===============
Boot Pair Count
===============
Jack sedang merapikan gudang di toko Boot-nya, dia memiliki banyak tumpukan boot-boot
yang warnanya harus dipasangkan agar dapat dijual.

Bila array yang berisi angka-angka masing-masing mewakili suatu warna, tentukanlah
ada berapa banyak pasang boot yang siap dijual oleh Jack!

[EXAMPLE]
Bila input array adalah [12, 14, 12, 12, 18, 14, 14, 12] maka:
hasilnya adalah 3, karena ada dua pasang 12 dan satu pasang 14.
- Bila tidak ada pasangan sama sekali, maka hasilnya adalah:
"Tidak ada pasangan sepatu boot ditemukan"
- Bila tidak ada boot sama sekali, maka hasilnya adalah:
"Tidak ada sepatu boot mohon cek kembali input anda"

[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
2. dilarang menggunakan regex
*/


function bootPairCount(arr) {
  let arrContainer = [];
  let result;

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (i !== j && i < j) {
  //       if (arr[i] === arr[j]) {
  //         if (arrContainer.length === 0) {
  //           arrContainer.push({});
  //           arrContainer[arrContainer.length - 1].warna = arr[i];
  //           arrContainer[arrContainer.length - 1].jumlah = 2
  //         } else {
  //           for (let k = 0; k < arrContainer.length; k++) {
  //             if (arrContainer[k].warna === arr[i]) {
  //               arrContainer[k].jumlah++
  //             }
  //             if (k === arrContainer.length - 1) {
  //               arrContainer[arrContainer.length - 1].warna = arr[i];
  //               arrContainer[arrContainer.length - 1].jumlah = 2
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }

  //   // if (arrContainer[arrContainer.length - 1].warna === undefined) {
  //   //   arrContainer.pop();
  //   // }
  // }

  if (arrContainer.length === 0) {
    arrContainer.push({});
  } else {
    for (let i = 0; i < arr.length; i++) {
      arrContainer[arrContainer.length - 1].warna = arr[i];
    }
  }


  return arrContainer;
}
//TEST CASES
console.log(bootPairCount([10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3
console.log(bootPairCount([15, 23, 23, 30, 30, 10, 15, 10])) // 4
console.log(bootPairCount([1, 2, 3, 4, 5])) // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount([])) // Tidak ada sepatu boot mohon cek kembali input anda
