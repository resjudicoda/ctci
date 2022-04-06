const is_unique = require('./is_unique')

describe('is_unique', function() {
  it('works', function() {
    expect(is_unique('ham')).toEqual(true);
  });
  it('works', function() {
    expect(is_unique('test')).toEqual(false);
  });
  it('works', function() {
    expect(is_unique('apple')).toEqual(false);
  });
  it('works', function() {
    expect(is_unique('abcdefghijklmnoz')).toEqual(true);
  });
  it('ignores spaces', function() {
    expect(is_unique('abc def ghi')).toEqual(true);
  });
  it('treats special characters the same as letters', function() {
    expect(is_unique('abc! def! ghi!')).toEqual(false);
  });
  it('treats upper and lower case as distinct', function() {
    expect(is_unique('abc ABC')).toEqual(true);
  });
});