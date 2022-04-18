class Graph {
    constructor() {
      this.nodes = [];
      //this.rootNode = null; // optional if you want a root node
    }
  
    add(value, children) {
      // give new node an id equivalent to this.nodes.length + 1
      let numberOfNodes;
      if (this.nodes.length) {
        numberOfNodes = this.nodes.length
      } else numberOfNodes = 0
      const id = numberOfNodes + 1;
      // compare children to this.nodes ids to put actual nodes into children array
      let newChildren = [];
      if (children && children.length) {
        children.forEach((child) => {
            newChildren.push(this.nodes.filter(node => node.id == child)[0])
        })
      }
      const newNode = new Node(id, value, newChildren);
      //if (!this.root) this.root = newNode // optional if rooted
      this.nodes.push(newNode);
      return this; // for chaining, do not edit
    }
  
    remove() {

    }
  }
  
  class Node {
    constructor(id, value, children = []) {
      this.id = id; 
      this.value = value;
      this.children = children;
    }
  }

  module.exports = {Graph, Node}