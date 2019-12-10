function changeVocals (str) {
    let newStr = '';
    // let abjad = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // 0, 4, 8, 14, 20, 26, 30, 34, 40, 46
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            newStr += 'b';
        } else if (str[i] === 'i') {
            newStr += 'j';
        } else if (str[i] === 'u') {
            newStr += 'v';
        } else if (str[i] === 'e') {
            newStr += 'f';
        } else if (str[i] === 'o') {
            newStr += 'p';
        } else if (str[i] === 'A') {
            newStr += 'B';
        } else if (str[i] === 'I') {
            newStr += 'J';
        } else if (str[i] === 'U') {
            newStr += 'V';
        } else if (str[i] === 'E') {
            newStr += 'F';
        } else if (str[i] === 'O') {
            newStr += 'P';
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

function reverseWord (str) {
    let result = changeVocals(str);

    let newStr = '';
    for (let i = result.length - 1; i >= 0; i--) {
        newStr += result[i];
    }

    return newStr;
}

function setLowerUpperCase (str) {
    let result = reverseWord(str);

    let newStr = '';
    for (let i = 0; i < result.length; i++) {
        if (result[i] === result[i].toUpperCase()) {
            newStr += result[i].toLowerCase()
        } else if (result[i] === result[i].toLowerCase()) {
            newStr += result[i].toUpperCase()
        }
    }

    return newStr;
}

function removeSpaces (str) {
    let result = setLowerUpperCase(str);

    let newStr = '';
    for (let i = 0; i < result.length; i++) {
        if (result[i] === ' ') {
            i++
        } else {
            newStr += result[i];
        }
    }
    return newStr;
}

function passwordGenerator (name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        let result = removeSpaces(name);

        return result;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'