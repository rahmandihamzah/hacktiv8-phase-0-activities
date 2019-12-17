/**
 * =======
 * MatchIn
 * =======
 * 
 * [Description]
 * matchIn merupakan sebuah function yang menerima data berupa object pelamar ( @applicant )
 * dan mengembalikan sebuah array berisi perusahaan apa saja yang memenuhi kualifikasi
 * pelamar tersebut dan skill apa saja yang sesuai dengan kebutuhan perusahaan yang dilamar
 * 
 * Berikut adalah data dari masing-masing perusahaan:
 * | Company Name | Required Skills                          | Job Experience (years) |
 * | ------------ | ---------------------------------------- | ---------------------- |
 * | PT ABC       | XML, Kotlin, HTML, C++, Java, Javascript |            5           |
 * | PT HIJ       | Python, Javascript, HTML                 |            3           |
 * | PT JKL       | C++, Java                                |            1           |
 * | PT XYZ       | Golang, Java, JQuery                     |            2           |
 * | PT KLM       | Python, Javascript, HTML                 |            4           |
 * 
 * Adapaun kriteria minimal yang dibutuhkan pelamar untuk memenuhi kualifikasi adalah:
 * 1. Memiliki minimal 2 skill yang sama dengan perusahaan
 * 2. Memiliki pengalaman kerja yang sama/lebih besar dari perusahaan
 * 
 * [Example]
 *  @applicant = {
 *    name: 'Yusuf',
 *    skills: ['Javascript', 'HTML'],
 *    experience: 3
 *  }
 *   
 * Penjelasan:
 * - Tidak masuk PT ABC => hanya punya javascript dan pengalaman < 5 tahun
 * - Masuk PT HIJ => memiliki skill yang cocok (javascript & html) dan pengalaman 3 tahun
 * - Tidak masuk PT JKL => Tidak memiliki skill yang cocok
 * - Tidak masuk PT XYZ => Tidak memiliki skill yang cocok
 * - Tidak masuk PT KLM => hanya memiliki skill javascript dan pengalaman < 4 tahun
 * 
 * Maka:
 * @output = [
 *   {
 *     companyName: 'PT HIJ',
 *     matchedSkills: ['Javascript', 'HTML']
 *   }
 * ]
 * 
 * [Rules]
 * 1. DILARANG menggunakan built in function: map, reduce, filter
 * 2. Skill dalam key matchedSkills tidak perlu berurut sesuai test case selama skill yang cocok sesuai
 */


function matchIn(applicant) {
  let resultMatch = [];
  let company = [{"name": "PT ABC", "requirement": ["XML", "Kotlin", "HTML", "C++", "Java", "Javascript"], "exp": 5}, {"name": "PT HIJ", "requirement": ["Python", "Javascript", "HTML"], "exp": 3}, {"name": "PT JKL", "requirement": ["C++", "Java"], "exp": 1}, {"name": "PT XYZ", "requirement": ["Golang", "Java", "JQuery"], "exp": 2}, {"name": "PT KLM", "requirement": ["Python", "Javascript", "HTML"], "exp": 4}];

  for (let i = 0; i < company.length; i++) {
    resultMatch.push({});
    resultMatch[resultMatch.length - 1].companyName = company[i].name;
    resultMatch[resultMatch.length - 1].matchSkills = [];
    for (let j = 0; j < applicant.skills.length; j++) {
      // console.log(resultMatch[resultMatch.length - 1]);
      for (let k = 0; k < company[i].requirement.length; k++) {
        if (applicant.skills[j] === company[i].requirement[k]) {
          if (applicant.experience >= company[i].exp) {
              resultMatch[resultMatch.length - 1].matchSkills.push(company[i].requirement[k]);
          }
        }
      }
    }
    if (resultMatch[resultMatch.length - 1].matchSkills.length < 2) {
    resultMatch.pop();
  }
  }

  if (resultMatch.length === 0) {
    resultMatch = 'Unqualified!'
  }
  
  return resultMatch;
}

var applicant1 = {
  name: 'Alpha',
  skills: ['Android', 'Kotlin', 'XML', 'Python', 'PHP'],
  experience: 5
}
console.log(matchIn(applicant1))
// [
//   { companyName: 'PT ABC', matchedSkills: [ 'XML', 'kotlin' ] },
// ]

var applicant2 = {
  name: 'Beta',
  skills: ['PHP', 'HTML', 'CSS', 'JQuery', 'Python'],
  experience: 1
}
console.log(matchIn(applicant2))
// Unqualified!

var applicant3 = {
  name: 'Charlie',
  skills: ['HTML', 'Photoshop', 'CSS', 'Javascript'],
  experience: 7
}
console.log(matchIn(applicant3))
// [
//   { companyName: 'PT ABC', matchedSkills: ['HTML', 'Javascript'] },
//   { companyName: 'PT HIJ', matchedSkills: ['Javascript', 'HTML'] },
//   { companyName: 'PT KLM', matchedSkills: ['Javascript', 'HTML'] }
// ]

var applicant4 = {
  name: 'Delta',
  skills: ['Python', 'PHP', 'C++', 'Javascript'],
  experience: 3
}
console.log(matchIn(applicant4))
// [
//   { companyName: 'PT HIJ', matchedSkills: ['Python', 'Javascript'] }
// ]