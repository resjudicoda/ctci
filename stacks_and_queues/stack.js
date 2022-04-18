class Stack {
    // Stack constructor function
    constructor() {
      this.top = null;
    }
  
    // Stack.prototype.add
    add(item) {
      const stackAdd = {
        value: item,
        next: null,
      };
      if (this.top) stackAdd.next = this.top;
      this.top = stackAdd;
      return this; // for chaining, do not edit
    }
  
    // Stack.prototype.remove
    remove() {
      if (!this.top) return undefined;
      const removedTopValue = this.top.value;
      this.top = this.top.next;
      return removedTopValue;
    }
  }

  module.exports = Stack;