function vocalSeeker(board) {
    let sum = 0;
    let collection = '';

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "A" || board[i][j] === "a" || board[i][j] === "I" || board[i][j] === "i" || board[i][j] === "U" || board[i][j] === "u" || board[i][j] === "E" || board[i][j] === "e" || board[i][j] === "O" || board[i][j] === "o") {
                sum++;
                collection += board[i][j];
            }
        }
    }
    return `vokal ditemukan ${sum} dan kumpulan vokal adalah ${collection}`;
  }
  
  //DRIVER CODE
  let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
  ]
  
  console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo