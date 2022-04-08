const string_compression = require('./string_compression')
describe('string_compression', function() {
  it('expects a string', function() {
    expect(string_compression()).toEqual(false);
  });
  xit('expects a string', function() {
    expect(string_compression(1)).toEqual(false);
  });
  xit('returns a string', function() {
    expect(string_compression('test')).toBeInstanceOf(String);
  });
  xit('works', function() {
    expect(string_compression('aabcccccaaa')).toEqual('a2b1c5a3');
  });
  xit('works', function() {
    expect(string_compression('fffabbzzzfff')).toEqual('f3a1b2z3f3');
  });
});
