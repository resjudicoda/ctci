const rotate_matrix = require('./rotate_matrix')
describe('rotate_matrix', function() {
  it('expects a two dimensional array', function() {
    expect(rotate_matrix([])).toEqual(false);
  });
  it('expects a two dimensional array', function() {
    expect(rotate_matrix([[1, 2, 3], [4, 5, 6]])).toEqual(false);
  });
  it('works', function() {
    expect(rotate_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
    .toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  });
  it('works', function() {
    expect(rotate_matrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))
    .toEqual([[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
  });
});
