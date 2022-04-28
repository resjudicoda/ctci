const BinarySearchTree = require('../binary_search_tree.js')

// grab the middle
// instantiate or insert into tree
// split lower half and upper half into sep arrays
// recurse
const minimal_tree = function(array, tree) {
  if (!array.length) {
    return false;
  }
  let index = Math.floor(array.length / 2);
  let middle = array[index];
  if (!tree) {
    tree = new BinarySearchTree(middle);
  } else {
    tree.insert(middle)
  }
  let lowerHalf = array.slice(0, index)
  let upperHalf = array.slice(index + 1)
  minimal_tree(lowerHalf, tree);
  minimal_tree(upperHalf, tree)
  return tree;
}

module.exports = minimal_tree
