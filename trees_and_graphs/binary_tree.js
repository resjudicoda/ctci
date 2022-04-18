class BinaryTree {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  
    insert(val) {
      let queue = [];
      queue.push(this)
      while (queue.length) {
        let node = queue.shift();
        if (!node.left) {
          //proceed to the left
          node.left = new BinaryTree(val);
          break;
        }
        else if (!node.right) {
          //proceed to the right
          node.right = new BinaryTree(val);
          break;
        }
        else {
          queue.push(node.left);
          queue.push(node.right)
        }
      }
      return this; // for chaining, do not edit
    }
  
    contains(val) {
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
  
    in_order_traverse(callbackFunc) {
      if (this.left) this.left.in_order_traverse(callbackFunc);
      callbackFunc(this.value);
      if (this.right) this.right.in_order_traverse(callbackFunc);
    }

    pre_order_traverse(callbackFunc) {
      callbackFunc(this.value);
      if (this.left) this.left.pre_order_traverse(callbackFunc);
      if (this.right) this.right.pre_order_traverse(callbackFunc);
    }

    post_order_traverse(callbackFunc) {
      if (this.left) this.left.post_order_traverse(callbackFunc);
      if (this.right) this.right.post_order_traverse(callbackFunc);
      callbackFunc(this.value);
    }
  }
  
  module.exports = BinaryTree