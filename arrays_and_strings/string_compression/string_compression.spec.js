const string_compression = require('./string_compression')
describe('string_compression', function() {
  it('expects a string', function() {
    expect(string_compression()).toEqual(false);
  });
  it('expects a string', function() {
    expect(string_compression(1)).toEqual(false);
  });
  it('returns a string', function() {
    expect(string_compression('test')).toBeInstanceOf(String);
  });
  it('works', function() {
    expect(string_compression('aabcccccaaa')).toEqual('a2b1c5a3');
  });
  it('works', function() {
    expect(string_compression('fffabbzzzfff')).toEqual('f3a1b2z3f3');
  });
});
