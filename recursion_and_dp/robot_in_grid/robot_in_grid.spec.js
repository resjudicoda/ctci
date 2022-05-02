const {robot_in_grid_main, robot_in_grid_helper} = require('./robot_in_grid')
describe('robot_in_grid', function() {
  let grid;
  beforeEach(function () {
      grid = [
        [1, 0, 1, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 1],
        [1, 1, 0, 1]
      ];
  });
  xit('works', function() {
    expect(robot_in_grid_helper(grid)).toEqual(true);
  });
});
