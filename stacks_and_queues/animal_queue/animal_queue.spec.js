const animal_queue = require('./animal_queue')
describe('animal_queue', function() {
  it('works', function() {
    expect(animal_queue('test')).toEqual(true);
  });
});
