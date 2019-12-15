/*
INPUT
---------
[
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];
OUTPUT
-----------
BUAT DUA FUNCTION DIMANA FUNCTION PERTAMA OUTPUTNYA SEBAGAI BERIKUT:
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]

lolos : >= 70

FUNCTION KEDUA OUTPUTNYA SEBAGAI BERIKUT:
// {
//   passed: [ 'John', 'Budi', 'Yolo' ],
//   failed: [ 'Siti', 'Aaron', 'Mike', 'Osass', 'Arthur' ],
//   classCode: { 
//       A: `1 passed 2 failed`,
//       B: `0 passed 2 failed`,
//       C: `2 passed 1 failed`
//   }
// }
*/

function passedStudent(data){
  let resultData = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].score >= 70) {
      for (let j = 0; j <= resultData.length; j++) {
        if (resultData.length === 0) {
          resultData.push({});
          resultData[resultData.length - 1].classCode = data[i].classCode;
          resultData[resultData.length - 1].passed = [];
          resultData[resultData.length - 1].passed.push(data[i].name);
          console.log(resultData[j].classCode);
        } else if (data[i].classCode === resultData[j].classCode) {
          resultData[resultData[j]].passed.push(data[i].name);
        } else if (j === resultData.length) {
          resultData.push({});
          resultData[resultData.length - 1].classCode = data[i].classCode;
          resultData[resultData.length - 1].passed = [];
          resultData[resultData.length - 1].passed.push(data[i].name);
        }
      }
    }
  }

  return resultData;
}

function passedStudentDetail(dataPassed){
  let resultData = dataPassed;

  return resultData;
}

console.log(passedStudentDetail(passedStudent([
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
])));