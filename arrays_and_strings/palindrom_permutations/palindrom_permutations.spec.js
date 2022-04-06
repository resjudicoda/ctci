const palindrom_permutations = require('./palindrom_permutations')
describe('palindrom_permutations', function() {
  it('expects a string', function() {
    expect(palindrom_permutations(45)).toEqual(false);
  });
  it('works', function() {
    expect(palindrom_permutations('tacocat')).toEqual(true);
  });
  it('works', function() {
    expect(palindrom_permutations('tacoca')).toEqual(false);
  });
  it('ignores spaces', function() {
    expect(palindrom_permutations('madam im adam')).toEqual(true);
  });
  it('ignores spaces', function() {
    expect(palindrom_permutations('sit on a potato pan otis')).toEqual(true);
  });
  it('works with scrambled palindromes', function() {
    expect(palindrom_permutations('a cat cot')).toEqual(true);
  });
  it('works with scrambled palindromes', function() {
    expect(palindrom_permutations('sit otis on a potato pan')).toEqual(true);
  });
});
