let angka = 175;
console.log(`angka palindrom selanjutnya dari angka ${angka} adalah :`);
let convertAngka;
let temp = '';

i = angka
while (true) {

    convertAngka = i.toString();
    
    for (let j = convertAngka.length - 1; j >= 0; j--) {
        temp += convertAngka[j];
    }
    
    if (temp === convertAngka) {
        break;
    }

    temp = '';
    i++;
}

console.log(temp);
