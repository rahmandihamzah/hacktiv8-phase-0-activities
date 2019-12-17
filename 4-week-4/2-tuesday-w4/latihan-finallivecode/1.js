/**
 * ==========================
 * What is my email provider?
 * ==========================
 *
 * Description
 * -----------
 * Email merupakan sebuah cara untuk kita berinteraksi antar satu dengan yang lainnya secara elektronik,
 * Banyak sekali provider yang menyediakan layanan email ini.
 *
 * Instruction
 * -----------
 * Buatlah sebuah fungsi yang akan mengeluarkan output provider email yang digunakan oleh user.
 *
 * Contoh
 * =======
 * @input => icha@hacktiv8.com
 * @output => Your email provider is hacktiv8 ( tidak menggunakan .com di belakang)
 *
 * Rules
 * =====
 * 1. Wajib menggunakan PESUDOCODE / ALGORITMA atau -50
 * 2. Tidak diperbolehkan menggunakan built-in function:
 *    .map .filter .reduce .split .join .indexOf .findIndex
 *
 */

/*
PREUDOCODE

STORE FUNCTION "emailProvider" with "email" as parameter

STORE "startVal" without any value
STORE "endVal" without any value
STORE "provider" with empty string

STORE "i" with 0
FOR EACH "i" to length of "email"
  IF index "i" value of "email" = "@" THEN
    "startVal" = i
  ELSE IF index "i" value of "email" = "." THEN
    "endVal" = i
    BREAK LOOP
  END IF
END LOOP

STORE "i" with 0
FOR EACH "i" to length of "email"
  IF value of "i" > value of "startVal" && value of "i" < value of "endVal" THEN
    "provider" with value of "provider" + index "i" value of "email"
  END IF
END LOOP

RETURN "provider"

DISPLAY "emailProvider" with 'yusuf@gmail.com' as value of parameter
DISPLAY "emailProvider" with 'icha@hacktiv8.com' as value of parameter
DISPLAY "emailProvider" with 'icha@yahoo.co.id' as value of parameter
*/

function emailProvider(email) {
  let startVal;
  let endVal;
  let provider = '';

  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      startVal = i;
    } else if (email[i] === '.') {
      endVal = i;
      break;
    }
  }


  for (let i = 0; i < email.length; i++) {
    if (i > startVal && i < endVal) {
      provider += email[i];
    }
  }

  return provider;
}

console.log(emailProvider('yusuf@gmail.com')) // Your email provider is gmail
console.log(emailProvider('icha@hacktiv8.com')) // Your email provider is hacktiv8
console.log(emailProvider('icha@yahoo.co.id')) // Your email provider is yahoo