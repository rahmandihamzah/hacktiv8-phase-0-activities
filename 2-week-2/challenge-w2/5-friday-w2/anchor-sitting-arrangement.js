function sittingArrangement(person, column) {
    let content = [];
    let all = [];
    let j = 0;

    if (!column || column < 1) {
        return 'Invalid number'
    } else {
        let isLast = false;
        while(isLast === false){
            for (let i = 0; i < column; i++) {
                if (person[j] === undefined) {
                    content.push('Kursi Kosong');
                } else {
                    content.push(person[j]);
                }
                j++;
            }

            all.push(content);
            content = [];
            if (all.length >= Math.ceil(person.length / column)) {
                isLast = true;
            }
        }
        return all;
    }
}
  
//DRIVER CODE
console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));
// [a
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]