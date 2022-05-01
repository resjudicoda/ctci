const triple_step = require('./triple_step')
describe('triple_step', function() {
  xit('handles base case 0', function() {
    expect(triple_step(0)).toBeInstanceOf(Number);
  });
  xit('works', function() {
    expect(triple_step(3)).toEqual(4);
    expect(triple_step(4)).toEqual(7);
    expect(triple_step(5)).toEqual(13);
  });
});
