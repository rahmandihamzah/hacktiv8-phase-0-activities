function ladder(word) {
    // console.log(word.length);
    let newArray = [];
    let newWord = [];
    // console.log(newWord.length);
    for (let i = 0; i < word.length; i++) {
        // console.log(`ini i ${i}`);
        for (let j = 0; j < word.length - i; j++) {
            newWord.push(word[j]);
            // console.log(newWord);
        }
        newArray.push(newWord);
        newWord = [];
    }
    return newArray;
  }
  
  // DRIVER CODE
  console.log(ladder('hacktiv8'));
  [
    [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
    [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
    [ 'h', 'a', 'c', 'k', 't', 'i' ],
    [ 'h', 'a', 'c', 'k', 't' ],
    [ 'h', 'a', 'c', 'k' ],
    [ 'h', 'a', 'c' ],
    [ 'h', 'a' ],
    [ 'h' ]
  ]