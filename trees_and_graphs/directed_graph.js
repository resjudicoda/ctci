class DirectedGraph {
    constructor() {
      this.nodes = [];
      //this.rootNode = null; // optional if you want a root node
    }

    add(value) {
      // give new node an id equivalent to this.nodes.length + 1
      let numberOfNodes;
      let testLength = this.nodes.length;
      if (testLength) {
        numberOfNodes = testLength;
      } else numberOfNodes = 0
      const id = numberOfNodes;
      const newNode = new Node(id, value);
      //if (!this.root) this.root = newNode // optional if rooted
      this.nodes.push(newNode);
      return this; // for chaining, do not edit
    }
  
    connect(id, children) {
      // compare children to this.nodes ids to put actual nodes into children array
      let newChildren = [];
      if (children && children.length) {
        children.forEach((child) => {
            newChildren.push(this.nodes.find(node => node.id == child))
        })
      }
      const nodeToConnect = this.nodes.find(node => node.id == id)
      //if (!this.root) this.root = newNode // optional if rooted
      nodeToConnect.children = newChildren;
      return this; // for chaining, do not edit
    }
  }
  
  class Node {
    constructor(id, value, children = []) {
      this.id = id; 
      this.value = value;
      this.children = children;
    }
  }

  module.exports = {DirectedGraph, Node}