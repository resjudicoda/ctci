// still working on this one
//from ctci
const robot_in_grid_main = function(grid, row, col, path, visited) {
  if (col < 0 || row < 0 || !grid[row][col]) {
    return false;
  }

  let isAtOrigin = (row == 0 && col == 0);
  let point = [row, col];

  if (visited.includes(point)) {
    return false;
  }

  if (isAtOrigin || robot_in_grid_main(grid, row, col - 1, path, visited) ||
  robot_in_grid_main(grid, row - 1, col, path, visited)) {
    path.push(point);
    return true;
  }
  visited.push(point)
  return false;

}

// helper function handles setting row, col, and path 
// so you dont have to use optional parameters
// can call main directly if parameters are specified
const robot_in_grid_helper = function(grid) {
  if (grid == null || grid.length == 0) return null;
  let path = [];
  let visited = [];
  if (robot_in_grid_main(grid, grid.length - 1, grid[0].length - 1, path, visited)) {
    return path;
  }
  return null;
}
module.exports = { robot_in_grid_main, robot_in_grid_helper }