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