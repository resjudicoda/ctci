const rotate_matrix = function(matrix) {
  if (!matrix) return false;
  let n = matrix.length;
  if (n == 0 || n != matrix[0].length) return false;
  // ctci implementations
  // for (let layer = 0; layer < n/2; layer++) {
  //   let first = layer;
  //   let last = n - 1 - layer;
  //   for (let i = first; i < last; i++) {
  //     let offset = i - first;
  //     //store top
  //     let top = matrix[first][i];
  //     //left -> top
  //     matrix[first][i] = matrix[last - offset][first];
  //     //bottom -> left
  //     matrix[last - offset][first] = matrix[last][last - offset];
  //     //right -> bottom
  //     matrix[last][last - offset] = matrix[i][last];
  //     //top -> right
  //     matrix[i][last] = top;
  //   }
  // }

  // 123  741
  // 456  852
  // 789  963

  // rows become columns in reverse order
  // columns become rows in same order but reverse sorted
  // rebuild it started with first row, but start at last column
  // 1: row[0][0] -> row[0][2] 
  // 2: row[0][1] -> row[1][2] 
  // 3: row[0][2] -> row[2][2] 

  // 4: row[1][0] -> row[0][1]
  // 5: row[1][1] -> row[1][1]
  // 6: row[1][2] -> row[2][1]

  // 7: row[2][0] -> row[0][0]
  // 8: row[2][1] -> row[1][0]
  // 9: row[2][2] -> row[2][0]

  // variables
  // outerloop 0 - 2
  // innerloop 0 - 2
  // outerloop 2 - 0

  // row number becomes your reverse array position
  // array position becomes your row number

  // i think this will only work with a copy of the matrix
  // while rows become columns, once you make one change, you dont have the same rows and columns

  // got some help from leetcode
  // i has to go to (n + 1) / 2
  // j has to go to n / 2
  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      // need
      // row[0][0] -> row[0][2]
      // row[0][2] -> row[2][2]
      // row[2][2] -> row[2][0]
      // row[2][0] -> row[0][0]

      // need to perform a swap of four values
      // only need to use n, i, j, and 1
      // let temp = matrix[i][j]; // cell 0, 0
      // matrix[i][j] = matrix[n - 1 - j][i]; // 2, 0 -> 0,0
      // matrix[n - 1 - j][i] = matrix[n - 1 - j][n - 1 - j] // 2,2 -> 2,0
      // matrix[n - 1 - j][n - 1 - j] = matrix[i][n - 1 - j] // 0,2 -> 2,2
      // matrix[i][j] = temp; // temp (0,0) -> 0, 2

      let temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;


        // desired
          // 123  741
          // 456  852
          // 789  963
    }
  }
  console.log('matrix', matrix)
  return matrix;
}
module.exports = rotate_matrix
