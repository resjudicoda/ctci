const {LinkedList} = require('../../linked_lists/linked_list.js')

const list_of_depths = function(tree, i = 0, hash = []) {
  if (!tree) {
    return false;
  }
  if (!hash[i]) {
    hash[i] = new LinkedList
  }
  // currently adding each node to the hash array
  // not to the list at that index
  hash[i].addToTail(tree);
  if (tree.left) {
    list_of_depths(tree.left, i+1, hash);
  }
  if (tree.right) {
    list_of_depths(tree.right, i+1, hash);
  }
  return hash;
}
module.exports = list_of_depths
