class MyQueue {
  constructor() {
    this.in = [];
    this.out = [];
  }

  add(value) {
    this.in.push(value);
  } 

  remove(value) {
    if (this.out.length == 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
}

const queue_via_stacks = function() {
  return false;
}
module.exports = {queue_via_stacks, MyQueue }
