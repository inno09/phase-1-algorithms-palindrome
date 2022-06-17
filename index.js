const str = 'ant?'
function isPalindrome(str) {
  let re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  let len = str.length;
  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }
 isPalindrome("A man, a plan, a canal. Panama");
  console.log(str);
  // const isPalindrome = (inStr) => {
  //   inStr = inStr.replace(/\W/g, '');
  //   inStr = inStr.toLowerCase();
  //   for  (let i=0; i<inStr.length; i+=1) {
  //     if (inStr[i] !== inStr[inStr.length - 1 - i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // Write your algorithm here
  


/* 
  Add your pseudocode here
*/
// That means if the
// first letter is the same as last letter, and the second letter is the same
// as the second to last letter, etc. until we reach the middle, return true.
// iterate from the beginning to the middle
// check each letter to the correponding letter from the end
//  if any letters don't match, return false
//  return true
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
