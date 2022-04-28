const BinarySearchTree = require('../binary_search_tree.js')

const minimal_tree = function(array) {
  if (!array.length) {
    return false;
  }
  let tree;
  while (array.length) {
    let index = array.length / 2;
    let middle = array[index];
    array.splice(index, 1);
    if (!tree) {
      tree = new BinarySearchTree(middle)
    }
    else {
      tree.insert(middle)
    }
  }

  return tree;
}
module.exports = minimal_tree
