class SetOfStacks {
  constructor() {
    this.stacks = [];
    this.current = null;
    this.capacity = 10;
  }

  push(value) {
    let current;
    if (this.current) {
      current = this.current;
    } else current = [];
    if (current.length < this.capacity) {
      current.push(value)
    } else {
      this.stacks.push(current);
      current = [];
      current.push(value)
    }
    this.current = current;
  }

  pop() {
    if (!this.current) return null;
    let current = this.current;
    let result = current.pop();
    if (current.length == 0) {
      current = this.stacks.pop()
    }
    this.current = current;
    return result;
  }
}

const stack_of_plates = function() {
  return false;
}
module.exports = { stack_of_plates, SetOfStacks }
