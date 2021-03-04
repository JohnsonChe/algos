/**
 * 
 * @link https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/778/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const results = []
  const strsSorted = strs.map((str, index) => ({
    index,
    word: str.split('').sort().join('')
  }))

  strsSorted.sort((a, b) => a.word < b.word ? -1 : 1)

  let group = [strs[strsSorted[0].index]]
  results.push(group)

  for (let i = 1; i < strsSorted.length; i++) {
    const originalWord = strs[strsSorted[i].index]

    if (strsSorted[i - 1].word === strsSorted[i].word) {
      group.push(originalWord)
    } else {
      group = [originalWord]
      results.push(group)
    }
  }

  return results
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const table = {}

  for (const str of strs) {
    const key = str.split('').sort().join('')
    const val = table[key]

    if (!val) {
      table[key] = [str]
    } else {
      table[key].push(str)
    }
  }

  return Object.values(table)
};


[
  {
    index: 5,
    word: "abt"
  },
  {
    index: 0,
    word: "aet"
  },
  {
    index: 1,
    word: "aet"
  },
  {
    index: 3,
    word: "aet"
  },
  {
    index: 2,
    word: "ant"
  },
  {
    index: 4,
    word: "ant"
  }
]

{
  aet: ['eat', 'tea', 'ate'],
    ant: ['tan']
}
