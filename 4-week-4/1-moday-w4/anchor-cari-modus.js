function cariModus(arr) {
    let modusCandidate = [];
    let result;
    
    for (let i = 0; i < arr.length; i++) {
        modusCandidate.push({});
        modusCandidate[modusCandidate.length - 1].val = arr[i];
        modusCandidate[modusCandidate.length - 1].count = 1;
        for (let j = 0; j <= arr.length; j++) {
            if (j !== i) {
                if (arr[i] === arr[j]) {
                    if (j > i) {
                    modusCandidate[modusCandidate.length - 1].val = arr[i];
                    modusCandidate[modusCandidate.length - 1].count++;
                    }
                }

                if (j === arr.length) {
                    if (modusCandidate[modusCandidate.length - 1].count === 1) {
                        modusCandidate.pop();
                    }
                }
            }
        }
    }

    if (modusCandidate.length === arr.length - 1) {
        result = - 1;
    } else if (modusCandidate.length === 1) {
        result = modusCandidate[0].val;
    } else if (modusCandidate.length === 0) {
        result = -1
    } else if (modusCandidate.length > 1) {
        let status = true;
        while (status) {
            status = false;
            for (let i = 0; i < modusCandidate.length - 1; i++) {
                if (modusCandidate[i].count < modusCandidate[i + 1].count) {
                    let temp = modusCandidate[i];
                    modusCandidate[i] = modusCandidate[i + 1];
                    modusCandidate[i + 1] = temp;
                    status = true;
                }
            }
        }
        
        result = modusCandidate[0].val;
    }

    return result;
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1