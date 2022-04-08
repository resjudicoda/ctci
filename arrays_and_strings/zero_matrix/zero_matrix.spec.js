const zero_matrix = require('./zero_matrix')
describe('zero_matrix', function() {
  it('expects a matrix', function() {
    expect(zero_matrix()).toEqual(false);
  });
  it('fails with empty matrix', function() {
    expect(zero_matrix([[]])).toEqual(false);
  });
  it('works', function() {
    expect(zero_matrix([[1, 2, 3, 4], [5, 0, 7, 8], [9, 10, 11, 12]]))
    .toEqual([[1, 0, 3, 4], [0, 0, 0, 0], [9, 0, 11, 12]]);
  });
  it('works with multiple zeros', function() {
    expect(zero_matrix([[1, 2, 3, 4], [5, 0, 7, 8], [9, 10, 0, 12]]))
    .toEqual([[1, 0, 0, 4], [0, 0, 0, 0], [0, 0, 0, 0]]);
  });
  it('works with big matrix', function() {
    expect(zero_matrix([[1, 2, 3, 4, 5,], [6, 0, 8, 9, 10], [11, 12, 13, 0, 15], [16, 17, 18, 19, 20]]))
    .toEqual([[1, 0, 3, 0, 5,], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [16, 0, 18, 0, 20]]);
  });
});
