/**
=======
VOTES
=======

Diberikan sebuah function hitungVotes yang menerima sebuah parameter bertipe array multidimensi.

Function ini akan mengembalikan sebuah object dimana object tersebut menampilkan
data totalVote dan siapa saja yang melakukan vote terhadap kandidat tersebut

Untuk contoh silakan melihat DRIVER CODE / TEST CASES

RULES:
------
- DILARANG MENGGUNAKAN built-in-function .split()
**/

function hitungVotes(data) {
  let resultData = {};
  let temp = '';
  let totalVote = 0;

  if (!data) {
    resultData = 'Invalid data';
  } else if (data.length === 0) {
    resultData = 'Tidak ada data yang bisa diproses';
  } else {
    for (let i = 0; i < data.length; i++) {
      if (resultData[data[i][0]] === undefined) {
        resultData[data[i][0]] = {}
        resultData[data[i][0]].TotalVote = totalVote;
        resultData[data[i][0]].Voters = [];
        for (let j = 0; j < data[i][2].length; j++) {
          if (data[i][2][j] === ";") {
            resultData[data[i][0]].Voters.push(temp);
            temp = '';
          } else if (j === data[i][2].length - 1) {
            temp += data[i][2][j];
            resultData[data[i][0]].Voters.push(temp);
            temp = '';
          } else {
            temp += data[i][2][j];
          }
        }
      } else {
        for (let j = 0; j < data[i][2].length; j++) {
          if (data[i][2][j] === ";") {
            resultData[data[i][0]].Voters.push(temp);
            temp = '';
          } else if (j === data[i][2].length - 1) {
            temp += data[i][2][j];
            resultData[data[i][0]].Voters.push(temp);
            temp = '';
          } else {
            temp += data[i][2][j];
          }
        }
      }
      totalVote = resultData[data[i][0]].Voters.length;
      resultData[data[i][0]].TotalVote = totalVote;

    }
  }


  return resultData;
}

/* DRIVER CODE / TEST CASE */

console.log(hitungVotes([
  ['Ricky', '10 Desember 2019', 'Hansin;Fiqri;July;Desi'],
  ['Sofyan', '10 Desember 2019', 'Heri;Ulfa;Annisa;Puji;Fakhran'],
  ['Sofyan', '11 Desember 2019', ''],
  ['Ricky', '11 Desember 2019', 'Asrawi;Rahmandi'],
]));

// {
//   Ricky: {
//     totalVote: 6,
//     voters: ['Hansin', 'Fiqri', 'July', 'Desy', 'Asrawi', 'Rahmandi']
//   },
//   Sofyan: {
//     totalVote: 5,
//     voters: ['Heri', 'Ulfa', 'Annisa', 'Puji', 'Fakhran']
//   }
// }

console.log(hitungVotes([])); // "Tidak ada data yang bisa diproses"
console.log(hitungVotes()); //Invalid data
