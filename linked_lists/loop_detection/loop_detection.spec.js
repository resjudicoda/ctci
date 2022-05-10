const loop_detection = require('./loop_detection')
describe('loop_detection', function() {
  it('works', function() {
    expect(loop_detection('test')).toEqual(true);
  });
});
