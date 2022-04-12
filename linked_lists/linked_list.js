class LinkedList {
    // LinkedList constructor function
    constructor() {
      this.head = this.tail = null;
    }
  
    // LinkedList.prototype.addToTail
    addToTail(item) {
      // your code here
      const newNode = new ListNode(item);
      if (!this.head && !this.tail) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      return this; // for chaining, do not edit
    }
  
    // LinkedList.prototype.removeFromTail
    removeFromTail() {
      // your code here
      if (!this.tail) return undefined;
      if (this.tail === this.head) {
        const removedTailValue = this.tail.item;
        this.head = this.tail = null;
        return removedTailValue;
      }
      const removedTailValue = this.tail.item;
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      return removedTailValue;
    }
  
    // LinkedList.prototype.forEach
    forEach(callbackFunc) {
      // your code here
      let current = this.head;
      while (current) {
        callbackFunc(current);
        current = current.next;
      }
    }
  }
  
  class ListNode {
    // ListNode constructor function
    constructor(item, prev, next) {
      this.item = item;
      this.next = next || null;
      this.prev = prev || null;
    }
  }

  module.exports = {LinkedList, ListNode}