class Queue {
    // Queue constructor function
    constructor() {
      (this.first = null), (this.last = null);
    }
  
    // Queue.prototype.add
    add(item) {
      // your code here
      const queueAdd = {
        value: item,
        next: null,
      };
      if (!this.first) this.first = queueAdd;
      if (this.last) this.last.next = queueAdd;
      this.last = queueAdd;
      return this; // for chaining, do not edit
    }
  
    // Queue.prototype.remove
    remove() {
      if (!this.first) return undefined;
      const removedFirstValue = this.first.value;
      this.first = this.first.next;
      return removedFirstValue;
    }

    clear() {
      while (this.first) {
        this.first = this.first.next;
      }
      return undefined;
    }
  }

  module.exports = Queue;