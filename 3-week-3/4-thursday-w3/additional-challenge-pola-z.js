// SOAL POLA BENTUK Z
function soal_z(str, num) {
    let temp = '';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (i <= str.length - 1) {
            for (let j = 0; j < num - 1; j++) {
                // console.log(str[i]);
                for (let k = 0; k < (num - j) - 1; k++) {
                    if (j === 0) {
                        if (i <= str.length - 1) {
                            temp += str[i];
                            i++;
                        }
                    } else {
                        if (i <= str.length - 1) {
                            temp += ' ';
                        }
                    }
                }
                if (i <= str.length - 1) {
                    temp += str[i];
                    i++;
                    result += temp + '\n';
                    temp = '';
                }
            }
            
            i--;
            // if (i <= str.length) {
            // }
        }       
    }
    return result;

}

console.log(soal_z("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5));
    /*
    ABCDE
       F
      G
     H
    IJKLM
       N
      O
     P
    QRSTU
       V
      W
     X
    YZ
    */
console.log(soal_z("LOREMIPSUMDOLORSITAMET", 4));
    /*
    LORE
      M
     I
    PSUM
      D
     O
    LORS
      I
     T
    AMET
    */
console.log(soal_z("1234567890!@#$%^&*1234567890!@#$%^&*", 8));
    /*
    12345678
          9
         0
        !
       @
      #
     $
    %^&*1234
          5
         6
        7
       8
      9
     0
    !@#$%^&*
    */
console.log(soal_z("asdfghjkl", 1)); // false