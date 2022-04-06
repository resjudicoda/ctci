const zero_matrix = require('./zero_matrix')
describe('zero_matrix', function() {
  it('works', function() {
    expect(zero_matrix('test')).toEqual(true);
  });
});
