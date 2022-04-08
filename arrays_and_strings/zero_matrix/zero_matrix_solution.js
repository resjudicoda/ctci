const zero_matrix = function(matrix) {
  // if element in m x n matrix is 0, its entire row and coloum are zero
  if (!matrix) return false;
  if (!matrix.length | !matrix[0].length) return false;
  let m = matrix.length; // height
  let n = matrix[0].length; // width

  // loop through matrix, find zeros, then set first element of respective row and col to zero
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  // now loop through the first row and col using the new zeros to id rows and cols to zero out
  // loop through first row, look for zeros, then zero that column
  for (let x = 0; x < n; x++) {
    if (matrix[0][x] == 0) {
      for (let y = 0; y < m; y++) {
        matrix[y][x] = 0
      }
    }
  }
  // loop through first column, look for zeros, then zero that row
  for (let a = 0; a < m; a++) {
    if (matrix[a][0] == 0) {
      for (let b = 0; b < n; b++) {
        matrix[a][b] = 0
      }
    }
  }
  return matrix;
}
module.exports = zero_matrix