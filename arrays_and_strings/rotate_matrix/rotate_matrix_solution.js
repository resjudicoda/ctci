const rotate_matrix = function(matrix) {
  if (!matrix) return false;
  let n = matrix.length;
  if (n == 0 || n != matrix[0].length) return false;

  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {

      // got some help from leetcode
      // need to perform a swap of four values
      // only need to use n, i, j, and 1

      let temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  return matrix;
}
module.exports = rotate_matrix
