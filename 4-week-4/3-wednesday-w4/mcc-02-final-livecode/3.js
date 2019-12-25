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

  let tempArr = [];
  let temp = 0;
  let totalBoot = 0;

  if (arr.length === 0) {
    totalBoot = 'Tidak ada sepatu boot mohon cek kembali input anda';
  }
  for (let i = 0; i < arr.length; i++) {
    // console.log(`ini I = ${i}`);
    if (tempArr.length === 0) {
      tempArr.push({});
      tempArr[tempArr.length - 1].boot = arr[i];
      tempArr[tempArr.length - 1].quantity = 1;
    } else {
      for (let j = 0; j <= tempArr.length; j++) {
        // console.log(`ini J = ${j}`);
        if (j === tempArr.length) {
          tempArr.push({});
          tempArr[tempArr.length - 1].boot = arr[i];
          tempArr[tempArr.length - 1].quantity = 1;
          // console.log('==============');
          // console.log(tempArr);
          // console.log('==============');
          break;
        } else if (tempArr[j].boot === arr[i]) {
          tempArr[j].quantity++;
          break;
        }
      }
    }
    // console.log(tempArr);
  }

  // console.log(tempArr);

  for (let i = 0; i < tempArr.length; i++) {
    temp = Math.floor(tempArr[i].quantity / 2);
    // console.log(`${tempArr[i].quantity} / 2 = ${temp}`);
    if (temp >= 1) {
      totalBoot += temp / 1
    }
    temp = 0;
  }

  if (totalBoot === 0) {
    totalBoot = 'Tidak ada pasangan sepatu boot ditemukan';
  }

  return totalBoot;
}

//TEST CASES
console.log(bootPairCount([10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3
console.log(bootPairCount([15, 23, 23, 30, 30, 10, 15, 10])) // 4
console.log(bootPairCount([1, 2, 3, 4, 5])) // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount([])) // Tidak ada sepatu boot mohon cek kembali input anda
