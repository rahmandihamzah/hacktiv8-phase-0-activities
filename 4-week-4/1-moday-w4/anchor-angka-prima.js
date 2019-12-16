function angkaPrima(angka) {
    let arrTemp = [];

    for (let i = 1; i <= angka; i++) {
        if (arrTemp.length === 0) {
            arrTemp.push(i);
        } else {
            if (Math.ceil(angka / i) * i === angka) {
                arrTemp.push(i);
            }
        }
    }

    if (arrTemp.length === 2) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false