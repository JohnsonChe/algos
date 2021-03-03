// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/

/**
 * Time-complexity: O(m * n)
 * Space-complexity: O(1)
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 0) {
        // updating the row
        for (let i = 0; i < n; i++) {
          if (matrix[row][i] !== 0) {
            matrix[row][i] = Infinity
          }
        }

        // updating the col
        for (let i = 0; i < m; i++) {
          if (matrix[i][col] !== 0) {
            matrix[i][col] = Infinity
          }
        }
      }
    }
  }
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === Infinity)
        matrix[row][col] = 0
    }
  }
};
