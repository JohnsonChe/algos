/**
 * 
 * @link https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/780/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  function isPalindrome(s) {
    if (s.length === 1) return true
    if (s.length === 2) return s[0] === s[1]

    return s[0] === s[s.length - 1] && isPalindrome(s.slice(1, s.length - 2))
  }
};