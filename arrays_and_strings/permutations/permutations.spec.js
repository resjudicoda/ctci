const permutations = require('./permutations')
describe('permutations', function() {
  it('requires two strings', function() {
    expect(permutations('test')).toEqual(false);
  });
  it('fails if the strings have different lengths', function() {
    expect(permutations('test, tests')).toEqual(false);
  });
  it('works', function() {
    expect(permutations('test', 'stet')).toEqual(true);
  });
  it('works', function() {
    expect(permutations('abcde', 'edcba')).toEqual(true);
  });
  it('works', function() {
    expect(permutations('spike', 'pikes')).toEqual(true);
  });
  it('works', function() {
    expect(permutations('11111', '1111')).toEqual(false);
  });
});
