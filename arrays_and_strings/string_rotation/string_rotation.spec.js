const string_rotation = require('./string_rotation')
describe('string_rotation', function() {
  it('expects two strings', function() {
    expect(string_rotation('test')).toEqual(false);
  });
  xit('expects two strings', function() {
    expect(string_rotation('test', 5)).toEqual(false);
  });
  xit('fails if the srtrings have different lengths', function() {
    expect(string_rotation('waterbottle', 'erbottlewa')).toEqual(false);
  });
  xit('works', function() {
    expect(string_rotation('waterbottle', 'erbottlewat')).toEqual(true);
  });
  xit('works', function() {
    expect(string_rotation('waterbottle', 'tlewaterbot')).toEqual(true);
  });
  xit('works', function() {
    expect(string_rotation('waterbottle', 'ttlewaterbo')).toEqual(true);
  });
  xit('works', function() {
    expect(string_rotation('waterbottle', 'ottlewaterb')).toEqual(true);
  });
  xit('works', function() {
    expect(string_rotation('waterbottle', 'bottlewater')).toEqual(true);
  });
});
