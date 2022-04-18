class BinarySearchTree {
    // BinarySearchTree constructor function
    constructor(val) {
      // your code here
      this.value = val;
      this.left = null;
      this.right = null;
    }
  
    // BinarySearchTree.prototype.insert
    insert(val) {
      // your code here
      if (val < this.value) {
        //proceed to the left
        !this.left
          ? (this.left = new BinarySearchTree(val))
          : this.left.insert(val);
      }
      if (val > this.value) {
        //proceed to the right
        !this.right
          ? (this.right = new BinarySearchTree(val))
          : this.right.insert(val);
      }
      return this; // for chaining, do not edit
    }
  
    // BinarySearchTree.prototype.min
    min() {
      // your code here
      if (!this.left) return this.value;
      return this.left.min();
    }
  
    // BinarySearchTree.prototype.max
    max() {
      // your code here
      if (!this.right) return this.value;
      return this.right.max();
    }
  
    // BinarySearchTree.prototype.contains
    contains(val) {
      // your code here
      let found = false;
      if (val === this.value) found = true;
      if (!found && this.left) {
        found = this.left.contains(val);
      }
      if (!found && this.right) {
        found = this.right.contains(val);
      }
      return found;
    }
  
    // BinarySearchTree.prototype.traverse
    traverse(callbackFunc) {
      // your code here
      if (this.left) this.left.traverse(callbackFunc);
      callbackFunc(this.value);
      if (this.right) this.right.traverse(callbackFunc);
    }
  }
  
  module.exports = BinarySearchTree;