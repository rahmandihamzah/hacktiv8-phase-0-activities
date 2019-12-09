// Antrian
console.log('Antrian');
let arrayAntrian = ['person 1', 'person 2', 'person 3'];

function antrian (line, person) {
    line.push(person);
    return line;
}
console.log(antrian(arrayAntrian, 'person selanjutnya'));
console.log('====================================');

// Panggil antrian
console.log('Pangggil antrian');
function panggilAntrian (line) {
    return line.slice(1);
}
console.log(panggilAntrian(arrayAntrian));
console.log('====================================');


// Tumpukan
console.log('Tumpukan');
function tumpukan(line, title) {
    line.unshift(title);
    return line;
}
console.log(tumpukan(arrayAntrian, 'person 1 masuk lagi'));
console.log('====================================');


// Ganjil genap
function ganjilGenap(plat) {
    let temp = '';
    let genap = 0;
    let ganjil = 0;

    if (!plat && plat === '') {
        return 'Plat tidak ditemukan';
    } else if (!plat) {
        return 'Invalid data';
    } else {
        for (let i = 0; i < plat.length; i++) {
            if (plat[i] === ';') {
                    if (+temp[temp.length - 1] % 2 === 0) {
                        genap += 1;
                    } else if (+temp[temp.length - 1] % 2 !== 0) {
                        ganjil += 1;
                    }
                    temp = '';
            } else if (i === plat.length - 1) {
                temp += plat[i];
                if (+temp[temp.length - 1] % 2 === 0) {
                    genap += 1;
                } else if (+temp[temp.length - 1] % 2 !== 0) {
                    ganjil += 1;
                }
            }{
                temp += plat[i];
            }
        }
        
        if (genap === 0) {
            return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`;
        } else if (ganjil === 0) {
            return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`;
        } else {
            return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`;
        }
    }
  }
  
  console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
  console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
  console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
  console.log(ganjilGenap('')) //plat tidak ditemukan
  console.log(ganjilGenap()) //invalid data