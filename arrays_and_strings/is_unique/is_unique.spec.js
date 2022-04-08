const is_unique = require('./is_unique')

describe('is_unique', function() {
  it('works', function() {
    expect(is_unique('ham')).toEqual(true);
  });
  xit('works', function() {
    expect(is_unique('test')).toEqual(false);
  });
  xit('works', function() {
    expect(is_unique('apple')).toEqual(false);
  });
  xit('works', function() {
    expect(is_unique('abcdefghijklmnoz')).toEqual(true);
  });
  xit('ignores spaces', function() {
    expect(is_unique('abc def ghi')).toEqual(true);
  });
  xit('treats special characters the same as letters', function() {
    expect(is_unique('abc! def! ghi!')).toEqual(false);
  });
  xit('treats upper and lower case as distinct', function() {
    expect(is_unique('abc ABC')).toEqual(true);
  });
});