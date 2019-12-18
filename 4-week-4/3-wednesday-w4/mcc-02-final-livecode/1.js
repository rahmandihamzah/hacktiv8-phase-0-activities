/*
   Uppercase sentence

   Diberikan sebuah paragraph, buatlah huruf pertama dari paragraph dan huruf pertama
   setelah tanda baca titik menjadi huruf besar.

   BUATLAH JUGA PSEUDOCODE -nya

   Rules:
    - Dilarang menggunakan regex, .reduce, .split, .indexOf
    - Wajib menggunakan pseudocode
*/

/*
PSEUDOCODE

FUNCTION properUppercase with "paragraph" as parameter

  STORE "newParagraph" with empty string

  STORE "i" with 0
  FOR EACH "i" to length of "paragraph"

    IF value of "i" = 0 THEN
      SET "newParagraph" with "newParagraph" + uppercase of index "i" value of "paragraph"
    ELSE IF index "i" - 1 value of paragraph = ' ' & index "i" - 2 value of paragraph = '.' THEN
      SET "newParagraph" with "newParagraph" + uppercase of index "i" value of "paragraph"
    ELSE IF index "i" - 1 value of paragraph = '\n' & index "i" - 2 value of paragraph = '.' THEN
      SET "newParagraph" with "newParagraph" + uppercase of index "i" value of "paragraph"
    ELSE
      SET "newParagraph" with "newParagraph" + index "i" value of "paragraph"
    END IF

  END LOOP

  RETURN "newParagraph"

END FUNCTION
*/

function properUppercase(paragraph) {
  let newParagraph = '';

  for (let i = 0; i < paragraph.length; i++) {
    if (i === 0) {
      newParagraph += paragraph[i].toUpperCase()
    } else if (paragraph[i - 1] === ' ' && paragraph[i - 2] === '.') {
      newParagraph += paragraph[i].toUpperCase()
    } else if (paragraph[i -1] === '\n' && paragraph[i - 2] === '.') {
      newParagraph += paragraph[i].toUpperCase()
    } else {
      newParagraph += paragraph[i];
    }
  }

  return newParagraph;
}

//TEST CASE
var paragraph1 = `we know it’s important that DevTools load quickly.
we have automation in place to help ensure we keep driving this time down. in 71 we got some help from the JavaScript team,
when their improvements to caching scripts for startup not only made Firefox start faster,
but DevTools too. one Console test got an astonishing 40% improvement while times across every panel were boosted by 8-15%!`

console.log(properUppercase(paragraph1));
console.log("======================")
//
// `We know it’s important that DevTools load quickly.
// We have automation in place to help ensure we keep driving this time down. In 71 we got some help from the JavaScript team,
// when their improvements to caching scripts for startup not only made Firefox start faster,
// but DevTools too. One Console test got an astonishing 40% improvement while times across every panel were boosted by 8-15%!`
//

var paragraph2 = `git push updates remote refs using local refs, while sending objects necessary to complete the given refs.
you can make interesting things happen to a repository every time you push into it, by setting up hooks there. see documentation for git-receive-pack(1).
when the command line does not specify where to push with the <repository> argument, branch"*"remote configuration for the current branch is consulted to determine where to push. if the configuration is missing, it defaults to origin.`

console.log(properUppercase(paragraph2))
// `Git push updates remote refs using local refs, while sending objects necessary to complete the given refs.
// You can make interesting things happen to a repository every time you push into it, by setting up hooks there. See documentation for git-receive-pack(1).
// When the command line does not specify where to push with the <repository> argument, branch"*"remote configuration for the current branch is consulted to determine where to push. If the configuration is missing, it defaults to origin.`
