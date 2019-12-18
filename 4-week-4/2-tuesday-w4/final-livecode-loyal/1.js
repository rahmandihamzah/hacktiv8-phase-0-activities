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
PSEUDOCODE

FUNCTION "emailProfider" with "email" as paarameter

STORE "startVal" without any value
STORE "endVal" without any value
STORE "provResult" with empty string

STORE "i" with 0
FOR EACH "i" to length of "email"
  IF index "i" value of "email" = "@" THEN
    SET "startVal" with "i"
  ELSE IF index "i" value of "email" = "." THEN
    SET "endVal" with "i"
    BREAK LOOP
  END IF
END LOOP

STORE "i" with 0
FOR EACH "i" to length of "email"
  IF "i" > value of "startVal" and "i" < value of "endVal" THEN
    SET "provResult" with value of "provResult" + index "i" value of "email"
  END IF
END LOOP

RETURN "provResult"

END FUNCTION
*/

function emailProvider(email) {
  let startVal;
  let endVal;
  let provResult = "";

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      startVal = i;
    } else if (email[i] === ".") {
      endVal = i;
      break;
    }
  }

  for (let i = 0; i < email.length; i++) {
    if (i > startVal && i < endVal) {
      provResult += email[i];
    }
  }

  return provResult;
}

console.log(emailProvider('yusuf@gmail.com')) // Your email provider is gmail
console.log(emailProvider('icha@hacktiv8.com')) // Your email provider is hacktiv8
console.log(emailProvider('icha@yahoo.co.id')) // Your email provider is yahoo