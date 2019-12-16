function cariMedian(arr) {
    let median;

    let status = true;
    while (status) {
        status = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                status = false;
            }
        }
    }

    console.log(arr);

    if (arr.length % 2 === 0) {
        median = (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
    } else {
        median = arr[Math.floor(arr.length / 2)];
    }
    
    return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5