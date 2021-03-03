/**
 * 
 * @link https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/778/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

};


[
  { e: 1, a: 1, t: 1 },
  { t: 1, e: 1, a: 1, b: 4 }
]



function compareObjs(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

  for (const key in obj1) {
    const val1 = obj1[key]
    const val2 = obj2[key]

    if (val1 !== val2) return false
  }

  return true
}

// ["eat","tea","tan","ate","nat","bat"]

// [['eat', 'tea']]