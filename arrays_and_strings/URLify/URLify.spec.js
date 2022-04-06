const URLify = require('./URLify')
describe('URLify', function() {
  it('expects a string and a number', function() {
    expect(URLify('test')).toEqual(false);
  });
  it('works', function() {
    expect(URLify('test string', 11)).toEqual('test%20string');
  });
  it('works', function() {
    expect(URLify('second test string', 18)).toEqual('second%20test%20string');
  });
  it('stops at excess white space', function() {
    expect(URLify('third test string   ', 17)).toEqual('third%20test%20string');
  });
  it('accepts length as a string', function() {
    expect(URLify('test with string number', '23')).toEqual('test%20with%20string%20number');
  });
});
