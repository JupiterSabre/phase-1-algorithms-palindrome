function isPalindrome(word) {
  // Write your algorithm here
  if (word === [...word].reverse().join(""))
  return true;
  else return (false)
};

console.log(isPalindrome("dad"))

/* /home/seb_slack_91/Development/code/phase-1/phase-1-algorithms-palindrome/test
  Add your pseudocode here
  function isPalindrome (paramneter) {
    if parameter is === reverse string of paramter, return true,
    else return false
  }
*/

/*
  Add written explanation of your solution here
  Created an if else statement, the if part applies 3 operations on the paramter to verify whether the string is the same in revers aka a Palindrome. The else statement is the catch all for if the statement is false, aka not a palindrome.
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
