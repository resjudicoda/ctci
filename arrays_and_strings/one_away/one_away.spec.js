const one_away = require('./one_away')
describe('one_away', function() {
  it('expects two strings', function() {
    expect(one_away('test')).toEqual(false);
  });
  xit('expects two strings', function() {
    expect(one_away('test', 1)).toEqual(false);
  });
  xit('works with equal length strings', function() {
    expect(one_away('pale', 'bale')).toEqual(true);
  });
  xit('works with equal length strings', function() {
    expect(one_away('pale', 'bake')).toEqual(false);
  });
  xit('fails if strings are more than one character different in length', function() {
    expect(one_away('pales', 'ale')).toEqual(false);
  });
  xit('fails if strings are more than one character different in length', function() {
    expect(one_away('ale', 'pales')).toEqual(false);
  });
  xit('works with non equal length strings', function() {
    expect(one_away('pales', 'pale')).toEqual(true);
  });
  xit('works with non equal length strings', function() {
    expect(one_away('ale', 'pale')).toEqual(true);
  });
  xit('works with non equal length strings', function() {
    expect(one_away('pale', 'ple')).toEqual(true);
  });
  xit('works with non equal length strings', function() {
    expect(one_away('ple', 'pale')).toEqual(true);
  });
});
