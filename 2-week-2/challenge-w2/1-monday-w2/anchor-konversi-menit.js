let detik = 88;

console.log("case detik = " + detik);

let ite = Math.floor(detik / 60);
let menit = '0'

if (detik < 60) {
    if (detik.toString().length === 1) {
        menit = menit + ':' + 0 + detik;
    } else {
        menit = menit + ":" + detik;
    }
} else {
    for (let i = 1; i <= ite; i++) {
        if (detik >= 60) {
            detik = detik - 60;
            if (detik.toString().length === 1) {
                menit = i + ':' + 0 + detik;
            } else {
                menit = i + ':' + detik;
            }
        } else {
            menit = menit + ':' + detik;
        }
    }
}

console.log(menit);
console.log("============")

let detik2 = 44;

console.log("case detik = " + detik2);

let ite2 = Math.floor(detik2 / 60);
let menit2 = '0'

if (detik2 < 60) {
    if (detik2.toString().length === 1) {
        menit2 = menit2 + ':' + 0 + detik2;
    } else {
        menit2 = menit2 + ":" + detik2;
    }
} else {
    for (let i = 1; i <= ite2; i++) {
        if (detik2 >= 60) {
            detik2 = detik2 - 60;
            if (detik2.toString().length === 1) {
                menit2 = i + ':' + 0 + detik2;
            } else {
                menit2 = i + ':' + detik2;
            }
        } else {
            menit2 = menit2 + ':' + detik2;
        }
    }
}

console.log(menit2);
console.log("============")

let detik3 = 61;

console.log("case detik = " + detik3);

let ite3 = Math.floor(detik3 / 60);
let menit3 = '0'

if (detik3 < 60) {
    if (detik3.toString().length === 1) {
        menit3 = menit3 + ':' + 0 + detik3;
    } else {
        menit3 = menit3 + ":" + detik3;
    }
} else {
    for (let i = 1; i <= ite3; i++) {
        if (detik3 >= 60) {
            detik3 = detik3 - 60;
            if (detik3.toString().length === 1) {
                menit3 = i + ':' + 0 + detik3;
            } else {
                menit3 = i + ':' + detik3;
            }
        } else {
            menit3 = menit3 + ':' + detik3;
        }
    }
}

console.log(menit3);
console.log("============")