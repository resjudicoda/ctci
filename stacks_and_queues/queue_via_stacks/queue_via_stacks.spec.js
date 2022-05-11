const queue_via_stacks = require('./queue_via_stacks')
describe('queue_via_stacks', function() {
  it('works', function() {
    expect(queue_via_stacks('test')).toEqual(true);
  });
});
