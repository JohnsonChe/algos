/*
https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4] // [-4,-1,-1,0,1,2]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []


Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a < b ? -1 : 1)

  const results = []
  const table = nums.reduce((accum, num, i) => {
    accum[num] = i
    return accum
  }, {})
  const seen = {}
  let index = 0

  if (nums.length < 3) return results

  while (nums[index] <= 0) {
    if (nums[index] !== nums[index - 1]) {
      const target = -nums[index]

      for (let i = index + 1; i < nums.length; i++) {
        const currentNum = nums[i]
        const difference = target - currentNum

        if (table[difference] !== undefined &&
          table[difference] !== index &&
          table[difference] !== i &&
          i < table[difference] &&
          index < i &&
          !seen[`${nums[index]},${currentNum},${difference}`]) {

          results.push([nums[index], currentNum, difference])
          seen[`${nums[index]},${currentNum},${difference}`] = true
        }
      }
    }

    index++
  }

  return results
};

// [-4,-1,-1,0,1,2]
//      i  j     k
// -3
i = -4
j = -1
k = 2

// [-1, -1, 2]