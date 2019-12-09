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
PSEUDOCODE

STORE "level" with any number
STORE "demage" without any value

IF "level" >= 1 & "level" <= 15 THEN
    SET "demage" with value of "level" * 2 result
    DISPLAY "demage"
ELSE IF "level" >= 16 & "level" <= 20 THEN
    SET "demage" with (value of "level" * 2) + 5 result
    DISPLAY "demage"
ELSE IF "level" >= 21 & "level" <= 25 THEN
    SET "demage" with (value of "level" * 2) + 10 result
    DISPLAY "demage"
ELSE
    DISPLAY 'Invalid level'
END IF
*/