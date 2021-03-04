/**
 * 
 * @link https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestSoFar = 0
  let start = 0
  const table = {}

  for (let end = 0; end < s.length; end++) {
    const char = s[end]

    if (table[char] !== undefined && table[char] >= start) {
      start = table[char] + 1
    }

    table[char] = end

    const currentLength = end - start + 1

    if (longestSoFar < currentLength) {
      longestSoFar = currentLength
    }
  }

  return longestSoFar
};

"abcdefcxyz"

// 3      5
start < -> end
{
  a: 0,
    b: 1,
      c: 6,
        d: 3,
          e: 4,
            f: 5
}