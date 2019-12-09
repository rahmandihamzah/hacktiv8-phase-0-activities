/*
PSEUDOCODE

STORE 'angkaAcak' with 1 to 5 random number result
STORE 'kupon' without any value

CASE BASED ON 'angkaAcak'
    CASE 1
        DISPLAY 'coba lagi ya'
    CASE 2
        SET 'kupon' value with 5
        DISPLAY 'selamat kamu mendapatkan kupon sebanyak ' 'kupon' value
    CASE 3
        SET 'kupon' value with 15
        DISPLAY 'selamat kamu mendapatkan kupon sebanyak ' 'kupon' value
    CASE 4
        SET 'kupon' value with 50
        DISPLAY 'selamat kamu mendapatkan kupon sebanyak ' 'kupon' value
    CASE 5
        SET 'kupon' value with 100
        DISPLAY 'WOW, kamu menang jackpot! Selamat!!'
END CASE
*/

let angkaAcak = (Math.floor(Math.random() * 5 + 1));
/*
Math.floor(Math.random() * 5 + 1)
- Math.random() untuk mendapatkan angka random antara 0-1
- Math.floor() untuk pembulatan ke bawah. e.g. 1.5 => 1
- Math.floor(Math.random()) hanya mendapatkan angka 0
- Math.floor(Math.random() * 5) mendapatkan angka acak 0-4, hasil maksimal 4,9999999 lalu dibulatkan ke bawah menjadi 4
- Math.floor(Math.random()* 5 + 1) mendapatkan angka acak 1-5, hasil maksimal 4,9999999 lalu ditambah 1 mjd 5,5555555 lalu dibulatkan ke bawah menjadi 5
*/
let kupon

console.log(angkaAcak);

switch (angkaAcak) {
    case 1:
        console.log('coba lagi ya');
        break;
    case 2:
        kupon = 5;
        console.log('selamat kamu mendapatkan kupon sebanyak ' + kupon);
        break;
    case 3:
        kupon = 15;
        console.log('selamat kamu mendapatkan kupon sebanyak ' + kupon);
        break;
    case 4:
        kupon = 50;
        console.log('selamat kamu mendapatkan kupon sebanyak ' + kupon);
        break;
    case 5:
        kupon = 100;
        console.log('WOW, kamu menang jackpot! Selamat!! dan kamu mendapatkan kupon sebanyak ' + kupon);
        break;
    default:
        console.log('Something error!');
        break;
}