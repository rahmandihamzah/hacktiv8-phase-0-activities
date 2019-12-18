/*
  ===========
  HASIL UJIAN
  ===========

  Hasil Ujian adalah sebuah fungsi untuk mendapatkan informasi status lulus atau
  tidak lulus-nya student yang mengikuti ujian

  Fungsi ini akan mengembalikan sebuah object dengan jumlah student, nama-nama student
  yang lolos, nama-nama student yang gagal, nilai tertinggi dan nilai rata-rata student

  - Student dinyatakan lulus jika nilainya lebih dari atau sama dengan 70

  [RULES]:

  - TIDAK boleh menggunakan built in function max(), filter(), find(), sort()
  - TIDAK boleh menggunakan Regex
*/

function hasilUjian(students){
    let resultData = {};
    resultData.jumlahStudent = 0;
    resultData.lulus = [];
    resultData.gagal = [];
    resultData.nilaiTertinggi = 0;
    resultData.nilaiAverage = 0;

    if (students.length === 0) {
        resultData = "TIDAK ADA PESERTA UJIAN";
    } else {
        for (let i = 0; i < students.length; i++) {
            resultData.jumlahStudent = i + 1;
            if (students[i].nilai >= 70) {
                resultData.lulus.push(students[i].nama);
                if (students[i].nilai > resultData.nilaiTertinggi) {
                    resultData.nilaiTertinggi = students[i].nilai;
                }
            } else {
                resultData.gagal.push(students[i].nama);
            }
            resultData.nilaiAverage += students[i].nilai;
        }
        resultData.nilaiAverage = Math.ceil(resultData.nilaiAverage/students.length);
    }

    if (resultData.nilaiTertinggi === 0) {
        resultData = "Invalid Input";
    }


    return resultData;
}

console.log(hasilUjian([
    {
        nama: "Arman",
        nilai: 90
    },
    {
        nama: "Budi",
        nilai: 70
    },
    {
        nama: "Caca",
        nilai: 50
    },
    {
        nama: "Dina",
        nilai: 60
    },
    {
        nama: "Erwin",
        nilai: 100
    },
]));

/* OUTPUT:
{
    jumlahStudent: 5,
    lulus: ["Arman", "Budi", "Erwin"],
    gagal: ["Caca", "Dina"]
    nilaiTertinggi: 100,
    nilaiAverage: 74
}
*/

console.log(hasilUjian([
    {
        nama: "Daniel",
        nilai: 23
    },
    {
        nama: "Bima",
        nilai: 69
    },
    {
        nama: "Karim",
        nilai: 97
    },
    {
        nama: "Armedi",
        nilai: 83
    },
    {
        nama: "Dimitri",
        nilai: 45
    },
    {
        nama: "Barry",
        nilai: 77
    },
]));

/* OUTPUT:
{
    jumlahStudent: 6,
    lulus: [ 'Karim', 'Armedi', 'Barry' ],
    gagal: [ 'Daniel', 'Bima', 'Dimitri' ],
    nilaiTertinggi: 97,
    nilaiAverage: 66
}
*/

console.log(hasilUjian([]));
// "TIDAK ADA PESERTA UJIAN"

console.log(hasilUjian("Dito"));
// "Invalid Input"

console.log(hasilUjian(20));
// "Invalid Input"
