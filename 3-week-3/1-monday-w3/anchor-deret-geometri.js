function tentukanDeretGeometri(arr) {
    let result;

    let doit = false;
    let i = 0;
    while(doit === false){
        if (arr[i + 1] / arr[i] === arr[i + 2] / arr[i + 1]) {
            result = true;
        } else {
            result = false;
        }

        if (result === false || i + 2 === arr.length - 1) {
            doit = true;
        }

        i++;

    }

    return result;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81,])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false