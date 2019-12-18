/**
 * =================
 * SECOND BEST HERO
 * =================
 * 
 * Function ini akan mencari hero ke-2 terkuat dari list hero yang di daftarkan
 * berdasarkan total power dari hero tersebut
 * 
 * Power pada hero adalah total dari STR + INT + AGI dan tidak dari parameter lainnya
 * jika salah satu parameter tidak ada, maka parameter tersbut di hitung 0
 * 
 * Contoh: [
 *  { name: "Axe", STR: 25, INT: 18, AGI: 20 }, => total power = 63
 *  { name: "Monkey King", STR: 20, AGI: 23 }, => total power = 43 (INT TIDAK ADA, BERARTI INT = 0)
 *  { name: "Slardar", STR: 21, INT: 15, AGI: 17, EVA: 50 }, => total power = 53 (EVA TIDAK MASUK HITUNGAN)
 * ]
 * 
 * Maka output yang di harapkan adalah :
 * { name: Slardar, power: 53 }
 */

function secondBestHero(heroes) {
  let arrTemp = [];
  let result;

  for (let i = 0; i < heroes.length; i++) {
    arrTemp.push({});
    arrTemp[arrTemp.length - 1].name = heroes[i].name;
    for (const key in heroes[i]) {
      arrTemp[arrTemp.length - 1].power = 0;
      // if (typeof key !== 'string') {
      //   arrTemp[arrTemp.length - 1].power += heros[i].key;
      // }
      // if (heroes[i].STR !== undefined || heroes[i].INT !== undefined || heroes[i].AGI !== undefined) {
      // }
      if (heroes[i].STR === undefined) {
        heroes[i].STR = 0
      } else if (heroes[i].INT === undefined) {
        heroes[i].INT = 0
      } else if (heroes[i].AGI === undefined) {
        heroes[i].AGI = 0
      }

      arrTemp[arrTemp.length - 1].power += (heroes[i].STR + heroes[i].INT + heroes[i].AGI);
    }
  }

  let status = true;
  while (status) {
    status = false;
    for (let i = 0; i < arrTemp.length - 1; i++) {
      if (arrTemp[i].power < arrTemp[i + 1].power) {
        let temp = arrTemp[i];
        arrTemp[i] = arrTemp[i + 1];
        arrTemp[i + 1] = temp;
        status = true;
      }
    }
  }

  result = arrTemp[1];

  return result;
}

var heroes1 = [
  { name: "Axe", STR: 25, INT: 18, AGI: 20 },
  { name: "Lina", STR: 20, INT: 30, AGI: 23 },
  { name: "Phantom Asassin", STR: 21, INT: 15, AGI: 23 },
  { name: "Shadow Fiend", STR: 19, AGI: 20 }
]

console.log(secondBestHero(heroes1))
//{ name: 'Axe', power: 63 }

var heroes2 = [
  { name: "Abaddon", STR: 23, INT: 21, AGI: 23 },
  { name: "Batrider", STR: 28, INT: 22, AGI: 15, DMG: 20 },
  { name: "Dazzle", INT: 25, AGI: 21 },
  { name: "Invoker", STR: 18, INT: 15, AGI: 14 }
]

console.log(secondBestHero(heroes2))
//{ name: 'Batrider', power: 65 }