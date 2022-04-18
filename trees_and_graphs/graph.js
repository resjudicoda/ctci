class Graph {
    constructor() {
      this.nodes = [];
      //this.rootNode = null; // optional if you want a root node
    }
  
    add(value, children) {
      // your code here
      let numberOfNodes;
      if (this.nodes.length) {
        numberOfNodes = this.nodes.length
      } else numberOfNodes = 0
      
      const id = numberOfNodes + 1;
      // need to turn children ids into actual nodes
      // consider comparing to this.nodes for matching ids
      const newChildren = [];
      console.log('children', children)
      // need to get this working
      if (children && children.length) {
        children.forEach((child) => {
            newChildren.push(this.nodes.filter((node) => {
                node.id == child;
            }))
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