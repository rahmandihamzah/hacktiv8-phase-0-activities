function sorting(arrNumber) {
    let biggest = [0];

    if (arrNumber.length !== 0) {
        for (let i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] > biggest[0]) {
                biggest = [arrNumber[i]];
            } else if (arrNumber[i] === biggest[0]) {
                biggest.push(arrNumber[i]);
            }
        }
    }

    return biggest;    
}
  
function getTotal(arrNumber) {
    let biggest = sorting(arrNumber)[0];
    let group = sorting(arrNumber).length;
    

    if (biggest === 0) {
        return '';
    } else {
        return `angka paling besar adalah ${biggest} dan jumlah kemunculannya sebanyak ${group} kali`;
    }
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''