/*
Buatlah sebuah algoritma untuk kasus berikut:

Sebuah game memiliki hero dan hero tersebut memiliki atribut level dan damage.
Damage dari hero tergantung dari levelnya, perhitungan damage akan mengikuti aturan berikut:

- Damage Hero Level 1-15: level dikalikan 2
- Damage Hero Level 16-20: (level dikalikan 2) + 5
- Damage Hero Level 21-25: (level dikalikan 2) + 10
- Selain level yang disebutkan di atas, tampilkan "Invalid level" dan hentikan program

Lalu tampilkan damage hero berdasarkan levelnya sekarang
*/

// Your algorithm/pseudocode here

/*
STORE "hero" with any string
STORE "damage" with any number
STORE "level" with any number

IF value of "level" >= 1 and "level" <= 15 THEN
    SET "damage" with result of "level" * 2
ELSE IF value of "level" >= 16 and "level" <= 20 THEN
    SET "damage" with result of ("level" * 2) + 5
ELSE IF value of "level" >= 21 and "level" <= 25 THEN
    SET "damage" with result of ("level" * 2) + 10
ELSE
    SET "damage" with "Invalid level"
END IF

DISPLAY "damage"
*/